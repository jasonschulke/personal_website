'use client'

import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'

export interface TestimonialSlide {
  type: 'testimonial'
  quote: string
  author: string
  authorTitle?: string
  authorUrl?: string
  authorImage?: StaticImageData
  bgClass: string
}

export interface ImageSlide {
  type: 'image'
  src: StaticImageData
  alt: string
}

export type CarouselSlide = TestimonialSlide | ImageSlide

interface HeroCarouselProps {
  slides: CarouselSlide[]
  interval?: number
}

export function HeroCarousel({ slides, interval = 6000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [slides.length, interval])

  const current = slides[currentIndex]

  return (
    <div className="relative">
      <div className="aspect-square rotate-3 overflow-hidden rounded-2xl bg-zinc-100 shadow-xl shadow-zinc-900/10 dark:bg-zinc-800 dark:shadow-zinc-900/30">
        {current.type === 'image' ? (
          <Image
            src={current.src}
            alt={current.alt}
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="relative flex h-full flex-col justify-center overflow-hidden">
            {/* Blurred gradient background */}
            <div className={`absolute inset-0 ${current.bgClass}`} />
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl" />

            {/* Content */}
            <blockquote className="relative z-10 p-5 sm:p-8">
              <p className="text-sm font-medium leading-relaxed text-zinc-700 italic sm:text-base dark:text-zinc-200">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3 sm:mt-6">
                {current.authorImage && (
                  <Image
                    src={current.authorImage}
                    alt={current.author}
                    className="h-10 w-10 rounded-full border-2 border-white/50 object-cover shadow-lg sm:h-12 sm:w-12"
                    unoptimized
                  />
                )}
                <div>
                  {current.authorUrl ? (
                    <a
                      href={current.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-zinc-900 hover:text-indigo-600 sm:text-base dark:text-zinc-100 dark:hover:text-indigo-400"
                    >
                      {current.author}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-zinc-900 sm:text-base dark:text-zinc-100">
                      {current.author}
                    </span>
                  )}
                  {current.authorTitle && (
                    <p className="text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">{current.authorTitle}</p>
                  )}
                </div>
              </footer>
            </blockquote>
          </div>
        )}
      </div>
      {/* Dot indicators */}
      <div className="mt-4 flex justify-center gap-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="flex h-11 w-11 items-center justify-center"
            aria-label={`View slide ${index + 1}`}
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-indigo-600 dark:bg-indigo-400'
                  : 'bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-500 dark:hover:bg-zinc-400'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
