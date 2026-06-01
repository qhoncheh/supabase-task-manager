import Button from '@/components/ui/Button'

type Props = {
  onLogout: () => void
}

export default function DashboardHeader({
  onLogout
}: Props) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-light text-black">
          Task Manager
        </h1>
        <p className="text-black mt-2">
          Manage your tasks with Supabase
        </p>
      </div>
      <Button
        onClick={onLogout}
        className="
          bg-red-500/20
          border
          border-red-400/30
          text-black
          hover:bg-red-500/30
        "
      >
        Logout
      </Button>
    </div>
  )
}