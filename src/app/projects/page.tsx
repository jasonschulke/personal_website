import { type Metadata } from 'next'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { ProjectFilter } from '@/components/ProjectFilter'
import { WritingList, type WritingItem } from '@/components/WritingList'
import { projectDates } from '@/data/projectDates'
import articles from '@/data/articles.json'

import bucketsHero from './buckets/buckets.png'
import mooveHero from './moove/moove_hero.jpg'
import returnWindowHero from './return-window/return_window.png'
import cardboardHero from './cardboard-co/urban-billboard-mockup.jpg'
import zapMakeHero from './zapier-or-make/zapier_vs_make_project_image.jpg'
import claudeSkillsHero from './claude-code-skills/hero.png'
import maxHero from './max/max_hero.jpg'
import papayaHero from './papaya/papaya_hero.jpg'
import hootenannyHero from './hootenanny/hootenanny_hero.png'
import parsnipTeaser from './parsnip/parsnip_mock.png'
import tenderTeaser from './tender/tender_teaser.png'
import qqTeaser from './qq/qq_teaser.png'
import iteratorHero from './iterator/iterator_hero.png'
import adMuteHero from './ad-mute/ad_mute_hero.png'
import kidsArtFrameHero from './kids-art-frame/kids_art_frame_cover.jpg'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Things I've built and written, from side projects and pilots to essays on product education and operations.",
}

// Filter pills on the page appear in this order, and only for tags in use.
const PROJECT_TAGS = ['Apps', 'Tools', 'Hardware'] as const
type ProjectTag = (typeof PROJECT_TAGS)[number]

type Project = {
  name: string
  slug: string
  tag?: ProjectTag
  description?: string
  href?: string
  image?: StaticImageData
  badge?: { label: string; variant: 'soon' | 'pilot' }
}

// Shown latest first, sorted by the dates in @/data/projectDates.
// Projects from the same month keep the order they have here.
const projects: Project[] = [
  {
    name: 'Tender',
    slug: 'tender',
    tag: 'Apps',
    description:
      'A gamified conversation starter for couples.',
    image: tenderTeaser,
    badge: { label: 'Soon', variant: 'soon' },
  },
  {
    name: 'Return Window',
    slug: 'return-window',
    tag: 'Apps',
    description:
      'Never miss a return deadline again. Forward your order confirmations and get reminded before return windows close.',
    href: '/projects/return-window',
    image: returnWindowHero,
    badge: { label: 'Soon', variant: 'soon' },
  },
  {
    name: 'Parsnip',
    slug: 'parsnip',
    tag: 'Apps',
    description:
      'Import recipes from any website, avoid paywalls, and manage recipes.',
    image: parsnipTeaser,
    badge: { label: 'Soon', variant: 'soon' },
  },
  {
    name: "Queen's Quest",
    slug: 'queens-quest',
    tag: 'Apps',
    description:
      'A gamified RPG task planner. Real-life tasks become quests in a cozy top-down fantasy kingdom, with sub-tasks as chapters and rewards for finishing.',
    href: '/projects/queens-quest',
    image: qqTeaser,
  },
  {
    name: 'iterator...',
    slug: 'iterator',
    tag: 'Tools',
    description:
      'A fun skeuomorphic web tool that turns birthdays and anniversaries into yearly Google Calendar events, each with the age or year count right in the title.',
    href: '/projects/iterator',
    image: iteratorHero,
  },
  {
    name: 'Hootenanny',
    slug: 'hootenanny',
    tag: 'Apps',
    description:
      'A small web app for sending event invitations. Make the invite, send the link, and see who is coming. Guests never have to make an account.',
    href: '/projects/hootenanny',
    image: hootenannyHero,
  },
  {
    name: 'Papaya',
    slug: 'papaya',
    tag: 'Apps',
    description:
      'A unified house hunting tool that lets you save, rate, and organize homes from any listing site with just one click.',
    href: '/projects/papaya',
    image: papayaHero,
  },
  {
    name: "Kids' Art Frame",
    slug: 'kids-art-frame',
    tag: 'Hardware',
    description:
      "A color e-paper frame for my kids' art. A phone photo is straightened, filed, captioned, and on the wall within minutes.",
    href: '/projects/kids-art-frame',
    image: kidsArtFrameHero,
  },
  {
    name: 'Ad Mute',
    slug: 'ad-mute',
    tag: 'Tools',
    description:
      'A Home Assistant automation that mutes the TV during Disney+ ads by watching how the playback position behaves.',
    href: '/projects/ad-mute',
    image: adMuteHero,
  },
  {
    name: 'Max',
    slug: 'max',
    tag: 'Apps',
    description:
      "A macOS menu bar app that turns the Dock into a full-width bar, like the Windows taskbar, by drawing over Apple's Dock.",
    href: '/projects/max',
    image: maxHero,
  },
  {
    name: 'Cardboard Co',
    slug: 'cardboard-co',
    description:
      'An exercise in building an idea, brand, and testing product-market fit with a hyperlocal recycling service in Austin, TX.',
    href: '/projects/cardboard-co',
    image: cardboardHero,
    badge: { label: 'Pilot', variant: 'pilot' },
  },
  {
    name: 'Moove',
    slug: 'moove',
    tag: 'Apps',
    description:
      'A minimalist, offline-first workout tracker with AI coaching built-in. Designed for people who want to stay consistent without the bloat.',
    href: '/projects/moove',
    image: mooveHero,
  },
  {
    name: 'Claude Code Skills',
    slug: 'claude-code-skills',
    tag: 'Tools',
    description:
      'A suite of complementary Claude Code skills for managing project context, progress, and releases.',
    href: '/projects/claude-code-skills',
    image: claudeSkillsHero,
  },
  {
    name: 'Buckets',
    slug: 'buckets',
    tag: 'Tools',
    description:
      'A simple prioritization tool with a retro twist. Drop tasks into buckets, drag to reorder, and focus on what matters most.',
    href: '/projects/buckets',
    image: bucketsHero,
  },
  {
    name: 'Zapier or Make',
    slug: 'zapier-or-make',
    tag: 'Tools',
    description:
      'Zapier and Make use fundamentally different billing models. This tool estimates your Make operations from Zapier usage and finds the lowest-cost plan.',
    href: '/projects/zapier-or-make',
    image: zapMakeHero,
  },
]

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// Turns a date like "September 2026" into a number that sorts by month.
function monthIndex(slug: string) {
  const date = projectDates[slug]
  if (!date) return -1
  const [month, year] = date.split(' ')
  if (!MONTHS.includes(month) || !/^\d{4}$/.test(year)) {
    throw new Error(`projectDates["${slug}"] should look like "September 2026", got "${date}"`)
  }
  return Number(year) * 12 + MONTHS.indexOf(month)
}

