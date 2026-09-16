import fs from 'node:fs'
import path from 'node:path'
import { type MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://jasonschulke.com'

// Every folder in src/app/projects that has its own page.tsx is a project page,
// so new project pages show up here without editing this file.
function projectPaths() {
  const projectsDir = path.join(process.cwd(), 'src/app/projects')
  return fs
    .readdirSync(projectsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(projectsDir, entry.name, 'page.tsx')))
    .map((entry) => `/projects/${entry.name}`)
    .sort()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/experience`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    ...projectPaths().map((projectPath) => ({
      url: `${baseUrl}${projectPath}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
