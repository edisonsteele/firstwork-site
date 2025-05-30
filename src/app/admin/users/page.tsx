"use client"

// Admin users page for managing user tokens
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { getManagedUsersWithTokens, addTokensToUser } from '@/app/actions/users'
import { UserWithTokens } from '@/types'

export default function AdminUsersPage() {
  const { user } = useAuth()
  const [users, setUsers] = useState<UserWithTokens[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [addAmount, setAddAmount] = useState<Record<string, number>>({})
  const [adding, setAdding] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const loadUsers = async () => {
      if (!user?.id) {
        setLoading(false)
        return
      }
      try {
        const data = await getManagedUsersWithTokens(user.id)
        setUsers(data)
      } catch (err) {
        setError('Failed to load users')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [user?.id])

  if (loading) {
    return <div className="p-4">Loading...</div>
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>
  }

  if (!user?.id) {
    return <div className="p-4">Please log in to access this page.</div>
  }

  // At this point, TypeScript knows user.id exists
  const adminId = user.id

  const handleAddTokens = async (userId: string) => {
    setAdding((prev) => ({ ...prev, [userId]: true }))
    try {
      await addTokensToUser(userId, addAmount[userId] || 0, adminId)
      // Refresh users
      const updated = await getManagedUsersWithTokens(adminId)
      setUsers(updated)
      // Clear the input
      setAddAmount((prev) => ({ ...prev, [userId]: 0 }))
    } catch (err) {
      setError('Failed to add tokens')
      console.error(err)
    } finally {
      setAdding((prev) => ({ ...prev, [userId]: false }))
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{user.email}</h2>
                <p className="text-sm text-gray-600">Tokens: {user.tokens}</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  value={addAmount[user.id] || ''}
                  onChange={(e) =>
                    setAddAmount((prev) => ({
                      ...prev,
                      [user.id]: parseInt(e.target.value) || 0,
                    }))
                  }
                  className="border rounded px-2 py-1 w-24"
                  placeholder="Amount"
                />
                <button
                  onClick={() => handleAddTokens(user.id)}
                  disabled={adding[user.id]}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
                >
                  {adding[user.id] ? 'Adding...' : 'Add Tokens'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 