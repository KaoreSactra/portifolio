import Card from "@/components/card/component"
import Fit from "@/components/fit/component"
import { SUITS, type Suit } from "@/components/card/suits"
import { useTranslations } from "next-intl"

// Naipe = área · Valor da carta = nível de domínio
const RANKS: [number, string][] = [
  [100, "A"],
  [80, "K"],
  [70, "Q"],
  [60, "J"],
  [50, "10"],
  [30, "5"],
]
const rankOf = (level: number) => RANKS.find(([min]) => level >= min)![1]

interface Tech {
  text: string
  level: number
  suit: Suit
}

const primary: Tech[] = [
  { text: "DLP Symantec", level: 100, suit: "clubs" },
  { text: "Securiti.AI", level: 100, suit: "clubs" },
  { text: "Python", level: 100, suit: "spades" },
  { text: "Next.js", level: 100, suit: "hearts" },
]

const secondary: Tech[] = [
  { text: "Node.js", level: 100, suit: "spades" },
  { text: "TypeScript", level: 100, suit: "hearts" },
  { text: "React", level: 100, suit: "hearts" },
  { text: "JavaScript", level: 100, suit: "hearts" },
  { text: "Tailwind", level: 100, suit: "hearts" },
  { text: "Git", level: 100, suit: "clubs" },
  { text: "GitHub", level: 100, suit: "clubs" },
  { text: "Electron", level: 100, suit: "diamonds" },
  { text: "Selenium", level: 100, suit: "diamonds" },
  { text: "Flask", level: 90, suit: "spades" },
  { text: "SQL", level: 80, suit: "spades" },
  { text: ".NET", level: 70, suit: "spades" },
  { text: "C#", level: 70, suit: "spades" },
  { text: "Java", level: 50, suit: "spades" },
]

const SUIT_ORDER: Suit[] = ["hearts", "spades", "clubs", "diamonds"]

export default function TechnologyStack() {
  const t = useTranslations("Stack")

  return (
    <div className="flex flex-col gap-14">
      <div>
        <h3 className="mb-6 text-sm font-semibold tracking-[0.3em] text-accent uppercase">
          {t("primary")}
        </h3>
        <div className="flex flex-wrap gap-6 sm:gap-8">
          {primary.map((tech, i) => (
            <Card
              key={tech.text}
              rank={rankOf(tech.level)}
              suit={tech.suit}
              face
              index={i}
              tilt={(i - 1) * 2.5}
            >
              <span className="card__tag">{t(`cat.${tech.suit}`)}</span>
              <Fit text={tech.text} className="card__title" />
              <span className="card__sub">{tech.level}%</span>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-sm font-semibold tracking-[0.3em] text-accent uppercase">
          {t("secoundary")}
        </h3>
        <div className="flex flex-wrap gap-4 sm:gap-5">
          {secondary.map((tech, i) => (
            <Card
              key={tech.text}
              rank={rankOf(tech.level)}
              suit={tech.suit}
              size="sm"
              index={i + 3}
              tilt={((i % 3) - 1) * 1.2}
            >
              <Fit text={tech.text} className="card__title" />
              <span className="card__sub">{tech.level}%</span>
            </Card>
          ))}
        </div>
      </div>

      <footer className="flex flex-col gap-3 border-t border-line pt-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {SUIT_ORDER.map((suit) => {
            const { icon: Icon, red } = SUITS[suit]
            return (
              <li key={suit} className="legend-chip">
                <Icon className={`size-4 ${red ? "text-accent" : "text-fg"}`} />
                {t(`cat.${suit}`)}
              </li>
            )
          })}
        </ul>
        <p className="text-xs text-muted">{t("rankNote")}</p>
      </footer>
    </div>
  )
}
