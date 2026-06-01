type InputProps = {
  label?: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  placeholder: string
  type?: string
}

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text'
}: InputProps) {
  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm text-white/80">
          {label}
        </label>
      )}

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
          text-gray-800
          placeholder:text-white/50
          outline-none
        "
      />
    </div>
  )
}