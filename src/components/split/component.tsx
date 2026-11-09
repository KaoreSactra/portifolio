import type { CSSProperties } from "react"

interface SplitProps {
  text: string
  className?: string
  /** atraso inicial em ms */
  delay?: number
}

/** Revela o texto letra por letra. As letras ficam agrupadas por palavra: nunca quebram no meio. */
export default function Split({ text, className = "", delay = 0 }: SplitProps) {
  let n = 0
  return (
    <span className={`split ${className}`} style={{ "--base": `${delay}ms` } as CSSProperties} aria-label={text}>
      {text.split(" ").map((word, w) => (
        <span key={w} className="split__word" aria-hidden>
          {Array.from(word).map((ch, i) => (
            <span key={i} style={{ "--d": n++ } as CSSProperties}>
              {ch}
            </span>
          ))}
        </span>
      ))}
    </span>
  )
}
