"use client"

import { type ISourceOptions } from "@tsparticles/engine"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useEffect, useMemo, useState } from "react"

interface LiProps {
  className?: string
}

export default function Bg({ className }: LiProps) {
  const [init, setInit] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))

    // Função para atualizar o estado baseado no atributo data-theme
    const updateTheme = () => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark")
    }

    // Detecta o tema inicial
    updateTheme()

    // Observa mudanças no atributo data-theme
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })

    return () => observer.disconnect()
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: "transparent" },
      particles: {
        number: { value: 600 },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          outModes: { default: "out" },
        },
        opacity: { value: { min: 0.05, max: 0.25 } },
        color: { value: isDark ? "#ffffff" : "#000000" },
      },
    }),
    [isDark]
  )

  return (
    <div className={`w-dvw h-dvh fixed top-0 left-0 -z-100 ${className}`}>
      {init && <Particles id="tsparticles" options={options} className="w-full h-full" />}
    </div>
  )
}
