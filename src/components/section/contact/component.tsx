import LabelBox from "@/components/labelbox/component"

export default function Contact() {
  return (
    <div className="flex flex-col gap-10 sm:gap-14 md:gap-20 text-3xl md:text-6xl font-light md:font-thin">
      <LabelBox text="GUS.ARAGAO26@GMAIL" className="cursor-pointer" url="mailto:gus.aragao26@gmail.com"/>
      <LabelBox text="+55 (11) 98829-0222" className="cursor-pointer" url="https://wa.me/5511988290222?text=Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!"/>
      <LabelBox text="LINKEDIN" className="cursor-pointer" url="https://www.linkedin.com/in/gustavo-aragao-dev/"/>
    </div>
  )
}