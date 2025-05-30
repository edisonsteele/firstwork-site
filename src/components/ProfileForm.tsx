"use client"

import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/AuthContext'
import { updateProfile, getProfile, uploadAvatar } from '@/lib/profile'
import { AuthService } from '@/lib/auth'

export function ProfileForm() {
  const { user } = useAuth()
  const [name, setName] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [avatarUploading, setAvatarUploading] = useState(false)

  useEffect(() => {
    if (user) {
      getProfile(user.id).then(({ data, error }) => {
        if (data) {
          setName(data.full_name || '')
          setAvatarUrl(data.avatar_url || '')
        }
      })
    }
  }, [user])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    setLoading(true)

    try {
      if (!user) throw new Error('No user')
      const { error } = await updateProfile(user.id, { full_name: name, avatar_url: avatarUrl })
      if (error) throw error
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while updating profile')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    setLoading(true)

    try {
      const { error } = await AuthService.updatePassword(newPassword)
      if (error) throw error
      setSuccess(true)
      setNewPassword('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while updating password')
    } finally {
      setLoading(false)
    }
  }

  // Avatar upload handler using Supabase Storage
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !user) return
    setAvatarUploading(true)
    setError(null)
    try {
      const publicUrl = await uploadAvatar(user.id, file)
      if (publicUrl) {
        setAvatarUrl(publicUrl)
        // Save to profile table immediately
        await updateProfile(user.id, { avatar_url: publicUrl })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload avatar')
    } finally {
      setAvatarUploading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
          <p className="mt-1 text-sm text-gray-500">
            Update your profile information and password.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
                Avatar
              </label>
              <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
                className="mt-1 block w-full text-sm text-gray-500"
                disabled={avatarUploading}
              />
              {avatarUploading && <div className="text-sm text-gray-500">Uploading...</div>}
              {avatarUrl && (
                <img src={avatarUrl} alt="Avatar" className="mt-2 w-24 h-24 rounded-full object-cover" />
              )}
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? 'Updating...' : 'Update Profile'}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={handleUpdatePassword} className="space-y-6">
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </div>
          </form>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        {success && (
          <div className="rounded-md bg-green-50 p-4">
            <div className="text-sm text-green-700">Profile updated successfully!</div>
          </div>
        )}
      </div>
    </div>
  )
} 