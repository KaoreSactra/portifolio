import { useTranslations } from "next-intl"
import Li from "@/components/li/component"

export default function Home() {
  const t = useTranslations("Home")

  return (
    <main className="flex landscape:flex-row portrait:flex-col h-dvh w-dvw gap-10 p-10 z-0">
      

      <header>
        <h1 className="text-4xl md:text-6xl font-light">
          Gustavo Aragão
        </h1>
        <h2 className="text-xl md:text-3xl font-bold">
          {t("Prof")}
        </h2>
        <ul className="flex flex-col font-light text-2xl mt-5 gap-2">
          <Li dot="♥" label={t("Tecno")} className="text-red-800"/>
          <Li dot="♣" label={t("Exp")}/>
          <Li dot="♦" label={t("Proj")} className="text-red-800"/>
          <Li dot="♠" label={t("Cont")}/>
        </ul>
      </header>
      <section className="w-full h-full
              flex flex-col items-end
              snap-y overflow-scroll
              text-3xl md:text-6xl">
      </section>
    </main>
  )
}
