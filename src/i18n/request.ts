import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  // Aguarde requestLocale se for uma Promise
  const resolvedLocale = await requestLocale

  // Garantir que o locale recebido seja válido
  const locale: "en" | "pt-br" = routing.locales.includes(resolvedLocale as "en" | "pt-br")
    ? (resolvedLocale as "en" | "pt-br")
    : routing.defaultLocale

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
