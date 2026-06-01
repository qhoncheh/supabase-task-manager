type Props = {
  title: string
  value: number
  color?: string
}

export default function StatCard({
  title,
  value,
  color = 'text-white'
}: Props) {
  return (
    <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
      <p className="text-black text-sm">
        {title}
      </p>

      <h2
        className={`text-3xl font-bold mt-2 ${color}`}
      >
        {value}
      </h2>
    </div>
  )
}