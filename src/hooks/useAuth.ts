import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { User } from '@supabase/supabase-js'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    let mounted = true

    const initializeAuth = async () => {
      try {
        // Get initial session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) {
          console.error('Error getting session:', sessionError)
          setError('Failed to get session')
          return
        }

        if (mounted) {
          setUser(session?.user ?? null)
          setLoading(false)
        }

        // Listen for auth changes
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange(async (_event, session) => {
          if (mounted) {
            setUser(session?.user ?? null)
            setLoading(false)
          }
        })

        return () => {
          mounted = false
          subscription.unsubscribe()
        }
      } catch (err) {
        console.error('Error initializing auth:', err)
        if (mounted) {
          setError('Failed to initialize auth')
          setLoading(false)
        }
      }
    }

    initializeAuth()
  }, [])

  return {
    user,
    loading,
    error,
    signIn: async (email: string, password: string) => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        return data
      } catch (err) {
        console.error('Error signing in:', err)
        throw err
      }
    },
    signUp: async (email: string, password: string) => {
      try {
        const { data, error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        return data
      } catch (err) {
        console.error('Error signing up:', err)
        throw err
      }
    },
    signOut: async () => {
      try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
      } catch (err) {
        console.error('Error signing out:', err)
        throw err
      }
    },
  }
} 