"use client"
import { useState } from "react"

import ToggleMode from "./togglemode/component"
import ToggleLang from "./toggleLang/component"

export default function PopButton() {
  const [width, setWidth] = useState(true)

  const handleClick = () => {
    width ? setWidth(false) : setWidth(true)
  }

  return (
    <div
      onMouseEnter={() => setWidth(false)}
      onMouseLeave={() => setWidth(true)}
      onClick={handleClick}
      className={`fixed bottom-5 right-5 flex justify-center
                  h-10 ${width ? "w-10" : "w-25"} z-100
                  rounded-full bg-radial-[at_25%_25%]
                  from-red-500 to-red-900 to-75%
                  transition-all duration-300 text-zinc-200
                  drop-shadow-md`}>
      <div className={width ? "hidden" : ""}>
        <ToggleLang/>
        <ToggleMode/>
      </div>
    </div>
  )
}
