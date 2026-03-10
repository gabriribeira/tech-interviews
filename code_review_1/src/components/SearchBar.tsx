import { useEffect, useState } from "react"

type Props = {
  onSearch: (value: string) => void
  initialValue?: string
}

export function SearchBar({ onSearch, initialValue }: Props) {

  const [value, setValue] = useState(initialValue || "")

  useEffect(() => {
    if (initialValue !== undefined) {
      setValue(initialValue)
    }
  }, [initialValue])

  useEffect(() => {
    if (value.length === 0) {
      onSearch("")
    }
  }, [value])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    const newValue = e.target.value

    setValue(newValue)
    onSearch(newValue.trim())
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Search teams..."
    />
  )
}
