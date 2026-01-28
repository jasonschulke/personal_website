import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Case studies from my consulting work at Prep Work, building operational systems and customer-facing tools for complex products.',
  openGraph: {
    title: 'Projects - Jason Schulke',
    description:
      'Case studies from my consulting work at Prep Work, building operational systems and customer-facing tools for complex products.',
  },
}

interface Project {
  title: string
  client: string
  category: string
  description: string
  image: string
  href?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Learning Management & Certification for Kodif',
    client: 'Kodif',
    category: 'Platform Development',
    description:
      "Built a learning management system and product certification course for Kodif's AI-powered customer service platform. The structured training content serves dual purposes: educating customers while providing high-quality source material for AI agent training.",
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
    featured: true,
  },
  {
    title: 'Custom Web App for Center Stage Floors',
    client: 'Center Stage Floors',
    category: 'App Development',
    description:
      'Developed a custom web app for a modular flooring manufacturer, integrating design, quoting, and production data.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60',
  },
  {
    title: "Global Campaign Management for Levi's",
    client: "Levi's",
    category: 'Platform Development',
    description:
      'Built a global campaign management platform to unify 100K+ product and creative assets, streamlining marketing operations across teams and regions.',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=60',
  },
  {
    title: 'Personalized Fitness App for Moove',
    client: 'Moove',
    category: 'Mobile App Development',
    description:
      'Built an individualized workout and exercise mobile app helping local fitness enthusiasts achieve their personal health goals.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop&q=60',
  },
  {
    title: 'Coordination Platform for AARP',
    client: 'AARP',
    category: 'Platform Development',
    description:
      "Delivered a coordination platform for AARP's Public Policy Institute to manage campaigns, events, and publications, improving cross-team collaboration.",
    image:
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&auto=format&fit=crop&q=60',
  },
  {
    title: 'Custom Web App for Blueprint',
    client: 'Blueprint',
    category: 'App Development',
    description:
      'Developed a custom web app for a modular flooring manufacturer, integrating design, quoting, and production data.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&auto=format&fit=crop&q=60',
  },
  {
    title: 'Intelligent Returns Tool for Return Window',
    client: 'Return Window',
    category: 'App Development',
    description:
      'Built a tool for intelligently monitoring purchases and tracking returns across e-commerce platforms.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=60',
  },
]

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="rounded-3xl bg-zinc-50 p-8 dark:bg-zinc-800/50 sm:p-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-700">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium text-rose-500">Featured Project</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            {project.title}
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="mt-6">
            <Link
              href="https://prepwork.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-rose-500 hover:text-rose-600"
            >
              Read the full story
              <ArrowIcon className="ml-1 h-4 w-4 stroke-current" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col">
      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={450}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>
      <p className="mt-4 text-sm font-medium text-rose-500">{project.category}</p>
      <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="mt-4">
        <Link
          href="https://prepwork.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-rose-500 hover:text-rose-600"
        >
          Read more
          <ArrowIcon className="ml-1 h-4 w-4 stroke-current" />
        </Link>
      </div>
    </div>
  )
}

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Projects & Case Studies
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A selection of projects from my consulting work at Prep Work, where I
          design and build operational systems and customer-facing tools for
          complex products.
        </p>
      </header>

      {featuredProject && (
        <div className="mt-16">
          <FeaturedProject project={featuredProject} />
        </div>
      )}

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="https://prepwork.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        >
          View all projects at Prep Work
          <ArrowIcon className="h-4 w-4 stroke-current" />
        </Link>
      </div>
    </Container>
  )
}
