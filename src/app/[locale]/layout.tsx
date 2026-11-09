import "@/styles/globals.css"

import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { Playfair_Display } from "next/font/google"
import { notFound } from "next/navigation"

import { Bg, PopButton } from "@/components"

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Meta" })
  const isDefault = locale === routing.defaultLocale

  return {
    title: t("title"),
    description: t("description"),
    icons: "/img/icon.svg",
    // hreflang: ajuda buscadores a servir o idioma certo
    alternates: {
      canonical: isDefault ? "/" : `/${locale}`,
      languages: { "pt-BR": "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "en" ? "en_US" : "pt_BR",
    },
  }
}

// Aplica o tema salvo antes da primeira pintura, evitando flash.
const themeScript = `try{var t=localStorage.theme;var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',d?'dark':'light')}catch(e){}`

export default async function LocaleLayout({ children, params }: Props & { children: React.ReactNode }) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages({ locale })

  return (
    <html lang={locale} data-theme="dark" className={playfair.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Bg />
          <PopButton />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
