import Card from "@/components/card/component"
import Fit from "@/components/fit/component"
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6"

const data = [
  { rank: "A", icon: FaEnvelope, name: "E-mail", handle: "gus.aragao26@gmail.com", url: "mailto:gus.aragao26@gmail.com" },
  {
    rank: "K",
    icon: FaWhatsapp,
    name: "WhatsApp",
    handle: "+55 (11) 98829-0222",
    url: "https://wa.me/5511988290222?text=Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!",
  },
  { rank: "Q", icon: FaLinkedinIn, name: "LinkedIn", handle: "gustavo-aragao-dev", url: "https://www.linkedin.com/in/gustavo-aragao-dev/" },
  { rank: "J", icon: FaGithub, name: "GitHub", handle: "KaoreSactra", url: "https://github.com/KaoreSactra/" },
]

export default function Contact() {
  return (
    <div className="flex flex-wrap gap-6 sm:gap-8">
      {data.map(({ icon: Icon, ...item }, i) => (
        <Card
          key={item.name}
          rank={item.rank}
          suit="spades"
          size="sm"
          href={item.url}
          label={`${item.name}: ${item.handle}`}
          index={i}
          tilt={(i - 1.5) * 2}
        >
          <Icon className="card__icon" />
          <Fit text={item.name} className="card__title" />
          <Fit text={item.handle} className="card__handle" />
        </Card>
      ))}
    </div>
  )
}
