import { ElementType } from "react"

interface LiProps {
  dot: ElementType
  label: string
  n: number
  active?: boolean
  index?: number
  onClick?: () => void
}

/** Item de navegação: número, linha vermelha que cresce e o naipe da seção. */
export default function Li({ dot: Dot, label, n, active, index = 0, onClick }: LiProps) {
  return (
    <li className="fade-up" style={{ "--base": `${700 + index * 90}ms` } as React.CSSProperties}>
      <button
        type="button"
        onClick={onClick}
        aria-current={active ? "true" : undefined}
        className={`group flex cursor-pointer items-center gap-3 py-1.5 text-left
          text-base font-light tracking-[0.16em] whitespace-nowrap uppercase transition-colors duration-500 sm:text-lg
          ${active ? "text-fg" : "text-fg/40 hover:text-fg"}`}
      >
        <span className="w-5 text-[0.65rem] font-medium tracking-widest text-muted tabular-nums">
          {String(n).padStart(2, "0")}
        </span>
        <span
          className={`h-px bg-accent transition-all duration-500 ease-out
            ${active ? "w-6" : "w-0 group-hover:w-4"}`}
        />
        <span className="transition-transform duration-500 group-hover:translate-x-1">{label}</span>
        <Dot
          className={`size-4 text-accent transition-all duration-500
            ${active ? "scale-100 opacity-100" : "scale-50 opacity-0 group-hover:opacity-60"}`}
        />
      </button>
    </li>
  )
}
