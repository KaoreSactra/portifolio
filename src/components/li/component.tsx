import { ElementType } from "react"

interface LiProps {
  dot: ElementType
  label: string
  className?: string
  active?: number
  actual?: number
  onClick?: () => void
}

export default function Li({
  dot: Dot,
  label,
  className,
  active,
  actual,
  onClick,
}: LiProps) {
  return (
    <li
      className={`hover:text-3xl
        transition-all duration-300 cursor-pointer
        flex items-center space-x-3 pt-2
        ${active === actual && "text-3xl"}`}
      onClick={onClick}
    >
      <Dot className={`size-6 ${className}`} />
      <p>{label}</p>
    </li>
  )
}
