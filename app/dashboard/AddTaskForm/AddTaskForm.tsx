import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

type Props = {
  title: string
  setTitle: (value: string) => void
  onAdd: () => void
}

export default function AddTaskForm({
  title,
  setTitle,
  onAdd
}: Props) {
  return (
    <div className="flex gap-3 mb-8">
      <Input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Add a new task..."
      />

      <Button
        onClick={onAdd}
        className="
          bg-violet-500
          text-black
          hover:bg-violet-600
        "
      >
        Add
      </Button>
    </div>
  )
}