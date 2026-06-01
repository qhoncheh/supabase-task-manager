'use client'

import { supabase } from '@/lib/supabase'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      alert(error.message)
      return
    }

    alert('User created successfully')
    window.location.href = '/dashboard'
  }

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert(error.message)
      return
    }

    alert('Login success')
    window.location.href = '/dashboard'
  }

return (
  <main
    className="min-h-screen flex items-center justify-center px-6"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2000')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-black/30" />

    <div
      className="
        relative
        w-full
        max-w-lg
        rounded-[32px]
        border
        border-white/20
        bg-white/10
        backdrop-blur-xl
        shadow-2xl
        px-10
        py-12
        text-white
      "
    >
      <div className="text-center mb-10">
        <h1 className="text-5xl font-light mb-4">
          Welcome !
        </h1>

        <p className="text-white/70">
          Sign in to access your Supabase
          Task Manager
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block mb-2 text-sm text-white/80">
            Email
          </label>

          <input
            className="
              w-full
              rounded-2xl
              border
              border-white/20
              bg-white/5
              px-5
              py-4
              text-white
              placeholder:text-white/40
              outline-none
              focus:border-violet-400
            "
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-white/80">
            Password
          </label>

          <input
            className="
              w-full
              rounded-2xl
              border
              border-white/20
              bg-white/5
              px-5
              py-4
              text-white
              placeholder:text-white/40
              outline-none
              focus:border-violet-400
            "
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <button
          onClick={login}
          className="
            w-full
            rounded-2xl
            bg-white
            py-4
            text-lg
            font-semibold
            text-gray-900
            transition
            hover:scale-[1.02]
          "
        >
          Log In
        </button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20" />
          </div>

          <div className="relative text-center text-sm">
            <span className="bg-transparent px-3 text-white/60">
              Or
            </span>
          </div>
        </div>

        <button
          onClick={signUp}
          className="
            w-full
            rounded-2xl
            border
            border-white/20
            bg-white/5
            py-4
            text-white
            transition
            hover:bg-white/10
          "
        >
          Create Account
        </button>
      </div>
    </div>
  </main>
)
}