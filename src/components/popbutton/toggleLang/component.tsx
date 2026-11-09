"use client"
import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { useLocale } from "next-intl"
import { useTransition } from "react"

const LABEL: Record<string, string> = { "pt-br": "PT", en: "EN" }
const LANG_TAG: Record<string, string> = { "pt-br": "pt-BR", en: "en" }
const NAME: Record<string, string> = { "pt-br": "Português", en: "English" }

/** Seletor segmentado: todos os idiomas visíveis, com um marcador vermelho que desliza. */
export default function ToggleLang() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  const count = routing.locales.length
  const active = Math.max(0, routing.locales.indexOf(locale as (typeof routing.locales)[number]))

  const change = (next: (typeof routing.locales)[number]) => {
    if (next === locale) return
    startTransition(() => router.replace(pathname, { locale: next, scroll: false }))
  }

  return (
    <div
      role="group"
      aria-label="Language"
      aria-busy={pending}
      className={`relative flex items-center p-1 transition-opacity duration-300 ${pending ? "opacity-60" : ""}`}
    >
      <span
        aria-hidden
        className="absolute top-1 bottom-1 left-1 rounded-full bg-suit-red
          transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
        style={{
          width: `calc((100% - 0.5rem) / ${count})`,
          transform: `translateX(${active * 100}%)`,
        }}
      />
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          lang={LANG_TAG[l]}
          title={NAME[l]}
          aria-label={NAME[l]}
          aria-pressed={l === locale}
          onClick={() => change(l)}
          className={`relative z-10 w-10 cursor-pointer py-1.5 text-[0.7rem] font-bold tracking-[0.15em]
            transition-colors duration-500
            ${l === locale ? "text-white" : "text-ink/55 hover:text-ink"}`}
        >
          {LABEL[l]}
        </button>
      ))}
    </div>
  )
}
