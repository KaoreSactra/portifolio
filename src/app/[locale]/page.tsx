"use client"

import {Contact, Experiences, Li, Projects, Section, TechnologyStack} from "@/components"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { GiClubs, GiDiamonds, GiHearts, GiSpades } from "react-icons/gi"

export default function Home() {
  const t = useTranslations("Home")
  const [selected, setSelected] = useState(1)

  return (
    <main className="h-dvh w-dvw flex justify-end pt-30 pb-5 px-6 sm:px-8 md:px-20 z-0">
      <header className="fixed top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-20 z-100">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">
          Gustavo Aragão
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
          {t("Prof")}
        </h2>
        <ul className="flex flex-col font-light text-2xl mt-5">
          <Li
            dot={GiHearts}
            label={t("Tecno")}
            onClick={() => setSelected(1)}
            active={selected}
            actual={1}
            className="text-red-800"
          />
          <Li
            dot={GiClubs}
            label={t("Exp")}
            onClick={() => setSelected(2)}
            active={selected}
            actual={2}
          />
          <Li
            dot={GiDiamonds}
            label={t("Proj")}
            onClick={() => setSelected(3)}
            active={selected}
            actual={3}
            className="text-red-800"
          />
          <Li
            dot={GiSpades}
            label={t("Cont")}
            onClick={() => setSelected(4)}
            active={selected}
            actual={4}
          />
        </ul>
      </header>

      {selected === 1 && <Section box={TechnologyStack} />}
      {selected === 2 && <Section box={Experiences} />}
      {selected === 3 && <Section box={Projects} />}
      {selected === 4 && <Section box={Contact} />}
    </main>
  )
}