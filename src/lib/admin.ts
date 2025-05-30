import { supabase } from './supabase'

export async function getManagedUsersWithTokens(adminId: string) {
  // Get users managed by this admin
  const { data: users, error } = await supabase
    .from('profiles')
    .select('id, full_name, role, avatar_url')
    .eq('manager_id', adminId)

  if (error) throw error

  // For each user, get their token balance
  const usersWithTokens = await Promise.all(
    (users || []).map(async (user) => {
      const { data: tokens, error: tokenError } = await supabase
        .from('tokens')
        .select('amount')
        .eq('user_id', user.id)
      if (tokenError) throw tokenError
      const balance = (tokens || []).reduce((sum, t) => sum + t.amount, 0)
      return { ...user, tokenBalance: balance }
    })
  )

  return usersWithTokens
}

export async function addTokensToUser(userId: string, amount: number, adminId: string) {
  return supabase
    .from('tokens')
    .insert([{ user_id: userId, amount, purchased_by: adminId }])
} 