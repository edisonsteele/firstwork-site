"use client"
import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/AuthContext'
import { getManagedUsersWithTokens, addTokensToUser } from '@/lib/admin'

export default function AdminUsersPage() {
  const { user } = useAuth()
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [addAmount, setAddAmount] = useState<{ [userId: string]: number }>({})
  const [adding, setAdding] = useState<{ [userId: string]: boolean }>({})

  useEffect(() => {
    if (user) {
      getManagedUsersWithTokens(user.id)
        .then(setUsers)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }
  }, [user])

  const handleAddTokens = async (userId: string) => {
    setAdding((prev) => ({ ...prev, [userId]: true }))
    try {
      await addTokensToUser(userId, addAmount[userId] || 0, user.id)
      // Refresh users
      const updated = await getManagedUsersWithTokens(user.id)
      setUsers(updated)
      setAddAmount((prev) => ({ ...prev, [userId]: 0 }))
    } catch (err: any) {
      setError(err.message)
    } finally {
      setAdding((prev) => ({ ...prev, [userId]: false }))
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Managed Users & Tokens</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">User</th>
            <th className="px-4 py-2 border">Tokens</th>
            <th className="px-4 py-2 border">Add Tokens</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="px-4 py-2 border flex items-center gap-2">
                {u.avatar_url && (
                  <img src={u.avatar_url} alt="" className="w-8 h-8 rounded-full" />
                )}
                <span>{u.full_name}</span>
              </td>
              <td className="px-4 py-2 border text-center">{u.tokenBalance}</td>
              <td className="px-4 py-2 border">
                <input
                  type="number"
                  min={1}
                  value={addAmount[u.id] || ''}
                  onChange={(e) =>
                    setAddAmount((prev) => ({
                      ...prev,
                      [u.id]: parseInt(e.target.value, 10) || 0,
                    }))
                  }
                  className="border px-2 py-1 w-20 mr-2"
                />
                <button
                  onClick={() => handleAddTokens(u.id)}
                  disabled={adding[u.id] || !addAmount[u.id]}
                  className="bg-indigo-600 text-white px-3 py-1 rounded disabled:opacity-50"
                >
                  {adding[u.id] ? 'Adding...' : 'Add'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 