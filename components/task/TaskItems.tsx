import Badge from '../ui/Badge'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { Task } from '@/types/task'

type Props = {
  task: Task
  onToggle: (
    id: string,
    current: boolean
  ) => void
  onDelete: (id: string) => void
}

export default function TaskItem({
  task,
  onToggle,
  onDelete
}: Props) {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <p
            className={
              task.is_done
                ? 'line-through text-black'
                : 'text-black'
            }
          >
            {task.title}
          </p>

          <Badge completed={task.is_done} />
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() =>
              onToggle(
                task.id,
                task.is_done
              )
            }
            className="bg-blue-500/20 text-black"
          >
            {task.is_done
              ? 'Undo'
              : 'Done'}
          </Button>

          <Button
            onClick={() =>
              onDelete(task.id)
            }
            className="bg-red-500/20 text-black"
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  )
}