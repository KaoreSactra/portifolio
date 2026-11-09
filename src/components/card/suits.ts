import type { ElementType } from "react"
import { GiClubs, GiDiamonds, GiHearts, GiSpades } from "react-icons/gi"

export type Suit = "hearts" | "diamonds" | "clubs" | "spades"

export const SUITS: Record<Suit, { icon: ElementType; red: boolean }> = {
  hearts: { icon: GiHearts, red: true },
  diamonds: { icon: GiDiamonds, red: true },
  clubs: { icon: GiClubs, red: false },
  spades: { icon: GiSpades, red: false },
}
