import LabelBox from "@/components/labelbox/component"
import { useTranslations } from "next-intl"

export default function Projects() {
  const t = useTranslations("Projects")

  const data = [
    { id: 1, type: t("garagem"), text: "GARAGEM 93", url: "https://garagem93films.com.br/"},
    { id: 2, type: t("charme"), text: "CHARME DE PRATA", url: "https://www.charmedeprata.com.br/"},
    { id: 3, type: t("bella"), text: "BELLA MORENA", url: "https://bella-morena.vercel.app/"},
  ]

  return (
    <div className="flex flex-col gap-10 text-5xl md:text-6xl font-light snap-y">
      {data.map((item) => (
        <LabelBox
          key={item.id}
          subText={item.type}
          text={item.text}
          url={item.url}
          className="snap-center flex-col text-end"
        />
      ))}
    </div>
  )
}