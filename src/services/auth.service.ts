import * as vscode from 'vscode';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { Config, SupabaseConfig } from '../config';
import { Database } from '../types/database.types';

/**
 * Service for handling authentication with Supabase
 */
export class AuthService {
    private static instance: AuthService;
    private client: SupabaseClient<Database>;
    private context: vscode.ExtensionContext;
    private _currentUser: User | null = null;
    private readonly SESSION_KEY = 'codingrules-ai.session';

    private constructor(config: SupabaseConfig, context: vscode.ExtensionContext) {
        this.client = createClient<Database>(config.url, config.anonKey);
        this.context = context;
        // Initialize and load any existing session
        this.loadSession().catch((error) => {
            console.error('Error loading session during initialization:', error);
        });
    }

    /**
     * Get singleton instance of AuthService
     */
    public static getInstance(config?: SupabaseConfig, context?: vscode.ExtensionContext): AuthService {
        if (!AuthService.instance && config && context) {
            AuthService.instance = new AuthService(config, context);
        }

        if (!AuthService.instance) {
            throw new Error('AuthService not initialized');
        }

        return AuthService.instance;
    }

    /**
     * Initialize the Auth service with configuration
     */
    public static initialize(config: SupabaseConfig, context: vscode.ExtensionContext): AuthService {
        AuthService.instance = new AuthService(config, context);
        return AuthService.instance;
    }

    /**
     * Get the current authenticated user, if any
     */
    public get currentUser(): User | null {
        return this._currentUser;
    }

    /**
     * Check if a user is currently authenticated
     */
    public get isAuthenticated(): boolean {
        return this._currentUser !== null;
    }

    /**
     * Get the current session token, if any
     */
    public async getAccessToken(): Promise<string | null> {
        const session = await this.client.auth.getSession();
        return session.data.session?.access_token || null;
    }

    /**
     * Log in a user with email and password
     */
    public async login(email: string, password: string): Promise<User> {
        try {
            const { data, error } = await this.client.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            if (!data.user) {
                throw new Error('No user returned from authentication');
            }

            this._currentUser = data.user;
            await this.saveSession();

            // Notify about successful login
            vscode.window.showInformationMessage(`Logged in as ${data.user.email}`);

            return data.user;
        } catch (error) {
            console.error('Login error:', error);
            vscode.window.showErrorMessage(`Login failed: ${error instanceof Error ? error.message : String(error)}`);
            throw error;
        }
    }

    /**
     * Log out the current user
     */
    public async logout(): Promise<void> {
        try {
            const { error } = await this.client.auth.signOut();

            if (error) {
                throw error;
            }

            this._currentUser = null;
            await this.clearSession();

            vscode.window.showInformationMessage('Successfully logged out');
        } catch (error) {
            console.error('Logout error:', error);
            vscode.window.showErrorMessage(`Logout failed: ${error instanceof Error ? error.message : String(error)}`);
            throw error;
        }
    }

    /**
     * Set the session from external tokens (used for web app redirect auth)
     */
    public async setSessionFromTokens(accessToken: string, refreshToken: string): Promise<void> {
        try {
            // Set the session in the Supabase client
            const { data, error } = await this.client.auth.setSession({
                access_token: accessToken,
                refresh_token: refreshToken,
            });

            if (error) {
                throw error;
            }

            if (data?.user) {
                this._currentUser = data.user;
                await this.saveSession();
            } else {
                throw new Error('No user data returned from session');
            }
        } catch (error) {
            console.error('Error setting session from tokens:', error);
            throw error;
        }
    }

    /**
     * Load saved session from storage
     */
    private async loadSession(): Promise<void> {
        try {
            // Attempt to restore session from storage
            const savedAccessToken = await this.context.secrets.get(this.SESSION_KEY + '.access');
            const savedRefreshToken = await this.context.secrets.get(this.SESSION_KEY + '.refresh');

            if (savedAccessToken && savedRefreshToken) {
                // Set the session in the Supabase client
                const { data, error } = await this.client.auth.setSession({
                    access_token: savedAccessToken,
                    refresh_token: savedRefreshToken,
                });

                if (error) {
                    console.error('Error restoring session:', error);
                    await this.clearSession();
                    return;
                }

                // Get the user from the session
                if (data?.user) {
                    this._currentUser = data.user;
                    console.log('Session loaded successfully for user:', data.user.email);
                }
            }
        } catch (error) {
            console.error('Error loading session:', error);
            // Clear any potentially corrupt session
            await this.clearSession();
        }
    }

    /**
     * Save current session to storage
     */
    private async saveSession(): Promise<void> {
        if (!this._currentUser) {
            return;
        }

        try {
            const { data } = await this.client.auth.getSession();
            if (data.session) {
                // Store both tokens separately
                await this.context.secrets.store(this.SESSION_KEY + '.access', data.session.access_token);
                await this.context.secrets.store(this.SESSION_KEY + '.refresh', data.session.refresh_token);
                console.log('Session saved successfully for user:', this._currentUser.email);
            }
        } catch (error) {
            console.error('Error saving session:', error);
        }
    }

    /**
     * Clear saved session from storage
     */
    private async clearSession(): Promise<void> {
        try {
            await this.context.secrets.delete(this.SESSION_KEY + '.access');
            await this.context.secrets.delete(this.SESSION_KEY + '.refresh');
        } catch (error) {
            console.error('Error clearing session:', error);
        }
    }
}
