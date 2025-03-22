import * as vscode from 'vscode';
import { Config } from './config';
import { SupabaseService } from './services/supabase.service';
import { AuthService } from './services/auth.service';
import { Rule } from './models/rule.model';
import { RuleDownloaderService } from './services/rule-downloader.service';
import { RulesExplorerProvider, RuleExplorerItem, RuleExplorerItemType } from './views/rules-explorer';
import { RuleViewer } from './views/rule-viewer';
import { Logger, LogLevel } from './utils/logger';
import { AuthHandler } from './handlers/auth-handler';

/**
 * Entry point for the extension
 */
export async function activate(context: vscode.ExtensionContext) {
    try {
        // Initialize logger
        const logger = Logger.getInstance();
        logger.configure({
            level: LogLevel.INFO,
            outputToConsole: false,
            redactSensitiveData: true,
        });

        logger.info('Activating CodingRules.ai extension', 'Extension');

        // Initialize configuration
        const config = Config.getInstance(context);

        // Get Supabase configuration
        const supabaseConfig = config.getSupabaseConfig();

        // Initialize services - make sure to await the auth service initialization
        const supabaseService = SupabaseService.initialize(supabaseConfig);
        const authService = await AuthService.initialize(supabaseConfig, context);

        // Link services (circular dependency resolution)
        supabaseService.setAuthService(authService);

        // Initialize authentication handler
        const authHandler = new AuthHandler(context, authService);
        authHandler.register();

        // Initialize rule downloader service
        const ruleDownloaderService = new RuleDownloaderService();

        // Initialize the explorer provider
        const rulesExplorerProvider = new RulesExplorerProvider(context);

        // Register the explorer view
        const rulesExplorerView = vscode.window.createTreeView('codingrulesExplorer', {
            treeDataProvider: rulesExplorerProvider,
            showCollapseAll: true,
        });

        // Add the tree view to context subscriptions
        context.subscriptions.push(rulesExplorerView);

        // Register command to refresh explorer
        context.subscriptions.push(
            vscode.commands.registerCommand('codingrules-ai.refreshExplorer', () => {
                rulesExplorerProvider.refreshData();
            }),
        );

        // Register command to view rule details
        context.subscriptions.push(
            vscode.commands.registerCommand('codingrules-ai.viewRule', async (node: RuleExplorerItem) => {
                if (node.type === RuleExplorerItemType.RULE && node.dataId) {
                    // Get full rule data
                    const rule = await supabaseService.getRule(node.dataId);

                    // Show rule panel
                    if (rule) {
                        RuleViewer.show(rule, context);
                    } else {
                        vscode.window.showErrorMessage('Could not load rule details.');
                    }
                }
            }),
        );

        // Register command to download rule from explorer
        context.subscriptions.push(
            vscode.commands.registerCommand('codingrules-ai.downloadRule', async (node: RuleExplorerItem | Rule) => {
                try {
                    let rule: Rule | null = null;
                    let selectedFormat: string | undefined;

                    // Handle different input types
                    if (node instanceof RuleExplorerItem) {
                        // Case 1: Input is a TreeItem from the explorer
                        if (node.type === RuleExplorerItemType.RULE && node.dataId) {
                            rule = await supabaseService.getRule(node.dataId);
                        } else {
                            vscode.window.showErrorMessage('Could not download: Item is not a rule.');
                            return;
                        }
                    } else if (typeof node === 'object' && node !== null) {
                        // Case 2: Input is a Rule object
                        rule = node as Rule;
                        // Check if the rule has a selectedFormat property (from rule-viewer)
                        if ((rule as any).selectedFormat) {
                            selectedFormat = (rule as any).selectedFormat;
                        }
                    } else {
                        vscode.window.showErrorMessage('Invalid input for download command.');
                        return;
                    }

                    if (!rule) {
                        vscode.window.showErrorMessage('Could not load rule details for download.');
                        return;
                    }

                    // Show file picker for download location
                    const workspaceFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;

                    // Let the user select the folder
                    const folderUri = await vscode.window.showOpenDialog({
                        canSelectFiles: false,
                        canSelectFolders: true,
                        canSelectMany: false,
                        openLabel: 'Select Folder to Save Rule',
                        defaultUri: workspaceFolder ? vscode.Uri.file(workspaceFolder) : undefined,
                    });

                    if (!folderUri || folderUri.length === 0) {
                        // User cancelled
                        return;
                    }

                    // Download the rule
                    const filePath = await ruleDownloaderService.downloadRule(rule, {
                        directory: folderUri[0].fsPath,
                        format: selectedFormat,
                        includeMetadata: true,
                    });

                    // Open the file
                    const openDocument = await vscode.workspace.openTextDocument(filePath);
                    await vscode.window.showTextDocument(openDocument);

                    vscode.window.showInformationMessage(`Rule "${rule.title}" has been downloaded.`);
                } catch (error) {
                    logger.error('Error downloading rule', error, 'Extension');
                    vscode.window.showErrorMessage(
                        `Failed to download rule: ${error instanceof Error ? error.message : String(error)}`,
                    );
                }
            }),
        );

        // Register command to copy rule content to clipboard
        context.subscriptions.push(
            vscode.commands.registerCommand('codingrules-ai.copyRuleContent', async (node: RuleExplorerItem) => {
                if (node.type === RuleExplorerItemType.RULE && node.dataId) {
                    try {
                        // Get full rule data
                        const rule = await supabaseService.getRule(node.dataId);

                        if (!rule || !rule.content) {
                            vscode.window.showErrorMessage('Could not load rule content for copying.');
                            return;
                        }

                        // Copy the content to the clipboard
                        await vscode.env.clipboard.writeText(rule.content);
                        vscode.window.showInformationMessage(`Rule content copied to clipboard.`);
                    } catch (error) {
                        logger.error('Error copying rule to clipboard', error, 'Extension');
                        vscode.window.showErrorMessage(
                            `Failed to copy rule: ${error instanceof Error ? error.message : String(error)}`,
                        );
                    }
                }
            }),
        );

        // Register command to search for rules
        context.subscriptions.push(
            vscode.commands.registerCommand('codingrules-ai.searchRules', async () => {
                const searchQuery = await vscode.window.showInputBox({
                    prompt: 'Search for rules by title, content, or tags',
                    placeHolder: 'E.g., "best practices", "security", etc.',
                });

                if (searchQuery) {
                    // Reset explorer to show search results
                    // Implementation will need to be added to support search in RulesExplorerProvider
                    rulesExplorerProvider.refresh();

                    // Search the API
                    const { rules } = await supabaseService.searchRules({ query: searchQuery });

                    if (rules.length === 0) {
                        vscode.window.showInformationMessage('No rules found matching your search.');
                    } else {
                        vscode.window.showInformationMessage(`Found ${rules.length} rules matching your search.`);
                    }
                }
            }),
        );

        // Register command to clear search
        context.subscriptions.push(
            vscode.commands.registerCommand('codingrules-ai.clearSearch', async () => {
                rulesExplorerProvider.refresh();
            }),
        );

        // Browse rules on website command
        context.subscriptions.push(
            vscode.commands.registerCommand('codingrules-ai.browseWebsite', async () => {
                await vscode.env.openExternal(vscode.Uri.parse('https://codingrules.ai/rules'));
            }),
        );

        logger.info('CodingRules.ai extension activated successfully', 'Extension');
    } catch (error) {
        const logger = Logger.getInstance();
        logger.error('Error activating extension', error, 'Extension');
        vscode.window.showErrorMessage(
            `Error activating CodingRules.ai extension: ${error instanceof Error ? error.message : String(error)}`,
        );
    }
}

/**
 * Called when the extension is deactivated
 */
export function deactivate() {
    Logger.getInstance().info('CodingRules.ai extension deactivated', 'Extension');
}
