interface LiProps {
  dot: string,
  label: string,
  className?: string
}

export default function Li({ dot, label, className }: LiProps) {
  return (
    <li className="hover:text-3xl transition-all duration-300 cursor-pointer flex space-x-1">
      <span className={`w-5 text-center ${className}`}>{dot}</span>
      <p>{label}</p>
    </li>
  )
}
