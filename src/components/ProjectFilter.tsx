'use client'

import { useState, type ReactNode } from 'react'

export interface FilterItem {
  key: string
  tag?: string
  node: ReactNode
}

const ALL = 'All'
const WRITING = 'Writing'

export function ProjectFilter({
  tags,
  upcoming,
  released,
  writing,
}: {
  tags: string[]
  upcoming: FilterItem[]
  released: FilterItem[]
  writing: ReactNode
}) {
  const [filter, setFilter] = useState(ALL)

  const matches = (item: FilterItem) => filter === ALL || item.tag === filter
  const visibleUpcoming = upcoming.filter(matches)
  const visibleReleased = released.filter(matches)

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {[ALL, ...tags, WRITING].map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === option
                ? 'bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {filter !== WRITING && (
        <section className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Projects
          </h2>
          {visibleUpcoming.length > 0 && (
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {visibleUpcoming.map((item) => (
                <div key={item.key} className="contents">
                  {item.node}
                </div>
              ))}
            </div>
          )}
          {visibleReleased.length > 0 && (
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {visibleReleased.map((item) => (
                <div key={item.key} className="contents">
                  {item.node}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {(filter === ALL || filter === WRITING) && (
        <section
          id="writing"
          className={`scroll-mt-24 ${filter === ALL ? 'mt-20' : 'mt-10'}`}
        >
          {writing}
        </section>
      )}
    </>
  )
}
