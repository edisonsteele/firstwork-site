import { supabase } from './supabase'
import { AuthError, User } from '@supabase/supabase-js'

export interface AuthResponse {
  user: User | null
  error: AuthError | null
}

export interface SignUpData {
  email: string
  password: string
  metadata?: {
    [key: string]: any
  }
}

export interface SignInData {
  email: string
  password: string
}

export class AuthService {
  /**
   * Sign up a new user
   */
  static async signUp({ email, password, metadata }: SignUpData): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
        },
      })

      return {
        user: data.user,
        error,
      }
    } catch (error) {
      return {
        user: null,
        error: error as AuthError,
      }
    }
  }

  /**
   * Sign in an existing user
   */
  static async signIn({ email, password }: SignInData): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      return {
        user: data.user,
        error,
      }
    } catch (error) {
      return {
        user: null,
        error: error as AuthError,
      }
    }
  }

  /**
   * Sign in with Google
   */
  static async signInWithGoogle(): Promise<{ error: AuthError | null }> {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      return { error }
    } catch (error) {
      return { error: error as AuthError }
    }
  }

  /**
   * Sign out the current user
   */
  static async signOut(): Promise<{ error: AuthError | null }> {
    try {
      const { error } = await supabase.auth.signOut()
      return { error }
    } catch (error) {
      return { error: error as AuthError }
    }
  }

  /**
   * Get the current user session
   */
  static async getSession() {
    try {
      const { data: { session }, error } = await supabase.auth.getSession()
      return { session, error }
    } catch (error) {
      return { session: null, error: error as AuthError }
    }
  }

  /**
   * Get the current user
   */
  static async getUser() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser()
      return { user, error }
    } catch (error) {
      return { user: null, error: error as AuthError }
    }
  }

  /**
   * Reset password for a user
   */
  static async resetPassword(email: string): Promise<{ error: AuthError | null }> {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })
      return { error }
    } catch (error) {
      return { error: error as AuthError }
    }
  }

  /**
   * Update user password
   */
  static async updatePassword(newPassword: string): Promise<{ error: AuthError | null }> {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      })
      return { error }
    } catch (error) {
      return { error: error as AuthError }
    }
  }

  /**
   * Update user metadata
   */
  static async updateUserMetadata(metadata: { [key: string]: any }): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: metadata,
      })

      return {
        user: data.user,
        error,
      }
    } catch (error) {
      return {
        user: null,
        error: error as AuthError,
      }
    }
  }
} 