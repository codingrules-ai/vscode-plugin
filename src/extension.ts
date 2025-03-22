import * as vscode from 'vscode';
import { AuthCommandHandler, ExplorerCommandHandler, RuleCommandHandler } from './commands';
import { Config } from './config';
import { AuthHandler } from './handlers/auth-handler';
import { AuthService } from './services/auth.service';
import { SupabaseService } from './services/supabase.service';
import { Logger, LogLevel } from './utils/logger';
import { RulesExplorerProvider } from './views/explorer';

/**
 * Entry point for the extension
 */
export async function activate(context: vscode.ExtensionContext) {
    try {
        // Initialize logger
        const logger = Logger.getInstance();
        logger.configure({
            level: LogLevel.DEBUG, // Set to DEBUG level to capture all logs
            outputToConsole: true, // Output to console for development visibility
            redactSensitiveData: false, // Show full details for debugging the auth issue
        });

        // Show the log output channel to the user
        logger.show();

        logger.info('Activating CodingRules.ai extension', 'Extension');

        // Initialize configuration
        const config = Config.getInstance(context);

        // Get Supabase configuration
        const supabaseConfig = config.getSupabaseConfig();

        // Initialize core services
        const supabaseService = SupabaseService.initialize(supabaseConfig);
        const authService = await AuthService.initialize(supabaseConfig, context);

        // Link services (circular dependency resolution)
        supabaseService.setAuthService(authService);

        // Initialize authentication handler
        const authHandler = new AuthHandler(context, authService);
        authHandler.register();

        // Initialize the explorer provider
        const rulesExplorerProvider = new RulesExplorerProvider(context);

        // Register the explorer view
        const rulesExplorerView = vscode.window.createTreeView('codingrulesExplorer', {
            treeDataProvider: rulesExplorerProvider,
            showCollapseAll: true,
        });

        // Make sure to dispose the provider when extension is deactivated
        context.subscriptions.push(rulesExplorerProvider, rulesExplorerView);

        // Initialize and register command handlers
        const ruleCommandHandler = new RuleCommandHandler(context);
        ruleCommandHandler.register();

        const explorerCommandHandler = new ExplorerCommandHandler(context, rulesExplorerProvider);
        explorerCommandHandler.register();

        const authCommandHandler = new AuthCommandHandler(context);
        authCommandHandler.register();

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
