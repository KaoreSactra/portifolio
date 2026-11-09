"use client"

import type { CSSProperties, PointerEvent, ReactNode } from "react"
import { SUITS, type Suit } from "./suits"

interface CardProps {
  rank: string
  suit: Suit
  size?: "xs" | "sm" | "lg"
  href?: string
  label?: string
  index?: number
  tilt?: number
  face?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

// Inclinação 3D e brilho que seguem o ponteiro sobre a carta.
function track(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width
  const py = (e.clientY - r.top) / r.height
  el.style.setProperty("--ry", `${(px - 0.5) * 16}deg`)
  el.style.setProperty("--rx", `${(0.5 - py) * 16}deg`)
  el.style.setProperty("--mx", `${px * 100}%`)
  el.style.setProperty("--my", `${py * 100}%`)
}

function reset(e: PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty("--rx", "0deg")
  e.currentTarget.style.setProperty("--ry", "0deg")
}

export default function Card({
  rank,
  suit,
  size = "lg",
  href,
  label,
  index = 0,
  tilt = 0,
  face = false,
  className = "",
  style,
  children,
}: CardProps) {
  const { icon: Icon, red } = SUITS[suit]
  const live = size !== "xs"

  const classes = [
    "card",
    `card--${size}`,
    red && "card--red",
    href && "card--link",
    live && "card--live",
    face && "card--face",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const cssVars = { "--i": index, "--tilt": `${tilt}deg`, ...style } as CSSProperties
  const handlers = live ? { onPointerMove: track, onPointerLeave: reset } : {}

  const inner = (
    <>
      <span className="card__corner card__corner--tl" aria-hidden>
        <span>{rank}</span>
        <Icon />
      </span>
      <span className="card__corner card__corner--br" aria-hidden>
        <span>{rank}</span>
        <Icon />
      </span>
      <Icon className="card__mark" aria-hidden />
      <div className="card__body">{children}</div>
    </>
  )

  if (href) {
    const external = href.startsWith("http")
    return (
      <a
        href={href}
        aria-label={label}
        className={classes}
        style={cssVars}
        {...handlers}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {inner}
      </a>
    )
  }

  return (
    <div className={classes} style={cssVars} {...handlers}>
      {inner}
    </div>
  )
}
