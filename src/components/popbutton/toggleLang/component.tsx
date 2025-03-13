"use client"
import { usePathname, useRouter } from "@/i18n/navigation"
import { useParams } from "next/navigation"
import { HiTranslate } from "react-icons/hi"

export default function ToggleLang() {
  const pathname = usePathname()
  const locale = useParams().locale
  const router = useRouter()

  const handleClick = () => {
    if (locale === "en") {
      router.push(pathname, { locale: "pt-br" })
    } else {
      router.push(pathname, { locale: "en" })
    }
  }

  return (
    <button onClick={handleClick} className="p-2 cursor-pointer">
      <HiTranslate className="size-6 drop-shadow-lg"/>
    </button>
  )
}
