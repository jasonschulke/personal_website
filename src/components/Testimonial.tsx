function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7.5 8.25h-.75a2.25 2.25 0 0 0-2.25 2.25v.75a2.25 2.25 0 0 0 2.25 2.25h.75a2.25 2.25 0 0 0 2.25-2.25v-3a4.5 4.5 0 0 0-4.5-4.5H4.5M16.5 8.25h-.75a2.25 2.25 0 0 0-2.25 2.25v.75a2.25 2.25 0 0 0 2.25 2.25h.75a2.25 2.25 0 0 0 2.25-2.25v-3a4.5 4.5 0 0 0-4.5-4.5H13.5"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

interface TestimonialProps {
  quote: string
  author: string
  authorUrl?: string
}

export function Testimonial({ quote, author, authorUrl }: TestimonialProps) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <div className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <QuoteIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Testimonial</span>
      </div>
      <blockquote className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p className="italic">&ldquo;{quote}&rdquo;</p>
        <footer className="mt-4">
          {authorUrl ? (
            <a
              href={authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
            >
              &mdash; {author}
            </a>
          ) : (
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              &mdash; {author}
            </span>
          )}
        </footer>
      </blockquote>
    </div>
  )
}
