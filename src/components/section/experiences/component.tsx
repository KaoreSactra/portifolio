import Card from "@/components/card/component"
import Fit from "@/components/fit/component"
import { useTranslations } from "next-intl"
import { FiArrowUpRight } from "react-icons/fi"

export default function Experiences() {
  const t = useTranslations("Experiences")

  // Do mais recente ao mais antigo: Ás, Rei, Dama, Valete
  const data = [
    { rank: "A", emp: "Defcon1", role: t("defcon"), cta: "Site", url: "https://www.defcon1.com.br/" },
    { rank: "K", emp: "Canary Dev", role: t("canary"), cta: "LinkedIn", url: "https://www.linkedin.com/company/canary-dev-brazil/" },
    { rank: "Q", emp: "Connect Station", role: t("connect"), cta: "LinkedIn", url: "https://www.linkedin.com/company/connect-station-softwares/" },
    { rank: "J", emp: "AstraZeneca", role: t("astra"), cta: "LinkedIn", url: "https://www.linkedin.com/company/astrazeneca/" },
  ]

  return (
    <div className="flex flex-wrap gap-6 sm:gap-8">
      {data.map((item, i) => (
        <Card
          key={item.emp}
          rank={item.rank}
          suit="clubs"
          href={item.url}
          label={`${item.emp} — ${item.role}`}
          face
          index={i}
          tilt={((i % 3) - 1) * 2.5}
        >
          <Fit text={item.role} className="card__sub" />
          <Fit text={item.emp} className="card__title" />
          <span className="card__cta">
            {item.cta} <FiArrowUpRight />
          </span>
        </Card>
      ))}
    </div>
  )
}
