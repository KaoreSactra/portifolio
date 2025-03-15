interface ContactProps {
  className?: string
}

export default function Contact({ className }: ContactProps) {
  return <p className={`bg-blue-500 ${className}`}>
    Contact
  </p>
}