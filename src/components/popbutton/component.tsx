import ToggleLang from "./toggleLang/component"
import ToggleMode from "./togglemode/component"

export default function PopButton() {
  return (
    <div
      className="fixed bottom-5 left-5 flex justify-center w-25 z-100
                  rounded-full bg-radial-[at_25%_25%]
                  from-red-500 to-red-900 to-75%
                  transition-all duration-300 text-zinc-200
                  drop-shadow-md"
    >
      <ToggleLang />
      <ToggleMode />
    </div>
  )
}
