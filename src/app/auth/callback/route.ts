import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { upsertProfile } from '@/lib/profile'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            try {
              cookieStore.set({ name, value, ...options })
            } catch (error) {
              // Handle cookie errors
              console.error('Error setting cookie:', error)
            }
          },
          remove(name: string, options: any) {
            try {
              cookieStore.set({ name, value: '', ...options })
            } catch (error) {
              // Handle cookie errors
              console.error('Error removing cookie:', error)
            }
          },
        },
      }
    )

    try {
      const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (error) {
        console.error('Error exchanging code for session:', error)
        return NextResponse.redirect(new URL('/auth/signin', request.url))
      }

      if (!session) {
        console.error('No session returned after code exchange')
        return NextResponse.redirect(new URL('/auth/signin', request.url))
      }

      // Get the user and upsert the profile
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        await upsertProfile({
          id: user.id,
          full_name: user.user_metadata?.name || user.user_metadata?.full_name || user.email || '',
          avatar_url: user.user_metadata?.avatar_url || null,
          role: 'admin',
        })
      }

      // URL to redirect to after sign in process completes
      return NextResponse.redirect(new URL('/dashboard', request.url))
    } catch (error) {
      console.error('Error in auth callback:', error)
      return NextResponse.redirect(new URL('/auth/signin', request.url))
    }
  }

  // If no code is present, redirect to sign in
  return NextResponse.redirect(new URL('/auth/signin', request.url))
} 