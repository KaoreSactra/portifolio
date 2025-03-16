import "@/styles/globals.css"

import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"

import { Bg, PopButton } from "@/components"

export const metadata: Metadata = {
  title: "Dev Full-Stack | Gustavo Aragão",
  description: "Desenvolvedor Full-Stack em SP",
  icons: "img/icon.svg"
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as "en" | "pt-br")) {
    notFound()
  }

  const messages = await getMessages({ locale })

  return (
    <html lang={locale} data-theme="dark">
      <body
        className="font-display text-xl
          bg-zinc-50 dark:bg-zinc-950
        text-zinc-900 dark:text-zinc-200
          transition-all duration-300 text-nowrap select-none overflow-hidden"
      >
        <NextIntlClientProvider messages={messages}>
        <Bg/>
        <PopButton/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
