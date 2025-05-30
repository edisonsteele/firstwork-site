import { User } from '@supabase/supabase-js'

export interface UserWithTokens extends User {
  tokens: number
}

export interface TokenTransaction {
  id: string
  user_id: string
  amount: number
  type: 'add' | 'subtract'
  description: string
  created_at: string
}

export interface Organization {
  id: string
  name: string
  created_at: string
  owner_id: string
  subscription_tier: 'free' | 'pro' | 'enterprise'
  subscription_status: 'active' | 'inactive' | 'trial'
  subscription_end_date: string | null
} 