import LabelBox from "@/components/labelbox/component"

export default function TechnologyStack() {

  const data = [
    { id: 1, year: '2025', text: '.NET' },
    { id: 2, year: '2025', text: 'C#' },
    { id: 3, year: '2025', text: 'TypeScript' },
    { id: 4, year: '2024', text: 'React' },
    { id: 5, year: '2024', text: 'Tailwind' },
    { id: 6, year: '2024', text: 'Next.js' },
    { id: 7, year: '2024', text: 'Electron' },
    { id: 8, year: '2024', text: 'Selenium' },
    { id: 9, year: '2024', text: 'JavaScript' },
    { id: 10, year: '2022', text: 'Git' },
    { id: 11, year: '2022', text: 'GitHub' },
    { id: 12, year: '2021', text: 'Python' },
    { id: 13, year: '2021', text: 'Flask' },
    { id: 14, year: '2021', text: 'Java' },
  ]

  return (
    <div className="flex flex-col gap-10 text-5xl md:text-6xl font-light snap-y">
      {data.map((item) => (<LabelBox key={item.id} subText={item.year} text={item.text} className="snap-center"/>))}
    </div>
  )
}