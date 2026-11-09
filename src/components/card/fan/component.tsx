import Card from "../component"
import type { Suit } from "../suits"

const HAND: Suit[] = ["spades", "hearts", "clubs", "diamonds"]

/** Mão de quatro ases abertos em leque — assinatura visual do portfólio. */
export default function Fan({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-36 w-48 ${className}`} aria-hidden>
      {HAND.map((suit, i) => (
        <Card
          key={suit}
          rank="A"
          suit={suit}
          size="xs"
          index={i + 4}
          tilt={-21 + i * 14}
          className="absolute bottom-0 origin-bottom"
          style={{ left: `${i * 2.9}rem` }}
        />
      ))}
    </div>
  )
}
