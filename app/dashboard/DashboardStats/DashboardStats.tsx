import { Task } from '@/types/task'
import StatCard from '@/components/ui/StatCards'

type Props = {
  tasks: Task[]
}

export default function DashboardStats({
  tasks
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <StatCard
        title="Total Tasks"
        value={tasks.length}
      />

      <StatCard
        title="Completed"
        value={
          tasks.filter(
            (task) => task.is_done
          ).length
        }
        color="text-green-400"
      />

      <StatCard
        title="Pending"
        value={
          tasks.filter(
            (task) => !task.is_done
          ).length
        }
        color="text-yellow-300"
      />
    </div>
  )
}