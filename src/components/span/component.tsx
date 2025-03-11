interface SpanProps {
  text?: string
  className?: string
}

export default function Span({ className, text }: SpanProps) {
  return (
    <span className={className}>
      {text}
    </span>
  )
}
