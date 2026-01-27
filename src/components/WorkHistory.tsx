'use client'

import { useState } from 'react'
import clsx from 'clsx'

function ChevronIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9 18l6-6-6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ExternalLinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export interface WorkRole {
  title: string
  company: string
  companyUrl?: string
  location: string
  period: string
  highlights: string[]
}

interface WorkHistoryItemProps {
  role: WorkRole
  defaultExpanded?: boolean
}

function WorkHistoryItem({ role, defaultExpanded = false }: WorkHistoryItemProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {role.title}
            </h3>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">@</span>
            {role.companyUrl ? (
              <a
                href={role.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
              >
                {role.company}
                <ExternalLinkIcon className="h-3 w-3" />
              </a>
            ) : (
              <span className="text-sm font-medium text-teal-500 dark:text-teal-400">
                {role.company}
              </span>
            )}
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {role.location} &middot; {role.period}
          </p>
        </div>
        <ChevronIcon
          className={clsx(
            'h-5 w-5 flex-none text-zinc-400 transition-transform duration-200 dark:text-zinc-500',
            isExpanded && 'rotate-90'
          )}
        />
      </button>
      {isExpanded && (
        <div className="border-t border-zinc-100 px-6 pb-6 pt-4 dark:border-zinc-700/40">
          <ul className="space-y-3">
            {role.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
              >
                <span className="mt-2 h-1 w-1 flex-none rounded-full bg-zinc-400 dark:bg-zinc-500" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

interface WorkHistoryProps {
  roles: WorkRole[]
}

export function WorkHistory({ roles }: WorkHistoryProps) {
  return (
    <div className="space-y-4">
      {roles.map((role, index) => (
        <WorkHistoryItem key={index} role={role} defaultExpanded={index === 0} />
      ))}
    </div>
  )
}
