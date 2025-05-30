"use client"
import { useEffect, useState } from 'react'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { useAuth } from '@/lib/AuthContext'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
  const { user } = useAuth()
  const [tokenCount, setTokenCount] = useState<number>(0)
  const [buyAmount, setBuyAmount] = useState<number>(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    if (user) {
      fetchTokenCount()
    }
    // eslint-disable-next-line
  }, [user])

  async function fetchTokenCount() {
    setLoading(true)
    setError(null)
    setSuccess(null)
    const { data, error } = await supabase
      .from('tokens')
      .select('amount')
      .eq('user_id', user.id)
    if (error) {
      setError('Failed to fetch licenses')
      setTokenCount(0)
    } else {
      const total = (data || []).reduce((sum, t) => sum + t.amount, 0)
      setTokenCount(total)
    }
    setLoading(false)
  }

  async function handleBuyLicenses(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)
    const { error } = await supabase
      .from('tokens')
      .insert([{ user_id: user.id, amount: buyAmount }])
    if (error) {
      setError('Failed to buy licenses')
    } else {
      setSuccess(`Successfully bought ${buyAmount} license${buyAmount > 1 ? 's' : ''}`)
      setBuyAmount(1)
      fetchTokenCount()
    }
    setLoading(false)
  }

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="mb-6">Welcome to your backend panel!</p>
        <div className="mb-8 p-4 bg-gray-50 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Your Licenses</h2>
          <div className="text-2xl font-bold mb-2">{loading ? 'Loading...' : tokenCount}</div>
          <form onSubmit={handleBuyLicenses} className="flex items-center gap-2 mt-4">
            <input
              type="number"
              min={1}
              value={buyAmount}
              onChange={e => setBuyAmount(Number(e.target.value))}
              className="border px-2 py-1 rounded w-24"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              {loading ? 'Processing...' : 'Buy License(s)'}
            </button>
          </form>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          {success && <div className="text-green-600 mt-2">{success}</div>}
        </div>
        {/* Add dashboard widgets, links, or stats here */}
      </div>
    </ProtectedRoute>
  )
} 