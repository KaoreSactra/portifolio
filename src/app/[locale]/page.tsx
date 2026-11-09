"use client"

import { Contact, Experiences, Fan, Fit, Li, Marquee, Projects, Section, Split, TechnologyStack } from "@/components"
import { useTranslations } from "next-intl"
import { useEffect, useState, type CSSProperties } from "react"
import { GiClubs, GiDiamonds, GiHearts, GiSpades } from "react-icons/gi"

// Cada seção é um naipe: ♥ stack · ♣ experiências · ♦ projetos · ♠ contato
const SECTIONS = [
  { id: "stack", icon: GiHearts, label: "Tecno", box: TechnologyStack },
  { id: "exp", icon: GiClubs, label: "Exp", box: Experiences },
  { id: "proj", icon: GiDiamonds, label: "Proj", box: Projects },
  { id: "cont", icon: GiSpades, label: "Cont", box: Contact },
] as const

export default function Home() {
  const t = useTranslations("Home")
  const [selected, setSelected] = useState<(typeof SECTIONS)[number]["id"]>("stack")
  const index = SECTIONS.findIndex((s) => s.id === selected)

  // A seção ativa sobrevive à troca de idioma (a rota remonta a página).
  useEffect(() => {
    try {
      const saved = window.location.hash.slice(1) || sessionStorage.getItem("section")
      const found = SECTIONS.find((s) => s.id === saved)
      if (found) setSelected(found.id)
    } catch {}
  }, [])

  const select = (id: (typeof SECTIONS)[number]["id"]) => {
    setSelected(id)
    try {
      sessionStorage.setItem("section", id)
      history.replaceState(null, "", `#${id}`)
    } catch {}
  }
  const current = SECTIONS[index]

  return (
    <main className="relative mx-auto grid min-h-dvh w-full max-w-[96rem] lg:grid-cols-[28rem_1fr]">
      <header
        className="flex flex-col gap-10 px-6 pt-12 pb-4 sm:px-14
          lg:sticky lg:top-0 lg:h-dvh lg:justify-between lg:px-12 lg:pt-16 lg:pb-20"
      >
        <div>
          <p
            className="fade-up mb-6 flex items-center gap-3 text-[0.65rem] font-medium tracking-[0.35em] text-muted uppercase"
            style={{ "--base": "100ms" } as CSSProperties}
          >
            <span className="h-px w-8 bg-accent" />
            Portfolio · {new Date().getFullYear()}
          </p>
          <div className="fit-box">
            <h1 className="leading-[0.95]">
              <Fit
                text="Gustavo"
                className="block font-thin tracking-[0.02em] uppercase [--k:1.3] [--max:4.5rem]"
              >
                <Split text="Gustavo" delay={200} />
              </Fit>
              <Fit
                text="Aragão"
                className="block font-display text-accent italic [--k:1.3] [--max:4.5rem]"
              >
                <Split text="Aragão" delay={500} />
              </Fit>
            </h1>
          </div>
          <p
            className="fade-up mt-6 text-xs font-medium tracking-[0.3em] uppercase"
            style={{ "--base": "900ms" } as CSSProperties}
          >
            {t("Prof")}
          </p>
          <p className="fade-up mt-1 text-xs text-muted" style={{ "--base": "1000ms" } as CSSProperties}>
            {t("Location")}
          </p>
        </div>

        <nav aria-label="Menu">
          <ul className="flex flex-wrap gap-x-8 gap-y-1 lg:flex-col lg:gap-y-2">
            {SECTIONS.map((s, i) => (
              <Li
                key={s.id}
                dot={s.icon}
                n={i + 1}
                index={i}
                label={t(s.label)}
                active={selected === s.id}
                onClick={() => select(s.id)}
              />
            ))}
          </ul>
        </nav>

        <Fan className="hidden lg:block" />
      </header>

      <div className="px-6 pt-8 pb-32 sm:px-14 lg:py-16 lg:pr-20 lg:pl-4">
        <Section
          id={current.id}
          n={index + 1}
          title={t(current.label)}
          icon={current.icon}
          box={current.box}
        />
      </div>

      <Marquee items={[t("Prof"), "Node.js", "Next.js", "TypeScript", t("Location")]} />
    </main>
  )
}
