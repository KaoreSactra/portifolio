interface LiProps {
  className?: string
}

export default function Section({ className }: LiProps) {
  return (
    <section className={`w-full h-full
        flex flex-col items-end
        snap-y overflow-scroll
        text-3xl md:text-6xl ${className}`}>
    </section>
  )
}
