/**
 * Fetches articles from the Substack RSS feed and saves them to src/data/articles.json.
 * Run with: node scripts/fetch-articles.mjs
 *
 * If the fetch fails (e.g. in CI where Substack blocks requests), the existing
 * articles.json is left untouched so the build still has data.
 */

import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = join(__dirname, '..', 'src', 'data', 'articles.json')
const FEED_URL = 'https://producteducation.substack.com/feed'

function extract(xml, tag) {
  const cdataRe = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`)
  const plainRe = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`)
  const m = xml.match(cdataRe) || xml.match(plainRe)
  return m ? m[1].trim() : ''
}

function cleanDescription(html) {
  let text = html.replace(/<[^>]*>/g, '')
  text = text.replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&\u2019/g, '\u2019')
  if (text.length > 300) text = text.slice(0, 300).trim() + '...'
  return text
}

async function main() {
  console.log('Fetching Substack feed...')

  try {
    const response = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; personal-site-build/1.0)' },
    })

    if (!response.ok) {
      throw new Error(`Feed returned ${response.status}`)
    }

    const xml = await response.text()
    const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g)

    if (!itemMatches || itemMatches.length === 0) {
      throw new Error('No items found in feed')
    }

    const articles = itemMatches.map((itemXml) => {
      const enclosureMatch = itemXml.match(/<enclosure[^>]*url="([^"]+)"/)
      const image = enclosureMatch
        ? enclosureMatch[1].replace(/&amp;/g, '&')
        : null

      return {
        title: extract(itemXml, 'title'),
        link: extract(itemXml, 'link'),
        description: cleanDescription(extract(itemXml, 'description')),
        pubDate: extract(itemXml, 'pubDate'),
        creator: extract(itemXml, 'dc:creator'),
        image,
      }
    })

    writeFileSync(OUTPUT_PATH, JSON.stringify(articles, null, 2) + '\n')
    console.log(`Wrote ${articles.length} articles to src/data/articles.json`)
  } catch (error) {
    console.warn('Failed to fetch feed:', error.message)
    console.warn('Keeping existing articles.json')
  }
}

main()
