export interface ToolCategory {
  category: string
  tools: string[]
}

interface ToolkitProps {
  categories: ToolCategory[]
}

export function Toolkit({ categories }: ToolkitProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-700/40">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-100 bg-zinc-50 dark:border-zinc-700/40 dark:bg-zinc-800/50">
            <th className="px-6 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">
              Software
            </th>
            <th className="px-6 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">
              Category
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700/40">
          {categories.map((category, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                {category.tools.join(', ')}
              </td>
              <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                {category.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
