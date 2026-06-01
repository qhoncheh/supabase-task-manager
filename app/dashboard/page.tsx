'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/src/lib/supabase'

type Task = {
  id: string
  title: string
  is_done: boolean
  user_id: string
}

export default function Dashboard() {
  const router = useRouter()

  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(true)

  const loadTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
      return
    }

    setTasks(data || [])
  }

  const getUser = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user) {
      router.push('/')
      return
    }

    await loadTasks()
    setLoading(false)
  }

  useEffect(() => {
    getUser()
  }, [])

  const addTask = async () => {
    if (!title.trim()) return

    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user) {
      alert('User not found')
      return
    }

    const { error } = await supabase
      .from('tasks')
      .insert({
        title,
        user_id: user.id
      })

    if (error) {
      console.error(error)
      alert(error.message)
      return
    }

    setTitle('')
    await loadTasks()
  }

  const deleteTask = async (id: string) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)

    if (error) {
      alert(error.message)
      return
    }

    await loadTasks()
  }

  const toggleTask = async (
    id: string,
    currentValue: boolean
  ) => {
    const { error } = await supabase
      .from('tasks')
      .update({
        is_done: !currentValue
      })
      .eq('id', id)

    if (error) {
      alert(error.message)
      return
    }

    await loadTasks()
  }

  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <main className="p-10">
        <h1>Loading...</h1>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto p-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Task Manager
        </h1>

        <button
          onClick={logout}
          className="border px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="flex gap-2 mb-8">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="New Task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={addTask}
          className="border px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <p
              className={
                task.is_done
                  ? 'line-through'
                  : ''
              }
            >
              {task.title}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  toggleTask(
                    task.id,
                    task.is_done
                  )
                }
                className="border px-3 py-1 rounded"
              >
                {task.is_done
                  ? 'Undo'
                  : 'Done'}
              </button>

              <button
                onClick={() =>
                  deleteTask(task.id)
                }
                className="border px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}