'use client'

import { useState } from 'react'
import TaskList from '@/components/task/TaskLists'
import { Task } from '@/types/task'
import DashboardHeader from '../header/Header'
import DashboardStats from '../DashboardStats/DashboardStats'
import AddTaskForm from '../AddTaskForm/AddTaskForm'

export default function DashboardContainer() {
  const [title, setTitle] = useState('')

  const [tasks, setTasks] = useState<Task[]>([])

  const logout = () => {
    console.log('logout')
  }

  const addTask = () => {
    console.log('add task')
  }

  const deleteTask = (id: string) => {
    console.log(id)
  }

  const toggleTask = (
    id: string,
    currentValue: boolean
  ) => {
    console.log(id, currentValue)
  }

  return (
    <main>
      <DashboardHeader
        onLogout={logout}
      />
      <DashboardStats
        tasks={tasks}
      />
      <AddTaskForm
        title={title}
        setTitle={setTitle}
        onAdd={addTask}
      />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </main>
  )
}