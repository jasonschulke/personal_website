import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { ProjectDate } from '@/components/ProjectDate'
import { FeatureRow, Screenshot, TechStack } from '@/components/ProjectParts'

import heroImage from './max_hero.jpg'
import settingsImage from './max_settings.png'

export const metadata: Metadata = {
  title: 'Max - A Full-Width Dock for macOS',
  description:
    "A macOS menu bar app that turns the Dock into a full-width bar by drawing over Apple's Dock, which keeps handling every click, menu, and drag underneath.",
}

export default function Max() {
  return (
    <Container className="mt-9 sm:mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Max
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A macOS menu bar app that turns the Dock into one bar across the full
          width of the screen, like the Windows taskbar. It covers Apple&apos;s
          floating Dock and redraws its icons edge to edge, while the real Dock
          keeps doing all the work underneath.
        </p>
        <p className="mt-4 text-base">
          <Link
            href="https://github.com/jasonschulke/max"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View on GitHub →
          </Link>
        </p>
        <ProjectDate slug="max" />
      </header>

      <div className="mt-12">
        <Image
          src={heroImage}
          alt="A MacBook with Max's full-width bar across the bottom of the screen"
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
            The macOS Dock floats as a rounded pill in the middle of the bottom
            edge. I wanted the Windows taskbar instead: one bar that runs the
            full width of the screen. macOS has no setting for that, and
            changing how the Dock itself looks means turning off System
            Integrity Protection, which I wasn&apos;t willing to do on a machine
            I use every day.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The first version of Max drew a blurred strip behind the Dock. It got
            close, but the Dock&apos;s own pill always sat on top of it. In
            November 2026 I rewrote Max from scratch for macOS 26 and Liquid
            Glass, and kept going until the pill was gone.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            How It Works
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Max lays a solid bar over the Dock&apos;s strip of the screen, one
            window level above the Dock, and draws the Dock&apos;s icons on it
            exactly where the Dock draws them: same size, same spacing, with the
            running indicators and notification badges. The bar ignores the
            mouse, so every click, right-click menu, hover label, folder stack,
            and drag still goes to the real Dock underneath.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            To know where each icon goes, Max reads the Dock through the
            Accessibility API, the same interface screen readers use. The Dock
            reports every item&apos;s position, size, app, running state, and
            badge. Max reads it again whenever an app launches or quits, the
            Dock&apos;s settings change, or a display is connected, a few more
            times while the Dock&apos;s layout animation settles, and every two
            seconds to catch new badges. It only reads; it never clicks or types
            for you.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The real Dock stays on screen on purpose. As long as it&apos;s
            there, macOS keeps the bottom strip free, so maximized and tiled
            windows stop above the bar instead of sliding under it. When you
            drag an icon to reorder it, or drag files onto the Dock, the bar
            fades out so you can see the Dock&apos;s own drag feedback, then
            comes back when you let go.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Since the bar covers the Dock, Max also has an editor for the
            Dock&apos;s items. You can drag apps into a new order, add apps,
            folders, and spacers, and remove what you don&apos;t want. Applying
            writes the changes to the Dock&apos;s own preferences and restarts
            it, and the first edit saves a backup of your original Dock that you
            can restore.
          </p>
          <Screenshot
            src={settingsImage}
            alt="Max's settings with Draw over the Dock turned on and the Dock items editor button"
            caption="Draw over the Dock, the Dock item editor, and the bar's material."
            size="medium"
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
                  <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                    Feature
                  </th>
                  <th className="py-3 text-left text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <FeatureRow
                  feature="Full-Width Dock"
                  description="Covers Apple's floating Dock with an edge-to-edge bar and redraws its icons, running indicators, and badges in place."
                />
                <FeatureRow
                  feature="Native Behavior"
                  description="Clicks, menus, labels, folder stacks, and drags all go to the real Dock underneath."
                />
                <FeatureRow
                  feature="Follows the Dock"
                  description="Updates when apps launch or quit, items move, the Dock's settings change, or the Dock restarts."
                />
                <FeatureRow
                  feature="Dock Editor"
                  description="Reorder, add, and remove apps, folders, and spacers, with a backup of your original Dock."
                />
                <FeatureRow
                  feature="Appearance"
                  description="Liquid Glass, Clear Glass, or blur, with a flat or fading tint that colors the bar, plus opacity and corner radius."
                />
                <FeatureRow
                  feature="Multi-Display"
                  description="The bar follows the Dock to whichever display it's on, without spilling onto the one next to it."
                />
                <FeatureRow
                  feature="Auto-Hide"
                  description="Slides in and out with an auto-hiding Dock, using the Dock's own reveal delay."
                />
                <FeatureRow
                  feature="Menu Bar App"
                  description="⌃⌥⌘M toggles the bar from anywhere, and Max can launch at login."
                />
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            How It Got Here
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Getting rid of the pill took several tries. The rewrite started where
            the first version left off: a Liquid Glass strip one level below the
            Dock, sized to the strip macOS reserves for it. It looked right
            everywhere except the middle, where the Dock&apos;s glass pill still
            sat on top.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Next I tried coloring the bar so the pill would disappear into it. A
            calibration script measured the pill against different bar colors,
            and showed it couldn&apos;t work: the Dock&apos;s glass is shaded
            from top to bottom and has bright one-point edge highlights, so no
            single color hides it. Turning on Reduce Transparency made the pill
            more obvious, not less.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Then Max drew its own Dock above Apple&apos;s, with its own clicks,
            menus, drag-to-reorder, and file drops. It looked great until you
            hovered an icon. Apple&apos;s Dock tracks the pointer even with
            something on top of it, so every app showed two name labels. Hiding
            the Dock entirely would have fixed that, but macOS stops reserving
            space for a hidden Dock, and windows would run under the bar.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The version that stuck flips the relationship. Apple&apos;s Dock
            does everything, and Max only paints over it, using the Dock&apos;s
            own description of where each icon is.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            I also looked at squaring off the rounded corners of every window,
            since the little wedges of wallpaper between tiled windows bother
            me. macOS has no setting for it; each app draws its own corners, so
            a real fix means disabling System Integrity Protection and injecting
            code into every app. A prototype that painted over the corners with
            a flat color looked rough against both light and dark windows, so it
            didn&apos;t ship. Turning off &ldquo;Tiled windows have
            margins&rdquo; in Desktop &amp; Dock settings closes most of the gap
            on its own.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Architecture
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Max is a Swift 6 app built around one observable settings store. An
            overlay controller watches the settings, the Dock&apos;s geometry,
            and the Dock&apos;s items through Swift&apos;s Observation
            framework, and applies each change to a single borderless window.
          </p>
          <div className="mt-6 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700">
            <code className="block text-sm text-zinc-600 dark:text-zinc-400">
              Settings + Dock geometry + Dock items (Accessibility) →<br />
              Overlay controller → bar window (material + Dock icons)
            </code>
          </div>
          <ul className="mt-6 space-y-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-3">
              <span className="text-indigo-500">•</span>
              <span>
                The Dock&apos;s strip comes from the gap between a display&apos;s
                frame and its visible frame, which also tells Max which display
                the Dock is on
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-500">•</span>
              <span>
                Dock items are read from the Dock&apos;s Accessibility tree, one
                request per item, and redrawn only when something changes
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-500">•</span>
              <span>
                The Dock editor rewrites <code>persistent-apps</code> and{' '}
                <code>persistent-others</code> in <code>com.apple.dock</code>,
                keeping the Dock&apos;s own entries intact
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-500">•</span>
              <span>
                The geometry and Dock parsing are pure functions with their own
                tests, and the whole app builds and tests with just the Command
                Line Tools, no Xcode required
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Tech Stack
          </h2>
          <TechStack
            color="indigo"
            items={['Swift 6', 'AppKit', 'SwiftUI', 'Observation', 'Accessibility API', 'Liquid Glass', 'ServiceManagement']}
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Recommended Setup
          </h2>
          <div className="mt-6 rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-800">
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex justify-between gap-4">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Draw over the Dock:</span>
                <span>On</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Dock auto-hide:</span>
                <span>Off, so windows stay above the bar</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Bar color:</span>
                <span>Tint at 100%</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Tiled windows have margins:</span>
                <span>Off</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            Max needs macOS 26 or later, and Accessibility access to draw over
            the Dock. Without it, the bar sits behind the Dock instead. Live Dock
            tiles, like Calendar&apos;s date or minimized-window thumbnails, stay
            hidden under the bar.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Links
          </h2>
          <div className="mt-6 flex gap-4">
            <Link
              href="https://github.com/jasonschulke/max"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              View on GitHub
            </Link>
          </div>
        </section>
      </div>
    </Container>
  )
}
