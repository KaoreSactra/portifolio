import { Fragment, type CSSProperties, type ElementType } from "react"

interface FitProps {
  text: string
  as?: ElementType
  className?: string
  children?: React.ReactNode
}

/**
 * Texto que encolhe para caber na largura do container (cqw) em vez de quebrar
 * no meio da palavra. O tamanho vem da maior palavra; quebras só em espaços
 * (e antes de "@", para e-mails). Veja `.fit` em globals.css.
 */
export default function Fit({ text, as: Tag = "span", className = "", children }: FitProps) {
  const chars = Math.max(4, ...text.split(/\s+|(?=@)/).map((w) => w.length))
  const parts = text.split(/(?=@)/)

  return (
    <Tag className={`fit ${className}`} style={{ "--chars": chars } as CSSProperties}>
      {children ??
        parts.map((part, i) => (
          <Fragment key={i}>
            {i > 0 && <wbr />}
            {part}
          </Fragment>
        ))}
    </Tag>
  )
}
