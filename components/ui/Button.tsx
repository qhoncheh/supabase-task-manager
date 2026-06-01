type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5
        py-3
        rounded-2xl
        transition
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  )
}