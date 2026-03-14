'use client'

import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <SignUp 
        appearance={{
          elements: {
            rootBox: 'w-full max-w-md',
            card: 'bg-zinc-900 border border-zinc-800',
            headerTitle: 'text-white',
            headerSubtitle: 'text-gray-400',
            socialButtonsBlockButton: 'bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700',
            formFieldLabel: 'text-gray-400',
            formFieldInput: 'bg-zinc-800 border-zinc-700 text-white',
            formButtonPrimary: 'bg-orange-500 hover:bg-orange-600',
            footerActionLink: 'text-orange-500 hover:text-orange-400',
          }
        }}
        routing="path"
        path="/auth/signup"
        signInUrl="/auth/signin"
        redirectUrl="/bucket-list"
      />
    </div>
  )
}