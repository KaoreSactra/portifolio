interface ProjectsProps {
  className?: string
}

export default function Projects({ className }: ProjectsProps) {
  return <p className={`bg-blue-500 ${className}`}>
    Projects
  </p>
}