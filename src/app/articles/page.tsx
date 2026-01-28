import { type Metadata } from 'next'
import Link from 'next/link'

import { Card } from '@/components/Card'
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

        items.push({
          title: title.trim(),
          link: link.trim(),
          description: cleanDescription(description.trim()),
          pubDate: pubDate.trim(),
          creator: creator.trim(),
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
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={article.link}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.pubDate}
          className="md:hidden"
          decorate
        >
          {formatDate(article.pubDate)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.pubDate}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.pubDate)}
      </Card.Eyebrow>
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
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.length > 0 ? (
            articles.map((article) => (
              <Article key={article.link} article={article} />
            ))
          ) : (
            <p className="text-zinc-600 dark:text-zinc-400">
              Unable to load articles. Visit{' '}
              <Link
                href="https://producteducation.substack.com"
                className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
              >
                Product Education on Substack
              </Link>{' '}
              directly.
            </p>
          )}
        </div>
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
