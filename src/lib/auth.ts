import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export async function getAuthUser() {
  const { userId } = auth()
  if (!userId) {
    redirect('/auth/signin')
  }
  return userId
}

export async function getCurrentUser() {
  const user = await currentUser()
  if (!user) {
    redirect('/auth/signin')
  }
  return user
}
