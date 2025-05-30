"use client"
import { useEffect, useState } from 'react'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { useAuth } from '@/hooks/useAuth'
import { createBrowserClient } from '@supabase/ssr'

export default function DashboardPage() {
  const { user } = useAuth()
  const [tokens, setTokens] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [buyAmount, setBuyAmount] = useState<number>(0)
  const [buying, setBuying] = useState(false)

  useEffect(() => {
    const loadTokens = async () => {
      if (!user?.id) {
        setLoading(false)
        return
      }
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )
      try {
        // First try to get existing tokens
        const { data, error } = await supabase
          .from('tokens')
          .select('balance')
          .eq('user_id', user.id)
          .single()

        if (error && error.code === 'PGRST116') {
          // No record found, create one with 0 balance
          const { error: insertError } = await supabase
            .from('tokens')
            .insert([{ user_id: user.id, balance: 0 }])
          
          if (insertError) throw insertError
          setTokens(0)
        } else if (error) {
          throw error
        } else {
          setTokens(data?.balance || 0)
        }
      } catch (err) {
        console.error('Error loading tokens:', err)
        setError('Failed to load tokens')
      } finally {
        setLoading(false)
      }
    }

    loadTokens()
  }, [user?.id])

  const handleBuyTokens = async () => {
    if (!user?.id) {
      setError('You must be logged in to buy tokens')
      return
    }
    setBuying(true)
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    try {
      // Create a transaction record
      const { error } = await supabase
        .from('token_transactions')
        .insert([{
          user_id: user.id,
          amount: buyAmount,
          type: 'add',
          description: 'Tokens purchased by user',
          created_by: user.id
        }])

      if (error) throw error

      // Refresh tokens
      const { data, error: refreshError } = await supabase
        .from('tokens')
        .select('balance')
        .eq('user_id', user.id)
        .single()

      if (refreshError) throw refreshError
      setTokens(data?.balance || 0)
      setBuyAmount(0)
    } catch (err) {
      console.error('Error buying tokens:', err)
      setError('Failed to buy tokens')
    } finally {
      setBuying(false)
    }
  }

  if (loading) {
    return <div className="p-4">Loading...</div>
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>
  }

  if (!user?.id) {
    return <div className="p-4">Please log in to access this page.</div>
  }

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="mb-6">Welcome to your backend panel!</p>
        <div className="mb-8 p-4 bg-gray-50 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Your Tokens</h2>
          <div className="text-2xl font-bold mb-2">{tokens}</div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Buy More Tokens</h2>
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                value={buyAmount || ''}
                onChange={(e) => setBuyAmount(parseInt(e.target.value) || 0)}
                className="border rounded px-3 py-2 w-32"
                placeholder="Amount"
              />
              <button
                onClick={handleBuyTokens}
                disabled={buying || buyAmount <= 0}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {buying ? 'Buying...' : 'Buy Tokens'}
              </button>
            </div>
          </div>
        </div>
        {/* Add dashboard widgets, links, or stats here */}
      </div>
    </ProtectedRoute>
  )
} 