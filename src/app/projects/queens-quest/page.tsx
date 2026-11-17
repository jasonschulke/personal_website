import { type Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { ProjectDate } from '@/components/ProjectDate'
import { FeatureRow, Screenshot, TechStack } from '@/components/ProjectParts'

import heroImage from './qq_hero.png'
import questBoardImage from './qq_quest_board.png'
import chaptersImage from './qq_quest_chapters.png'
import kanbanImage from './qq_kanban.png'
import calendarImage from './qq_calendar.png'
import journalImage from './qq_journal.png'
import cottageImage from './qq_cottage.png'
import worldEditorImage from './qq_world_editor.png'

export const metadata: Metadata = {
  title: "Queen's Quest - A Task Planner You Can Walk Around In",
  description:
    'A gamified RPG task planner. Real-life tasks become quests in a cozy top-down fantasy kingdom, with sub-tasks as chapters and a payout for finishing.',
}

export default function QueensQuest() {
  return (
    <Container className="mt-9 sm:mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Queen&apos;s Quest
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A task planner dressed as a cozy top-down RPG. Real-life tasks are
          quests, sub-tasks are chapters, and each area of life is a realm in a
          small pixel-art kingdom you can walk around. Finishing a quest pays
          out in the kingdom&apos;s own currency. I built it for one person,
          Bryn, and it runs as a private web app on her laptop and phone.
        </p>
        <ProjectDate slug="queens-quest" />
      </header>

      <div className="mt-12">
        <Image
          src={heroImage}
          alt="The Queen's Quest kingdom: a pixel-art village with a market, farm, and lake, beside a sidebar listing today's routines and quests"
          className="rounded-2xl"
          priority
        />
      </div>

      <div className="mt-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Why I Built This
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Bryn already ran her tasks out of an Airtable base called Task Bear.
            Each task had an effort tier, and each tier was worth a dollar
            amount she paid herself for finishing it. The system worked, but
            using it meant opening a spreadsheet. She likes cozy games, the
            kind with a village, a farm, and neighbors to talk to, so I wanted
            to see if her task list could live in one.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The rule I held to was that the planner had to be a good planner
            first. Every quest can be added, edited, and finished from the
            keyboard without taking a step in the world. The kingdom is there
            for the rest of the time: a place to wander between tasks, with her
            day&apos;s list always in the sidebar.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            The Quest Board
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The board sorts quests into six realms, one for each part of life:
            the Royal Castle for work, the Community Library for learning, the
            Village Square for friends and family, the Enchanted Gardens for
            creative projects, the Tranquil River for rest, and the Cozy
            Cottage for home. The Town Crier on the left counts what&apos;s due
            today and what&apos;s overdue, and lists the daily routines.
          </p>
          <Screenshot
            src={questBoardImage}
            alt="The Quest Board with the Town Crier panel and a card for each of the six realms"
            caption="The Quest Board: six realms, and the Town Crier's count of what's due."
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A quest can be split into chapters, each with its own effort, due
            date, and notes. Ticking a chapter pays for that chapter and moves
            the quest&apos;s progress bar. Every button shows its key, so a
            quest can be opened, ticked off, and closed without the mouse.
          </p>
          <Screenshot
            src={chaptersImage}
            alt="A quest open over the Royal Castle realm, showing four chapters with two ticked off and a progress bar at 50%"
            caption="A quest with four chapters, two of them done."
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Each realm, and the All Realms view across them, can be read as a
            table, a kanban board, or a calendar. Dragging a quest between
            columns changes its status, and dragging it to another day changes
            its due date.
          </p>
          <Screenshot
            src={kanbanImage}
            alt="The All Realms kanban view with To Do, Doing, and Done columns"
            caption="Every quest in the kingdom, as a kanban board."
          />
          <Screenshot
            src={calendarImage}
            alt="The All Realms calendar view for November 2026 with quests on their due dates"
            caption="The same quests on the calendar."
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Bryn Bucks
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The economy came straight from Task Bear. Every quest or chapter
            has one of five effort tiers, from Errand (under an hour, $1) up to
            Dragon Slaying (six to eight hours, $5). Finishing it adds that
            amount to the treasury, and restoring a finished quest takes the
            money back, so there&apos;s nothing to gain by completing the same
            quest twice. The Queen&apos;s Journal keeps the ledger: the
            balance, today&apos;s earnings, a running chart, and a line for
            marking money as spent.
          </p>
          <Screenshot
            src={journalImage}
            alt="The Queen's Journal open to the Treasury tab, with a balance, a running balance chart, and a ledger of payouts"
            caption="The Treasury tab of the Queen's Journal."
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            The Kingdom
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Each realm on the board is also a place on the map. The queen walks
            between them, and every building has an interior. Along the way she
            can talk to the townsfolk, fish, catch bugs, gather, and plant
            carrots that grow over real days. Townsfolk hand out small quests
            of their own, and skills level up with use. The daily routines
            count too: ticking off &ldquo;Unload the dishwasher&rdquo; earns
            Homekeeping experience.
          </p>
          <Screenshot
            src={cottageImage}
            alt="Inside the Cozy Cottage: a small room with a stove, a table, a bed, and bookshelves"
            caption="Inside the Cozy Cottage."
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The world is hers to rearrange. Edit Mode opens a palette of every
            building and decoration and a terrain brush for grass, paths,
            cobble, and water. Anything on the map can be moved, resized,
            rotated, or locked in place, and the changes save as she makes
            them. A Character Manager renames the townsfolk and adds new
            residents.
          </p>
          <Screenshot
            src={worldEditorImage}
            alt="The World Editor with a sprite palette on the left, the map in the middle, and object properties on the right"
            caption="Edit Mode, with the sprite palette and terrain brush."
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Key Features
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                    Feature
                  </th>
                  <th className="py-3 text-left text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <FeatureRow
                  feature="Realms"
                  description="Six areas of life, each a card on the board and a place on the map, plus a Cemetery where finished quests are archived."
                />
                <FeatureRow
                  feature="Chapters"
                  description="Sub-tasks with their own effort, due date, and notes, ticked off from the quest preview."
                />
                <FeatureRow
                  feature="Three Views"
                  description="Table, kanban, and calendar for one realm or all of them, with search and drag-and-drop."
                />
                <FeatureRow
                  feature="Bryn Bucks"
                  description="Five effort tiers that pay $1 to $5, a ledger of every payout, and a way to mark money as spent."
                />
                <FeatureRow
                  feature="Daily Routines"
                  description="A short checklist that resets each day and earns Homekeeping experience."
                />
                <FeatureRow
                  feature="Repeating Quests"
                  description="Daily, weekday, weekly, or monthly. Completing one creates the next."
                />
                <FeatureRow
                  feature="Royal Duties"
                  description="Ongoing workstreams that are prioritized and retired, never completed. A quest can serve one."
                />
                <FeatureRow
                  feature="Life in the Kingdom"
                  description="Fishing, bug catching, gathering, farming, townsfolk with quests of their own, and skills that level up."
                />
                <FeatureRow
                  feature="World Editor"
                  description="Place, move, resize, rotate, and lock any object, paint terrain, and export or import the whole world."
                />
                <FeatureRow
                  feature="Keyboard First"
                  description="Every button shows its key, so the planner works without the mouse."
                />
                <FeatureRow
                  feature="Sync"
                  description="The kingdom follows her between devices, and quests sync both ways with her Airtable base."
                />
                <FeatureRow
                  feature="Sound and Display"
                  description="8-bit music generated in the browser, weather and falling leaves, and an optional CRT look."
                />
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Architecture
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Queen&apos;s Quest is a React and TypeScript app with a
            hand-written Canvas 2D game loop. I stayed off a game engine on
            purpose. An engine would have given me tilemaps and particles, but
            the Quest Board, the Journal, and the modals are ordinary
            interface work, and React is much better at that. The world draws
            to a small 512-pixel-wide canvas that the browser scales up, which
            keeps the pixel art sharp and the drawing cheap.
          </p>
          <div className="mt-6 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700">
            <code className="block text-sm text-zinc-600 dark:text-zinc-400">
              React UI + Canvas game loop → localStorage →<br />
              Netlify Functions → Netlify Blobs, Airtable, Todoist
            </code>
          </div>
          <ul className="mt-6 space-y-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-3">
              <span className="text-amber-600">•</span>
              <span>
                The app is local-first. Everything reads and writes
                localStorage through one small module, which tells the sync
                layer when a synced key changes. Without a server it still
                runs, from the device&apos;s own copy.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600">•</span>
              <span>
                The server is a handful of Netlify Functions in front of a blob
                store. It keeps a revision number, and each device pushes what
                it changed and pulls what it missed when the window regains
                focus.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600">•</span>
              <span>
                Quests sync both ways with the Airtable base she already used.
                A quest without chapters is one record, a quest with chapters
                is one record per chapter, and each payout is linked to that
                day&apos;s summary so the base&apos;s totals still add up.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600">•</span>
              <span>
                The whole site sits behind a single passphrase, checked at the
                edge before any page loads. The Airtable and Todoist tokens
                stay on the server, and the build fails if one turns up in the
                bundle.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600">•</span>
              <span>
                A nightly job on my home server pulls a read-only copy of the
                kingdom and keeps a month of them. A restore script writes one
                back as a new revision.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600">•</span>
              <span>
                The renderer and the World Editor share one camera, so a click
                in Edit Mode lands on the same pixel the game drew.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Tech Stack
          </h2>
          <TechStack
            color="amber"
            items={['React', 'TypeScript', 'Vite', 'Canvas 2D', 'Web Audio', 'Netlify Functions', 'Netlify Blobs', 'Airtable API', 'Todoist API', 'Vitest']}
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Credits
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The pixel art is the{' '}
            <a
              href="https://kenmi-art.itch.io/cute-fantasy-rpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Cute Fantasy RPG
            </a>{' '}
            asset pack by Kenmi. The quests in these screenshots are samples.
            Queen&apos;s Quest is a private app, so there&apos;s no public
            link.
          </p>
        </section>
      </div>
    </Container>
  )
}
