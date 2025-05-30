import { ProtectedRoute } from '@/components/ProtectedRoute'
import { ProfileForm } from '@/components/ProfileForm'

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileForm />
    </ProtectedRoute>
  )
} 