interface ExperiencesProps {
  className?: string
}

export default function Experiences({ className }: ExperiencesProps) {
  return <p className={`bg-blue-500 ${className}`}>
    Experiences
  </p>
}