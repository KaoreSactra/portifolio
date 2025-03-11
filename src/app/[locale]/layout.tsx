import "@/styles/globals.css"

import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"

import PopButton from "@/components/popbutton/component"

export const metadata: Metadata = {
  title: "Dev Full-Stack | Gustavo Aragão",
  description: "Desenvolvedor Full-Stack em SP",
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = params
  if (!routing.locales.includes(locale as "en" | "pt-br")) {
    notFound()
  }

  // Providing all messages to the client
  const messages = await getMessages()

  return (
    <html lang={locale} data-theme="dark">
      <body
        className="font-display text-xl bg-linear-to-t
        from-zinc-100 to-zinc-300 text-zinc-900
          dark:from-zinc-800 dark:to-zinc-950 dark:text-zinc-200
          transition-all duration-300"
      >
        <PopButton />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