const sortedProjects = [...projects].sort((a, b) => monthIndex(b.slug) - monthIndex(a.slug))

// Unreleased projects get their own row of compact cards above the main grid.
const upcomingProjects = sortedProjects.filter((project) => project.badge?.variant === 'soon')
const releasedProjects = sortedProjects.filter((project) => project.badge?.variant !== 'soon')
const tagsInUse = PROJECT_TAGS.filter((tag) => projects.some((project) => project.tag === tag))

function ProjectBadge({ badge }: { badge: NonNullable<Project['badge']> }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
        badge.variant === 'pilot'
          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
          : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
      }`}
    >
      {badge.label}
    </span>
  )
}

function ProjectCardInner({ project }: { project: Project }) {
  const date = projectDates[project.slug]

  return (
    <>
      {project.image ? (
        <div className="aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center bg-zinc-200 dark:bg-zinc-700">
          <span className="text-4xl font-bold text-zinc-400 dark:text-zinc-500">
            {project.name[0]}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {project.name}
          </h3>
          {project.badge && <ProjectBadge badge={project.badge} />}
        </div>
        {date && (
          <p className="mt-1 text-xs font-medium text-zinc-400 dark:text-zinc-500">
            {[date, project.tag].filter(Boolean).join(' · ')}
          </p>
        )}
        {project.description && (
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
        )}
      </div>
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const baseClass =
    'group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-100 transition dark:bg-zinc-800'

  if (project.href) {
    return (
      <Link
        href={project.href}
        className={`${baseClass} hover:bg-zinc-200 dark:hover:bg-zinc-700`}
      >
        <ProjectCardInner project={project} />
      </Link>
    )
  }

  return (
    <div className={baseClass}>
      <ProjectCardInner project={project} />
    </div>
  )
}

function UpcomingCardInner({ project }: { project: Project }) {
  const date = projectDates[project.slug]

  return (
    <>
      {project.image ? (
        <div className="aspect-[4/3] w-28 flex-none overflow-hidden rounded-xl sm:w-32">
          <Image
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] w-28 flex-none items-center justify-center rounded-xl bg-zinc-200 sm:w-32 dark:bg-zinc-700">
          <span className="text-2xl font-bold text-zinc-400 dark:text-zinc-500">
            {project.name[0]}
          </span>
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {project.name}
          </h3>
          {project.badge && <ProjectBadge badge={project.badge} />}
        </div>
        {date && (
          <p className="mt-0.5 text-xs font-medium text-zinc-400 dark:text-zinc-500">
            {[date, project.tag].filter(Boolean).join(' · ')}
          </p>
        )}
        {project.description && (
          <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
        )}
      </div>
    </>
  )
}

function UpcomingCard({ project }: { project: Project }) {
  const baseClass =
    'group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-dashed border-zinc-300 p-3 transition dark:border-zinc-700'

  if (project.href) {
    return (
      <Link
        href={project.href}
        className={`${baseClass} hover:bg-zinc-100 dark:hover:bg-zinc-800`}
      >
        <UpcomingCardInner project={project} />
      </Link>
    )
  }

  return (
    <div className={baseClass}>
      <UpcomingCardInner project={project} />
    </div>
  )
}

export default function Projects() {
  return (
    <Container className="mt-9 sm:mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Projects
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A mix of things I&apos;ve built and I&apos;ve written, including apps,
          automations, tools, and articles on building systems that scale.
        </p>
      </header>

      <ProjectFilter
        tags={[...tagsInUse]}
        upcoming={upcomingProjects.map((project) => ({
          key: project.slug,
          tag: project.tag,
          node: <UpcomingCard project={project} />,
        }))}
        released={releasedProjects.map((project) => ({
          key: project.slug,
          tag: project.tag,
          node: <ProjectCard project={project} />,
        }))}
        writing={
          <>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Product Education
            </h2>
            <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
              Essays on product education, support operations, and building systems
              that scale, published on my Substack newsletter, Product Education.
            </p>
            <WritingList articles={articles as WritingItem[]} />
          </>
        }
      />
    </Container>
  )
}
