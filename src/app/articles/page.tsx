import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Thoughts on building simple, effective, and scalable product education strategies for SaaS companies.',
  openGraph: {
    title: 'Articles - Jason Schulke',
    description:
      'Thoughts on building simple, effective, and scalable product education strategies for SaaS companies.',
  },
}

interface FeedItem {
  title: string
  link: string
  description: string
  pubDate: string
  creator: string
  image?: string
}

async function getSubstackArticles(): Promise<FeedItem[]> {
  try {
    const response = await fetch('https://producteducation.substack.com/feed', {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch feed')
    }

    const xml = await response.text()

    // Parse the XML manually (simple approach)
    const items: FeedItem[] = []
    const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g)

    if (itemMatches) {
      for (const itemXml of itemMatches) {
        const title = itemXml.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] ||
          itemXml.match(/<title>([\s\S]*?)<\/title>/)?.[1] || ''

        const link = itemXml.match(/<link>([\s\S]*?)<\/link>/)?.[1] || ''

        const description = itemXml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] ||
          itemXml.match(/<description>([\s\S]*?)<\/description>/)?.[1] || ''

        const pubDate = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] || ''

        const creator = itemXml.match(/<dc:creator><!\[CDATA\[([\s\S]*?)\]\]><\/dc:creator>/)?.[1] ||
          itemXml.match(/<dc:creator>([\s\S]*?)<\/dc:creator>/)?.[1] || ''

        // Extract image from enclosure or media:content
        const enclosureUrl = itemXml.match(/<enclosure[^>]*url="([^"]*)"[^>]*type="image/)?.[1] ||
          itemXml.match(/<media:content[^>]*url="([^"]*)"[^>]*medium="image"/)?.[1] ||
          itemXml.match(/<media:thumbnail[^>]*url="([^"]*)"/)?.[1] ||
          // Try to extract from description HTML img tag
          description.match(/<img[^>]*src="([^"]*)"/)?.[1] || ''

        items.push({
          title: title.trim(),
          link: link.trim(),
          description: cleanDescription(description.trim()),
          pubDate: pubDate.trim(),
          creator: creator.trim(),
          image: enclosureUrl.trim() || undefined,
        })
      }
    }

    return items
  } catch (error) {
    console.error('Error fetching Substack feed:', error)
    return []
  }
}

function cleanDescription(html: string): string {
  // Remove HTML tags and decode entities
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .slice(0, 300)
    .trim() + '...'
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateString
  }
}

function Article({ article }: { article: FeedItem }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-300 dark:border-zinc-600 dark:hover:border-zinc-500">
      <time
        dateTime={article.pubDate}
        className="mb-3 text-sm text-zinc-500 dark:text-zinc-400"
      >
        {formatDate(article.pubDate)}
      </time>
      {article.image && (
        <div className="relative mb-4 aspect-[2/1] w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
          <img
            src={article.image}
            alt=""
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        </div>
      )}
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <Link href={article.link} target="_blank" rel="noopener noreferrer">
          <span className="absolute inset-0 z-10" />
          {article.title}
        </Link>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {article.description}
      </p>
      <div className="mt-4 flex items-center text-sm font-medium text-indigo-500">
        Read article
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </article>
  )
}

export default async function Articles() {
  const articles = await getSubstackArticles()

  return (
    <SimpleLayout
      title="Writing on product education, support operations, and building systems that scale."
      intro="My thoughts on building simple, effective, and scalable product education strategies for SaaS companies. All articles are published on my Substack newsletter, Product Education."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.length > 0 ? (
          articles.map((article) => (
            <Article key={article.link} article={article} />
          ))
        ) : (
          <p className="col-span-full text-zinc-600 dark:text-zinc-400">
            Unable to load articles. Visit{' '}
            <Link
              href="https://producteducation.substack.com"
              className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Product Education on Substack
            </Link>{' '}
            directly.
          </p>
        )}
      </div>
      <div className="mt-16 flex justify-center">
        <Link
          href="https://producteducation.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        >
          Subscribe on Substack
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current"
            aria-hidden="true"
          >
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l9.56-5.573 9.52 5.573V10.812H1.46zm0-7.971h21.08V0H1.46v2.841z" />
          </svg>
        </Link>
      </div>
    </SimpleLayout>
  )
}
