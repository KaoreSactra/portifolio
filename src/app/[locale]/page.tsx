"use client"

import { Li, Section } from "@/components"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { GiClubs, GiDiamonds, GiHearts, GiSpades } from "react-icons/gi"

export default function Home() {
  const t = useTranslations("Home")
  const [selected, setSelected] = useState(1)

  return (
    <main className="flex landscape:flex-row portrait:flex-col h-dvh w-dvw gap-10 p-10 z-0">
      <header>
        <h1 className="text-4xl md:text-6xl font-light">Gustavo Aragão</h1>
        <h2 className="text-xl md:text-3xl font-bold">{t("Prof")}</h2>
        <ul className="flex flex-col font-light text-2xl mt-5 gap-2">
          <Li dot={GiHearts} label={t("Tecno")} onClick={() => setSelected(1)} active={selected} actual={1} className="text-red-800"/>
          <Li dot={GiClubs} label={t("Exp")} onClick={() => setSelected(2)} active={selected} actual={2}/>
          <Li dot={GiDiamonds} label={t("Proj")} onClick={() => setSelected(3)} active={selected} actual={3} className="text-red-800"/>
          <Li dot={GiSpades} label={t("Cont")} onClick={() => setSelected(4)} active={selected} actual={4}/>
        </ul>
      </header>
      
      {selected === 1 && <Section box={<p>1</p>}/>}
      {selected === 2 && <Section box={<p>2</p>}/>}
      {selected === 3 && <Section box={<p>3</p>}/>}
      {selected === 4 && <Section box={<p>4</p>}/>}
    </main>
  )
}
