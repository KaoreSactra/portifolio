import { GiClubs, GiDiamonds, GiHearts, GiSpades } from "react-icons/gi"

const SUITS = [GiSpades, GiHearts, GiClubs, GiDiamonds]

/** Letreiro infinito fixo no rodapé: texto + naipes. */
export default function Marquee({ items }: { items: string[] }) {
  const row = (
    <div className="marquee__item">
      {items.map((text, i) => {
        const Suit = SUITS[i % SUITS.length]
        return (
          <span key={text} className="inline-flex items-center gap-8">
            {text}
            <Suit />
          </span>
        )
      })}
    </div>
  )

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  )
}
