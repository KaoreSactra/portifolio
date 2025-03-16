import { ElementType } from "react"

interface SectionProps {
  className?: string
  box: ElementType
}

export default function Section({ className, box: Box }: SectionProps) {
  return (
    <section
      className={`w-full h-full text-2xl md:text-4xl z-20
        flex justify-end items-end mask-gradient overflow-y-scroll scrollbar-none
        ${className}`}
    >
      <div className="h-[67%]">
        <Box />
      </div>
    </section>
  )
}
