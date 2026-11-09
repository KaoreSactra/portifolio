"use client"
import { useEffect, useState } from "react"
import { GiSpades } from "react-icons/gi"
import { HiSun } from "react-icons/hi"

export default function ToggleMode() {
  const [isDark, setIsDark] = useState(true)

  // O tema inicial é aplicado por um script no <head> (sem flash); aqui só sincronizamos.
  useEffect(() => {
    setIsDark(document.documentElement.getAttribute("data-theme") === "dark")
  }, [])

  const toggle = () => {
    const next = isDark ? "light" : "dark"
    localStorage.theme = next
    document.documentElement.setAttribute("data-theme", next)
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Light mode" : "Dark mode"}
      className="cursor-pointer py-2.5 pr-4 pl-3 transition-all duration-300 hover:rotate-12 hover:text-suit-red"
    >
      {isDark ? <HiSun className="size-5" /> : <GiSpades className="size-5" />}
    </button>
  )
}
