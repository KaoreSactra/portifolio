"use client"
import { useEffect, useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi"

export default function ToggleMode() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Verifica o tema ao carregar a página
  useEffect(() => {
    const theme = localStorage.theme
    const systemPrefers = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    if (theme === "dark" || (!theme && systemPrefers)) {
      document.documentElement.setAttribute("data-theme", "dark")
      setIsDarkMode(true)
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      setIsDarkMode(false)
    }
  }, [])

  // Troca tema
  const toggleMode = () => {
    if (isDarkMode) {
      localStorage.theme = "light"
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      localStorage.theme = "dark"
      document.documentElement.setAttribute("data-theme", "dark")
    }
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button
      onClick={toggleMode}
      className="fixed bottom-4 right-4 rounded-full p-2 bg-buttonsLight dark:bg-buttonsDark border-2 border-textLight dark:border-textDark">
      {isDarkMode ? <FiMoon className="size-6"/> : <FiSun className="size-6"/>}
    </button>
  )
}
