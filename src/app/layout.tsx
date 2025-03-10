import "@/styles/globals.css"

import type { Metadata } from "next"

import ToggleMode from "@/components/togglemode/component"

export const metadata: Metadata = {
  title: "Dev Full-Stack | Gustavo Aragão",
  description:
    "Apaixonado por tecnologia, crio soluções inovadoras e eficientes para a web. Vamos trabalhar juntos?",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" data-theme="dark">
      <body
        className="font-display
          bg-bgLight text-textLight
          dark:bg-bgDark dark:text-textDark
          transition-all duration-300"
      >
        <ToggleMode/>
        {children}
      </body>
    </html>
  )
}
