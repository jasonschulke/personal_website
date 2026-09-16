import Image, { type StaticImageData } from 'next/image'

// Building blocks shared by the project detail pages in src/app/projects.

export function FeatureRow({ feature, description }: { feature: string; description: string }) {
  return (
    <tr className="border-b border-zinc-200 dark:border-zinc-700">
      <td className="whitespace-nowrap py-3 pr-4 font-medium text-zinc-900 dark:text-zinc-100">
        {feature}
      </td>
      <td className="py-3 text-zinc-600 dark:text-zinc-400">{description}</td>
    </tr>
  )
}

// Each project page uses its own accent color for its tags.
const techTagColors = {
  amber: 'rounded-lg bg-amber-700/10 px-3 py-1.5 text-sm font-medium text-amber-700 dark:text-amber-400',
  indigo: 'rounded-lg bg-indigo-500/10 px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400',
  orange: 'rounded-lg bg-orange-700/10 px-3 py-1.5 text-sm font-medium text-orange-700 dark:text-orange-400',
}

export function TechStack({ color, items }: { color: keyof typeof techTagColors; items: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {items.map((item) => (
        <span key={item} className={techTagColors[color]}>
          {item}
        </span>
      ))}
    </div>
  )
}

export function LearningItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative border-b border-zinc-100 py-3 pl-6 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      <span className="absolute left-0 text-indigo-500">&#10003;</span>
      {children}
    </li>
  )
}

// wide: 2x desktop screenshots fill the content width. natural: GIFs stay at their
// own pixel size so they don't blur. medium: app screens capped at 448px.
// phone: tall mobile screenshots.
const screenshotSizes = {
  wide: 'mx-auto w-full rounded-2xl',
  natural: 'mx-auto rounded-2xl',
  medium: 'mx-auto w-full max-w-md rounded-2xl',
  phone: 'mx-auto w-full max-w-xs rounded-2xl',
}

export function Screenshot({
  src,
  alt,
  caption,
  size = 'wide',
}: {
  src: StaticImageData
  alt: string
  caption: string
  size?: keyof typeof screenshotSizes
}) {
  return (
    <figure className="mt-8">
      <Image src={src} alt={alt} className={screenshotSizes[size]} />
      <figcaption className="mt-3 text-center text-sm text-zinc-500 dark:text-zinc-500">
        {caption}
      </figcaption>
    </figure>
  )
}
