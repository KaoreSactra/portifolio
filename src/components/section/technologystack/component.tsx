interface TechnologyProps {
  className?: string
}

export default function TechnologyStack({ className }: TechnologyProps) {
  return (
    <div className="flex flex-col gap-10 text-end text-5xl md:text-6xl font-thin">
      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2025</p>TypeScript
      </span>
      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2025</p>C#
      </span>
      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2025</p>.NET
      </span>

      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2024</p>JavaScript
      </span>
      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2024</p>React
      </span>
      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2024</p>Next.js
      </span>
      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2024</p>Electron
      </span>
      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2024</p>Tailwind
      </span>
      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2024</p>Selenium
      </span>

      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2022</p>Git
      </span>
      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2022</p>GitHub
      </span>

      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2021</p>Python
      </span>
      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2021</p>Java
      </span>
      <span className="flex gap-2 justify-end items-end">
        <p className="text-lg">2021</p>Flask
      </span>
    </div>
  )
}
