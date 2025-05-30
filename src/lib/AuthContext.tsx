"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { AuthService } from './auth'
import { upsertProfile } from './profile'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, metadata?: any) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active sessions and sets the user
    const initializeAuth = async () => {
      try {
        const { user } = await AuthService.getUser()
        setUser(user)
      } catch (error) {
        console.error('Error initializing auth:', error)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()
  }, [])

  const signIn = async (email: string, password: string) => {
    const { user, error } = await AuthService.signIn({ email, password })
    if (error) throw error
    setUser(user)
  }

  const signUp = async (email: string, password: string, metadata?: any) => {
    const { user, error } = await AuthService.signUp({ email, password, metadata })
    if (error) throw error
    setUser(user)
    if (user) {
      await upsertProfile({
        id: user.id,
        full_name: metadata?.name || '',
        avatar_url: user.user_metadata?.avatar_url || null,
        role: 'admin',
      })
    }
  }

  const signInWithGoogle = async () => {
    const { error } = await AuthService.signInWithGoogle()
    if (error) throw error
    // The actual upsert will be handled in the OAuth callback route
  }

  const signOut = async () => {
    const { error } = await AuthService.signOut()
    if (error) throw error
    setUser(null)
  }

  const resetPassword = async (email: string) => {
    const { error } = await AuthService.resetPassword(email)
    if (error) throw error
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signInWithGoogle, signOut, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 