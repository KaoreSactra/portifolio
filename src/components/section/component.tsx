import { ElementType } from "react"
import Fit from "../fit/component"
import Split from "../split/component"

interface SectionProps {
  id: string
  n: number
  title: string
  icon: ElementType
  box: ElementType
}

export default function Section({ id, n, title, icon: Icon, box: Box }: SectionProps) {
  return (
    <section id={`${id}-section`} key={id} aria-labelledby={`${id}-title`} className="section">
      <div className="mb-10 sm:mb-14">
        <div className="mb-4 flex items-center gap-4">
          <span className="fade-up text-xs font-medium tracking-[0.3em] text-accent tabular-nums">
            {String(n).padStart(2, "0")} / 04
          </span>
          <span className="draw h-px flex-1 bg-line" style={{ "--base": "150ms" } as React.CSSProperties} />
          <Icon className="fade-up size-6 text-accent" />
        </div>
        <Fit
          as="h2"
          text={title}
          className="block leading-none font-thin tracking-tight uppercase [--k:1.35] [--max:4.5rem]"
        >
          <Split text={title} />
        </Fit>
      </div>
      <Box />
    </section>
  )
}
