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
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-bold text-gray-800">
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
          placeholder:text-gray-400
          outline-none
        "
      />
    </div>
  )
}