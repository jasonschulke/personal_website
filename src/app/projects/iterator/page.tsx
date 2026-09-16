import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { ProjectDate } from '@/components/ProjectDate'
import { FeatureRow, Screenshot, TechStack } from '@/components/ProjectParts'

import deskImg from './iterator_desk.png'
import livePreviewGif from './iterator_live_preview.gif'
import tearOffGif from './iterator_tear_off.gif'
import yourEventsImg from './iterator_your_events.png'
import editFlyUpGif from './iterator_edit_fly_up.gif'
import mobileImg from './iterator_mobile.png'
import typeColorsGif from './iterator_type_colors.gif'
import dogearPeelGif from './iterator_dogear_peel.gif'
import fannedTilesImg from './iterator_v1_fanned_tiles.png'
import eventsExplorationsImg from './iterator_events_explorations.png'

export const metadata: Metadata = {
  title: 'iterator... - Birthday Calendar Events',
  description:
    'A fun skeuomorphic web tool that turns birthdays and anniversaries into yearly Google Calendar events, each with the age or year count right in the title.',
}

export default function Iterator() {
  return (
    <Container className="mt-9 sm:mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          iterator...
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A fun skeuomorphic web tool that turns birthdays and anniversaries
          into yearly Google Calendar events, each with the age or year count
          right in the title.
        </p>
        <p className="mt-4 text-base">
          <a
            href="/projects/iterator/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-700 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
          >
            Open the app →
          </a>
        </p>
        <ProjectDate slug="iterator" />
      </header>

      {/* Full width on phones: the app's type buttons need the whole screen width to fit. */}
      <div className="-mx-4 mt-12 sm:mx-0">
        <iframe
          src="/projects/iterator/index.html"
          className="w-full border-y border-zinc-200 sm:border dark:border-zinc-700"
          style={{ height: '85vh', minHeight: '600px' }}
          title="iterator..."
        />
      </div>

      <Screenshot
        src={deskImg}
        alt="The iterator desk calendar with an event filled in"
        caption="Filling in a birthday. The left page shows exactly what will land on the calendar."
      />

      <div className="mt-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Why I Built This
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Google Calendar will happily remind you that it&apos;s a
            friend&apos;s birthday but it won&apos;t tell you how old
            they&apos;re turning. A repeating event has one title for every
            year, so there&apos;s no way to get &ldquo;Alex&apos;s 37th
            Birthday&rdquo; this year and &ldquo;38th&rdquo; next year out of
            it.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            I looked for a Chrome extension or service that handled this and
            came up with a couple of Apps Script gists and not much else. So I
            built the version I wanted. You enter a name and a date, download
            one file, import it once, and every year has its own event with the
            number already in it.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            How It Works
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The calendar is the form. The right page is a ruled sheet with the
            name, type, month, day, year, reminder, and when to stop. The left
            page is a live preview of the first event it will create: the
            weekday, the date in big type, and the title filling in as you type.
          </p>
          <Screenshot
            src={livePreviewGif}
            alt="Typing a name and date while the calendar page fills in"
            caption="The title, weekday, and date update as you type."
            size="natural"
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            If you don&apos;t remember the birth year, you can flip the year
            field to an age instead. &ldquo;Mar 3, turns 15&rdquo; works out the
            rest.
          </p>

          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            When everything is filled in, the bottom corner of the page springs
            open. Peel it back to create the event, and the whole sheet tears
            off and drops down into your list.
          </p>
          <Screenshot
            src={tearOffGif}
            alt="A calendar page tearing off and shrinking into the event list"
            caption="The torn page on its way down to the pile."
            size="natural"
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Each person lands as a small torn page with a couple of older pages
            stacked behind it.
          </p>
          <Screenshot
            src={yourEventsImg}
            alt="Created events shown as a pile of torn calendar pages"
            caption="Your events, one torn page per person."
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Tap the pencil on any of them and the page flies back up to the
            calendar for editing.
          </p>
          <Screenshot
            src={editFlyUpGif}
            alt="A torn page flying back up to the calendar for editing"
            caption="Editing sends the page back where it came from."
            size="natural"
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            When you&apos;re done, download a single .ics file and import it
            into Google Calendar. Every event has a stable ID, so fixing a typo
            and re-importing updates the existing events instead of adding a
            second copy.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Features
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-400">
                    Feature
                  </th>
                  <th className="py-3 text-left text-xs font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-400">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <FeatureRow
                  feature="Age in the title"
                  description="One all-day event per year, titled “Alex's 37th Birthday”, “Our 12th Anniversary”, or “Running: 6th year”."
                />
                <FeatureRow
                  feature="Year or age"
                  description="Enter the birth year, or just the age they're turning, and it calculates the other."
                />
                <FeatureRow
                  feature="Live preview"
                  description="The left page shows the next occurrence, its weekday, and the full title while you type."
                />
                <FeatureRow
                  feature="Three types"
                  description="Birthday, anniversary, or other. The whole calendar recolors to match."
                />
                <FeatureRow
                  feature="Reminders"
                  description="Days or weeks before, baked into every event in the file."
                />
                <FeatureRow
                  feature="Safe re-imports"
                  description="Stable event IDs mean edits overwrite instead of duplicating."
                />
                <FeatureRow
                  feature="Tear-off animation"
                  description="Create tears the page off. Edit sends it back up."
                />
                <FeatureRow
                  feature="Works on a phone"
                  description="The calendar stacks vertically on small screens."
                />
              </tbody>
            </table>
          </div>
          <Screenshot
            src={mobileImg}
            alt="The calendar stacked vertically on a phone"
            caption="On a phone, the date page sits above the form."
            size="phone"
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Design
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            This is admittedly an overbuilt weekend project; a simple form with
            three fields and a download button would have done the job. Instead
            there&apos;s a spiral-bound desk calendar with wire rings that loop
            over the top edge, a dog-eared corner that peels back to reveal
            &ldquo;create,&rdquo; and pages that tear off and fall into a pile.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            It&apos;s a pretty direct nod to the skeuomorphic web and app design
            I grew up with, when interfaces looked like the objects they
            replaced: leather-stitched calendars, notepads with torn edges,
            felt-covered game tables. That style fell out of fashion for good
            reasons, but for a tool whose whole job is &ldquo;one calendar page
            per year,&rdquo; it felt right to make it an actual calendar page.
          </p>
          <Screenshot
            src={typeColorsGif}
            alt="The calendar switching between birthday red, anniversary mustard, and slate for other"
            caption="Each event type gets its own color, from the wordmark down to the ruled lines."
            size="natural"
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The palette is warm and a little retro: red for birthdays, mustard
            for anniversaries, and slate for everything else, all on cream
            paper. The wordmark is set in Rubik 80s Fade next to a halftone
            calendar icon I drew to match its texture. The big dates use Anton,
            and everything else is Lilex. The dog-eared corner went through a
            round red button first, until it became obvious that the paper
            behind a page wouldn&apos;t be red.
          </p>
          <Screenshot
            src={dogearPeelGif}
            alt="The dog-eared create corner peeling back on hover"
            caption="The create button, peeling back."
            size="natural"
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            How It Got Here
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            It didn&apos;t start as a calendar. The first version was a plain
            text box, then a table, then a grid of fanned event cards with a
            pop-up editor. Each one worked fine and felt like every other form
            on the internet.
          </p>
          <Screenshot
            src={fannedTilesImg}
            alt="An earlier version with fanned event cards in a grid"
            caption="An earlier version, with fanned event cards and a three-step download flow."
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The desk calendar started as a &ldquo;just for fun&rdquo; mockup,
            and it was immediately more obvious what the tool did. Most of the
            work after that was deciding where things belonged on a physical
            object: which page holds the inputs, what the torn pages should look
            like once they pile up, and how much color the paper could take.
          </p>
          <Screenshot
            src={eventsExplorationsImg}
            alt="Explorations for how created events should look under the calendar"
            caption="A few directions for the event list: torn pages, a corkboard, a ledger, and restyled fans."
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Tech Stack
          </h2>
          <TechStack
            color="orange"
            items={['HTML', 'CSS', 'JavaScript', 'Web Animations API', 'iCalendar (.ics)', 'localStorage', 'Google Fonts']}
          />
        </section>
      </div>
    </Container>
  )
}
