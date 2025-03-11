"use client"
import { usePathname, useRouter } from "@/i18n/navigation"
import { useLocale } from "next-intl"
import { HiTranslate } from "react-icons/hi"

export default function ToggleLang() {
  const pathname = usePathname()
  const locale = useLocale()
  const router = useRouter()

  const handleClick = () => {
    if (locale === "en") {
      router.push(pathname, { locale: "pt-br" })
    } else {
      router.push(pathname, { locale: "en" })
    }
  }

  return (
    <button onClick={handleClick} className="p-2">
      <HiTranslate className="size-6" />
    </button>
  )
}
