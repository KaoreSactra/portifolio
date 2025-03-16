interface LabelBoxProps {
  className?: string
  url?: string
  subText?: string
  text?: string
}

export default function LabelBox({ className, url, subText, text }: LabelBoxProps) {
  return (
    <a href={url} className={`flex gap-x-2 justify-end items-end text-wrap ${className}`} target="_blank">
      <p className="text-lg font-light">{subText}</p>{text}
    </a>
  )
}