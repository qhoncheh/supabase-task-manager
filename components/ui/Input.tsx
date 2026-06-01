type InputProps = {
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  placeholder: string
  type?: string
}

export default function Input({
  value,
  onChange,
  placeholder,
  type = 'text'
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        bg-white/10
        border
        border-white/20
        rounded-2xl
        px-5
        py-4
        text-white
        placeholder:text-white/50
        outline-none
      "
    />
  )
}