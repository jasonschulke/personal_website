function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9 12.75L11.25 15 15 9.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

interface ExperienceAreasProps {
  areas: string[]
}

export function ExperienceAreas({ areas }: ExperienceAreasProps) {
  return (
    <ul className="space-y-3">
      {areas.map((area, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-teal-500 dark:text-teal-400" />
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            {area}
          </span>
        </li>
      ))}
    </ul>
  )
}
