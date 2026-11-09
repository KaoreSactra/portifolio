import ToggleLang from "./toggleLang/component"
import ToggleMode from "./togglemode/component"

export default function PopButton() {
  return (
    <div
      className="fixed right-5 bottom-16 z-50 flex items-center overflow-hidden
        rounded-full bg-paper text-ink shadow-xl ring-1 ring-line sm:right-8"
    >
      <ToggleLang />
      <span className="h-5 w-px bg-ink/20" />
      <ToggleMode />
    </div>
  )
}
