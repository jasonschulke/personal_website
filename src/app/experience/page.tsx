import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Section } from '@/components/Section'
import { WorkHistory, type WorkRole } from '@/components/WorkHistory'
import { Toolkit, type ToolCategory } from '@/components/Toolkit'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'My professional journey through customer education, support operations, and solutions architecture.',
  openGraph: {
    title: 'Experience - Jason Schulke',
    description:
      'My professional journey through customer education, support operations, and solutions architecture.',
  },
}

const workHistory: WorkRole[] = [
  {
    title: 'Principal Solutions Architect',
    company: 'Prep Work',
    companyUrl: 'https://prepwork.co',
    location: 'Austin, TX',
    period: '2024 - Present',
    highlights: [
      'Designed and shipped a full customer education ecosystem (LMS, documentation, certification) for a complex SaaS product, enabling self-service that reduced support volume and increased customer retention.',
      'Developed a custom web app for a modular flooring manufacturer, integrating design, quoting, and production data to automate workflows, reduce manual input, and improve order accuracy.',
      'Built a global campaign management platform for Levi to unify 100K+ products and creative assets, streamlining marketing operations across teams and regions.',
      'Engineered an automated inventory system with custom APIs for barcode generation, live tracking, and real-time leadership dashboards.',
      "Delivered an internal coordination platform for AARP's Public Policy Institute to manage campaigns, events, and publications, improving visibility and cross-team collaboration.",
    ],
  },
  {
    title: 'Senior Manager, Customer Education',
    company: 'Common Room',
    companyUrl: 'https://commonroom.io',
    location: 'Seattle, WA',
    period: '2023',
    highlights: [
      'Created a scalable education and enablement strategy aligned with a company-wide shift toward self-service, cutting onboarding time by 50% and technical integration time by 60%.',
      'Worked directly with customers and support teams to investigate complex integration and feature-related issues, translating those findings into documentation, tooling, and internal process changes.',
      'Partnered closely with Product and Engineering to support feature launches, identify emerging support risks, and improve customer understanding during periods of rapid change.',
    ],
  },
  {
    title: 'Manager, Support Operations',
    company: 'Airtable',
    companyUrl: 'https://airtable.com',
    location: 'San Francisco, CA',
    period: '2018 - 2023',
    highlights: [
      "Built and scaled Airtable's Support organization and operational backbone from launch through global scale, spanning internal teams and external partners.",
      "Designed and owned Airtable's first self-service, knowledge, and Content Operations systems, achieving a 35:1 self-service rate, 52% instant resolution, and a 30% reduction in ticket volume.",
      'Designed specialization frameworks and escalation paths that reduced handoffs, improved resolution of complex issues, and strengthened collaboration across Support, Product, and Engineering.',
      'Led end-to-end evaluation and implementation of core support tooling (Zendesk, Salesforce), owning workflows, routing, automation, dashboards, and long-term system strategy while remaining hands-on in case review and escalations.',
      'Built support analytics and reporting used in executive reviews and cross-functional planning to inform prioritization, staffing, and product decisions, and implemented Knowledge-Centered Service (KCS) to increase content accuracy, velocity, and trust.',
    ],
  },
]

const toolkit: ToolCategory[] = [
  {
    category: 'LMS',
    tools: ['Lessonly', 'Workramp'],
  },
  {
    category: 'CMS',
    tools: [
      'Webflow',
      'Contentful',
      'Sanity Studio',
      'Document360',
      'Zendesk Guide',
      'Help Scout',
      'Guru',
      'Confluence',
      'WordPress',
    ],
  },
  {
    category: 'CRM',
    tools: ['HubSpot', 'Salesforce'],
  },
  {
    category: 'Project Management',
    tools: ['Airtable', 'Notion'],
  },
  {
    category: 'Customer Support',
    tools: [
      'Zendesk',
      'Intercom',
      'Zoom Virtual Agent (formerly Solvvy)',
      'Salesforce Service Cloud',
    ],
  },
  {
    category: 'Automation and integrations',
    tools: ['Zapier', 'Make', 'Webhooks'],
  },
  {
    category: 'Collaborative Design',
    tools: ['Figma', 'Miro', 'Sketch'],
  },
  {
    category: 'Interactive Media Creation',
    tools: ['Arcade', 'Descript', 'Wistia', 'Tango', 'Livestorm'],
  },
  {
    category: 'Forms',
    tools: ['Fillout', 'Typeform'],
  },
  {
    category: 'Analytics',
    tools: ['Google Analytics', 'Full Story', 'Equals'],
  },
]

interface EngagementItem {
  title: string
  url?: string
}

const engagements: EngagementItem[] = [
  {
    title: 'Certified Airtable Builder',
    url: 'https://www.airtable.com/lp/builder-certification',
  },
  { title: 'Moderator and Community Member, Support Driven' },
  { title: 'Guest Speaker, Support Driven Podcast' },
  { title: 'Author, Product Education' },
  { title: 'Member, CX Accelerator' },
  { title: 'Member, Customer Education Org' },
  { title: 'Member, Write the Docs' },
]

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

function EngagementsList({ items }: { items: EngagementItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <span className="text-zinc-400 dark:text-zinc-500">&gt;</span>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
            >
              {item.title}
              <ExternalLinkIcon className="h-3 w-3" />
            </a>
          ) : (
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              {item.title}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  return (
    <SimpleLayout
      title="Experience"
      intro="My professional journey through customer education, support operations, and solutions architecture."
    >
      <div className="space-y-20">
        <Section title="Work history">
          <WorkHistory roles={workHistory} />
        </Section>
        <Section title="Toolkit">
          <Toolkit categories={toolkit} />
        </Section>
        <Section title="Professional engagement">
          <EngagementsList items={engagements} />
        </Section>
      </div>
    </SimpleLayout>
  )
}
