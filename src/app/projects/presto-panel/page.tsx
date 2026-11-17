import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { ProjectDate } from '@/components/ProjectDate'
import { FeatureRow, Screenshot, TechStack } from '@/components/ProjectParts'

import coverImage from './presto_cover.png'
import screensImage from './presto_screens.png'
import pagesImage from './presto_pages.png'

export const metadata: Metadata = {
  title: 'Presto Panel - A Dot-Matrix Sonos Controller',
  description:
    'A touchscreen Sonos controller for my turntable, built on a Pimoroni Presto and drawn entirely in dots.',
}

export default function PrestoPanel() {
  return (
    <Container className="mt-9 sm:mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Presto Panel
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A small touchscreen that controls the Sonos speakers my turntable plays through. It runs on a Pimoroni Presto, talks to Home Assistant, and draws everything in dots: the clock, the volume ring, the album art, and a spinning record.
        </p>
        <ProjectDate slug="presto-panel" />
      </header>

      <Screenshot
        src={coverImage}
        alt="Three Presto screens side by side: a volume ring reading 42, a spinning record drawn in dots, and album art for Harvest Moon by Neil Young"
        caption="Volume, the record, and now playing. These are renders from the simulator."
      />

      <div className="mt-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Why I Built This
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The first version of this was a rotary knob: an Elecrow CrowPanel running ESPHome that controlled the turntable&apos;s speaker and the TV speakers as one group. It worked well enough that I wanted a bigger one. The Presto is a 4-inch, 480 by 480 touchscreen on an RP2350, so I ported the same screens to it, with touch in place of the dial.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The port is MicroPython, not ESPHome. It uses the same Home Assistant scripts and helpers as the knob, so the two stay in step.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            How It Works
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            At rest it shows a clock. A tap joins all the rooms and starts playing. While music plays, a tap mutes, and dragging along the ring sets the volume, one dot for every 2%, capped at 75 so nobody can blast the house. After a few seconds without a touch it rests on the record, or on the album art when something is streaming.
          </p>
          <Screenshot
            src={screensImage}
            alt="A grid of the Presto screens: clock, per-room volume bars, joining, no answer, volume, the record, muted, offline, TV speakers only, and now playing with album art"
            caption="The panel's screens, rendered by the simulator."
          />
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Swiping moves between three pages. Rooms has a bar for each room, to set one room&apos;s volume without touching the group. Settings shows the Wi-Fi signal, the Home Assistant link, and uptime, and holds the update button.
          </p>
          <Screenshot
            src={pagesImage}
            alt="Two pages side by side: the panel's clock and the Rooms page with a volume bar for each room"
            caption="The Panel and Rooms pages."
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Drawing in Dots
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Everything on screen is made of dots. The type is Doto, a dot-matrix font, converted ahead of time into grids the firmware can stamp out. Album art is downloaded, decoded, and reduced to a 40 by 40 grid of dots. The record is drawn the same way and turns at 15 frames a second.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The LEDs on the back follow the colour of the ring, and a piezo ticks once per dot while dragging, which makes the touchscreen feel a little like the knob it replaced.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Updating Over Wi-Fi
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The Presto can live anywhere in the house, so it updates itself over Wi-Fi. A publish script copies the firmware to Home Assistant, and tapping Update on the Settings page compares every file against a manifest.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The catch is that the flash can&apos;t be written while the display is running, because the flash and the frame buffer share a bus. So the app only asks for an update, then restarts into a quiet updater that runs before the display starts. The screen stays dark for about 15 seconds while the files are written. If anything fails, the old files stay in place and it boots normally.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A simulator renders every screen to a PNG on my Mac with a fake display, which is how I check a layout change without flashing the board. The images on this page come from it.
          </p>
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
                  feature="Touch control"
                  description="Tap to join, mute, or wake. Drag the ring for volume. Hold for play and pause on the TV screens."
                />
                <FeatureRow
                  feature="Volume cap"
                  description="The ring never goes past 75."
                />
                <FeatureRow
                  feature="Rooms"
                  description="A bar for each room, to set one without changing the group."
                />
                <FeatureRow
                  feature="Album art"
                  description="The cover, reduced to a 40 by 40 grid of dots."
                />
                <FeatureRow
                  feature="Record view"
                  description="A spinning record drawn in dots when vinyl is playing."
                />
                <FeatureRow
                  feature="Over-the-air updates"
                  description="From Home Assistant, with a safe fallback if an update fails."
                />
                <FeatureRow
                  feature="Simulator"
                  description="Renders every screen to PNG on a Mac."
                />
                <FeatureRow
                  feature="Offline states"
                  description="Clear screens for no answer and a lost connection, with a tap to retry."
                />
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Tech Stack
          </h2>
          <TechStack
            color="orange"
            items={['Pimoroni Presto', 'RP2350', 'MicroPython', 'Home Assistant', 'WebSocket API', 'Sonos']}
          />
        </section>
      </div>
    </Container>
  )
}
