import { createBrowserClient } from '@supabase/ssr'
import { UserWithTokens } from '@/types'

export async function getManagedUsersWithTokens(adminId: string): Promise<UserWithTokens[]> {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data: users, error } = await supabase
    .from('users')
    .select(`
      *,
      tokens:tokens(balance)
    `)
    .eq('managed_by', adminId)

  if (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users')
  }

  return users.map((user: any) => ({
    ...user,
    tokens: user.tokens?.[0]?.balance || 0,
  }))
}

export async function addTokensToUser(
  userId: string,
  amount: number,
  adminId: string
): Promise<void> {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  // Verify the admin has permission to manage this user
  const { data: user, error: userError } = await supabase
    .from('users')
    .select('managed_by')
    .eq('id', userId)
    .single()

  if (userError || user?.managed_by !== adminId) {
    throw new Error('Unauthorized to manage this user')
  }

  // Add tokens
  const { error: tokenError } = await supabase
    .from('tokens')
    .upsert({
      user_id: userId,
      balance: amount,
    })

  if (tokenError) {
    console.error('Error adding tokens:', tokenError)
    throw new Error('Failed to add tokens')
  }

  // Record transaction
  const { error: transactionError } = await supabase
    .from('token_transactions')
    .insert({
      user_id: userId,
      amount,
      type: 'add',
      description: 'Added by admin',
      created_by: adminId,
    })

  if (transactionError) {
    console.error('Error recording transaction:', transactionError)
    throw new Error('Failed to record transaction')
  }
} 