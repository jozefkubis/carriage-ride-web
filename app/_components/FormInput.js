export default function FormInput({
  label,
  id,
  type,
  placeholder,
  name,
  required,
  onChange,
  value,
  disabled,
  min,
  max,
  step,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none ${disabled ? "bg-gray-200" : "bg-white"
          }`}
        required={required}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
      />
    </div>
  )
}
