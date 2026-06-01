import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Task } from '@/types/task'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])

  const loadTasks = async () => {
    const { data } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', {
        ascending: false
      })

    setTasks(data || [])
  }

  return {
    tasks,
    setTasks,
    loadTasks
  }
}