'use client'

import { supabase } from '@/src/lib/supabase'
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
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Supabase Task Manager
        </h1>

        <input
          className="border w-full p-3 rounded mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border w-full p-3 rounded mb-4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex gap-3">
          <button
            className="flex-1 border rounded p-3"
            onClick={signUp}
          >
            Register
          </button>

          <button
            className="flex-1 border rounded p-3"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </main>
  )
}