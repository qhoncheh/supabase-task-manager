type CardProps = {
  children: React.ReactNode
}

export default function Card({
  children
}: CardProps) {
  return (
    <div
      className="
      bg-white/10
      backdrop-blur-md
      border
      border-white/10
      rounded-2xl
      p-5
    "
    >
      {children}
    </div>
  )
}