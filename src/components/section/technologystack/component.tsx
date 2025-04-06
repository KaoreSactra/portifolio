import LabelBox from "@/components/labelbox/component"
import { useTranslations } from "next-intl"

export default function TechnologyStack() {
  const t = useTranslations("Stack")

  const primaryStack = [
    { id: 1, percentage: "100%", text: "Node.js" },
    { id: 2, percentage: "100%", text: "Next.js" },
    { id: 3, percentage: "100%", text: "TypeScript" },
  ]
  const secoundaryStack = [
    { id: 1, percentage: "100%", text: "React" },
    { id: 2, percentage: "100%", text: "Tailwind" },
    { id: 3, percentage: "100%", text: "JavaScript" },
    { id: 4, percentage: "100%", text: "GitHub" },
    { id: 5, percentage: "100%", text: "Git" },
    { id: 9, percentage: "80%", text: "Python" },
    { id: 10, percentage: "80%", text: "Flask" },
    { id: 6, percentage: "70%", text: "Electron" },
    { id: 7, percentage: "60%", text: ".NET" },
    { id: 8, percentage: "60%", text: "C#" },
    { id: 11, percentage: "50%", text: "Selenium" },
    { id: 12, percentage: "30%", text: "Java" },
  ]

  return (
    <div className="flex flex-col gap-10 text-5xl md:text-6xl font-light snap-y">
      <div className="flex flex-col gap-5">
        <LabelBox
          text={t("primary")}
          className="snap-center font-bold text-end text-2xl md:text-5xl"
        />
        {primaryStack.map((item) => (
          <LabelBox
            key={item.id}
            subText={item.percentage}
            text={item.text}
            className="snap-center"
          />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <LabelBox
          text={t("secoundary")}
          className="snap-center font-bold text-end text-2xl md:text-5xl"
        />
        {secoundaryStack.map((item) => (
          <LabelBox
            key={item.id}
            subText={item.percentage}
            text={item.text}
            className="snap-center"
          />
        ))}
      </div>
    </div>
  )
}
