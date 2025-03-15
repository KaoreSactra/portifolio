import { ReactNode } from "react"

interface LiProps {
  className?: string,
  box: ReactNode
}

export default function Section({ className, box }: LiProps) {
  return (
    <section className={`w-full h-full
        flex flex-col items-end
        snap-y overflow-scroll
        text-3xl md:text-6xl ${className}`}>
        {box}
    </section>
  )
}
