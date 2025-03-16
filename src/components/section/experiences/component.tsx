import LabelBox from "@/components/labelbox/component"
import { useTranslations } from "next-intl"

export default function Experiences() {
  const t = useTranslations("Experiences")

  const data = [
    { id: 1, emp: "CANARY DEV", text: t("canary"), url: "https://www.linkedin.com/company/canary-dev-brazil/"},
    { id: 2, emp: "CONNECT STATION", text: t("connect"), url: "https://www.linkedin.com/company/connect-station-softwares/" },
    { id: 3, emp: "ASTRAZENECA", text: t("astra"), url: "https://www.linkedin.com/company/astrazeneca/" },
  ]

  return (
    <div className="flex flex-col gap-10 text-3xl md:text-6xl font-light snap-y">
      {data.map((item) => (
        <LabelBox
          key={item.id}
          subText={item.emp}
          text={item.text}
          url={item.url}
          className="snap-center flex-col text-end"
        />
      ))}
    </div>
  )
}
