import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("Home")

  return (
    <main className="h-dvh w-dvw z-0">
      <header className="fixed top-9 left-9">
        <h1 className="font-tittle text-4xl md:text-6xl font-light">
          Gustavo Aragão
        </h1>
        <h2 className="font-tittle text-xl md:text-3xl font-bold">
          {t("Prof")}
        </h2>
        <ul className="flex flex-col font-tittle font-light text-xl mt-5 select-none">
          <li className="hover:text-2xl transition-all duration-300 cursor-pointer flex space-x-1">
            <span className="w-5 text-center text-red-800">♥</span>
            <p>{t("Tecno")}</p>
          </li>
          <li className="hover:text-2xl transition-all duration-300 cursor-pointer flex space-x-1">
            <span className="w-5 text-center">♣</span>
            <p>{t("Exp")}</p>
          </li>
          <li className="hover:text-2xl transition-all duration-300 cursor-pointer flex space-x-1">
            <span className="w-5 text-center text-red-800">♦</span>
            <p>{t("Proj")}</p>
          </li>
          <li className="hover:text-2xl transition-all duration-300 cursor-pointer flex space-x-1">
            <span className="w-5 text-center">♠</span>
            <p>{t("Cont")}</p>
          </li>
        </ul>
      </header>
    </main>
  )
}
