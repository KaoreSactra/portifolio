import Card from "@/components/card/component"
import Fit from "@/components/fit/component"
import { useTranslations } from "next-intl"
import { FiArrowUpRight } from "react-icons/fi"

// Textos de cada projeto ficam em messages/*.json → Projects.items.<key>
const PROJECTS = [
  { key: "speeddial", rank: "A", name: "SpeedDial", kind: "repo", url: "https://github.com/KaoreSactra/speeddial_firefox" },
  { key: "docfiles", rank: "K", name: "Doc Files", kind: "repo", url: "https://github.com/KaoreSactra/doc_files" },
  { key: "unip", rank: "Q", name: "Site Unip", kind: "site", url: "https://dsi-beryl.vercel.app" },
  { key: "chatbot", rank: "J", name: "ChatBot", kind: "repo", url: "https://github.com/KaoreSactra/ChatBOT-PIM" },
  { key: "verbloom", rank: "10", name: "Verbloom", kind: "site", url: "https://verbloom.gus-sactra.com/" },
] as const

export default function Projects() {
  const t = useTranslations("Projects")

  return (
    <div className="flex flex-wrap gap-6 sm:gap-8">
      {PROJECTS.map((p, i) => (
        <Card
          key={p.key}
          rank={p.rank}
          suit="diamonds"
          href={p.url}
          label={`${p.name} — ${t(`items.${p.key}.desc`)}`}
          face
          index={i}
          tilt={((i % 3) - 1) * 2.5}
        >
          <span className="card__sub">{t(`items.${p.key}.type`)}</span>
          <Fit text={p.name} className="card__title" />
          <p className="card__desc">{t(`items.${p.key}.desc`)}</p>
          <span className="card__cta">
            {t(p.kind === "site" ? "visit" : "repo")} <FiArrowUpRight />
          </span>
        </Card>
      ))}
    </div>
  )
}
