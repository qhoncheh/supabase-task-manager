import { Task } from "@/types/task"
import TaskItem from "./TaskItems"

type Props = {
  tasks: Task[]
  onToggle: (
    id: string,
    current: boolean
  ) => void
  onDelete: (id: string) => void
}

export default function TaskList({
  tasks,
  onToggle,
  onDelete
}: Props) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}