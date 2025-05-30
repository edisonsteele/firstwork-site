import { supabase } from './supabase'

export async function upsertProfile({ id, full_name, avatar_url, role }: { id: string, full_name: string, avatar_url?: string, role?: string }) {
  return supabase
    .from('profile')
    .upsert([{ id, full_name, avatar_url, role }], { onConflict: 'id' })
}

export async function getProfile(id: string) {
  return supabase
    .from('profile')
    .select('*')
    .eq('id', id)
    .single()
}

export async function updateProfile(id: string, updates: { full_name?: string, avatar_url?: string }) {
  return supabase
    .from('profile')
    .update(updates)
    .eq('id', id)
}

export async function uploadAvatar(userId: string, file: File): Promise<string | null> {
  const fileExt = file.name.split('.').pop()
  const filePath = `avatars/${userId}.${fileExt}`
  const { error } = await supabase.storage.from('avatars').upload(filePath, file, {
    upsert: true,
    contentType: file.type,
  })
  if (error) throw error
  // Get public URL
  const { data } = supabase.storage.from('avatars').getPublicUrl(filePath)
  return data.publicUrl || null
} 