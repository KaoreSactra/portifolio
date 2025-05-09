"use client"
import { useEffect, useState } from "react"
import { HiSun } from "react-icons/hi"
import { HiMoon } from "react-icons/hi2"

export default function ToggleMode() {
  const [isDarkMode, setIsDarkMode] = useState(false)

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
      className="p-2 cursor-pointer">
      {isDarkMode ? <HiMoon className="size-6 drop-shadow-lg"/> : <HiSun className="size-6 drop-shadow-lg"/>}
    </button>
  )
}
