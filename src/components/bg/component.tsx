"use client"

import { useEffect, useRef } from "react"
import { GiSpades } from "react-icons/gi"

/** Palco: grade, grão, naipe gigante, spotlight vermelho e cursor que seguem o ponteiro. */
export default function Bg() {
  const cursor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const root = document.documentElement
    let tx = window.innerWidth * 0.7
    let ty = window.innerHeight * 0.3
    let x = tx
    let y = ty
    let raf = 0

    const loop = () => {
      // interpolação suave: o anel "persegue" o ponteiro
      x += (tx - x) * 0.16
      y += (ty - y) * 0.16
      root.style.setProperty("--mx", `${x}px`)
      root.style.setProperty("--my", `${y}px`)
      if (cursor.current) cursor.current.style.transform = `translate(${x}px, ${y}px)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const move = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      cursor.current?.classList.add("cursor--on")
    }
    const over = (e: PointerEvent) => {
      const hot = (e.target as Element | null)?.closest("a, button")
      cursor.current?.classList.toggle("cursor--hot", !!hot)
    }
    const leave = () => cursor.current?.classList.remove("cursor--on")

    window.addEventListener("pointermove", move)
    window.addEventListener("pointerover", over)
    document.addEventListener("pointerleave", leave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerover", over)
      document.removeEventListener("pointerleave", leave)
    }
  }, [])

  return (
    <>
      <div className="stage" aria-hidden>
        <div className="stage__grid" />
        <div className="stage__spot" />
        <GiSpades className="stage__suit" />
        <div className="stage__grain" />
      </div>
      <div ref={cursor} className="cursor" aria-hidden />
    </>
  )
}
