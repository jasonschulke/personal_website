'use client'

import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'

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

export interface TestimonialData {
  quote: string
  author: string
  authorTitle?: string
  authorUrl?: string
  authorImage?: StaticImageData
}

interface TestimonialProps extends TestimonialData {}

export function Testimonial({ quote, author, authorTitle, authorUrl, authorImage }: TestimonialProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-600">
      <blockquote className="text-sm text-zinc-600 dark:text-zinc-400">
        <p className="italic">&ldquo;{quote}&rdquo;</p>
        <footer className="mt-4 flex items-center gap-3">
          {authorImage && (
            <Image
              src={authorImage}
              alt={author}
              className="h-10 w-10 rounded-full object-cover"
              unoptimized
            />
          )}
          <div>
            {authorUrl ? (
              <a
                href={authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
              >
                {author}
              </a>
            ) : (
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {author}
              </span>
            )}
            {authorTitle && (
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{authorTitle}</p>
            )}
          </div>
        </footer>
      </blockquote>
    </div>
  )
}

interface RotatingTestimonialsProps {
  testimonials: TestimonialData[]
  interval?: number
}

export function RotatingTestimonials({ testimonials, interval = 8000 }: RotatingTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [testimonials.length, interval])

  const current = testimonials[currentIndex]

  return (
    <div className="relative">
      <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-600">
        <blockquote className="text-sm text-zinc-600 dark:text-zinc-400">
          <p className="italic">&ldquo;{current.quote}&rdquo;</p>
          <footer className="mt-4 flex items-center gap-3">
            {current.authorImage && (
              <Image
                src={current.authorImage}
                alt={current.author}
                className="h-10 w-10 rounded-full object-cover"
                unoptimized
              />
            )}
            <div>
              {current.authorUrl ? (
                <a
                  href={current.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                >
                  {current.author}
                </a>
              ) : (
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {current.author}
                </span>
              )}
              {current.authorTitle && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{current.authorTitle}</p>
              )}
            </div>
          </footer>
        </blockquote>
      </div>
      {/* Dot indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-slate-700 dark:bg-slate-300'
                : 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-500'
            }`}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
