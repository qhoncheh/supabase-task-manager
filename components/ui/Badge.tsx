type Props = {
  completed: boolean
}

export default function Badge({
  completed
}: Props) {
  return (
    <span
      className={`
        inline-block
        mt-2
        text-xs
        px-3
        py-1
        rounded-full
        ${
          completed
            ? 'bg-green-500/20 text-green-300'
            : 'bg-yellow-500/20 text-yellow-300'
        }
      `}
    >
      {completed
        ? 'Completed'
        : 'Pending'}
    </span>
  )
}