import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { ProjectDate } from '@/components/ProjectDate'
import { FeatureRow, Screenshot, TechStack } from '@/components/ProjectParts'

import heroImage from './max_hero.jpg'
import iconImage from './max_icon.png'
import dockSettingsImage from './max_settings_dock.png'
import appearanceSettingsImage from './max_settings_appearance.png'
import dockItemsImage from './max_settings_items.png'
import windowsSettingsImage from './max_settings_windows.png'

export const metadata: Metadata = {
  title: 'Max - A Full-Width Dock for macOS',
  description:
    "A macOS menu bar app that turns the Dock into a full-width bar by drawing over Apple's Dock, which keeps handling every click, menu, and drag underneath.",
}

export default function Max() {
  return (
    <Container className="mt-9 sm:mt-16">
      <header className="max-w-2xl">
        <Image src={iconImage} alt="Max's app icon" className="h-20 w-20" priority />
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Max
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A macOS menu bar app that turns the Dock into one bar across the full
          width of the screen, like the Windows taskbar. It covers Apple&apos;s
          floating Dock and redraws its icons edge to edge, while the real Dock
          keeps doing all the work underneath. Its settings cover the
          Dock&apos;s size and look, which display it stays on, how it&apos;s
          arranged, and even the corners of every window.
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
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Settings
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Settings has a tab for each part of Max. The Dock tab sizes things
            three ways: <em>Dock size</em> resizes Apple&apos;s Dock itself, so
            windows still stop above it; <em>Icon size</em> scales the icons Max
            draws without changing their spacing; and <em>Extra height</em> makes
            the bar taller than the Dock while keeping the icons centered. It also
            brings back details a cover would otherwise hide: icons hop while
            their app launches, Calendar shows today&apos;s date, and the Trash
            looks full when it is. Running dots and badges can each be switched
            off, and the Dock can be kept on one display.
          </p>
          <Screenshot
            src={dockSettingsImage}
            alt="The Dock tab: drawing over the Dock, Dock size, icon size, extra height, icon details, and display"
            caption="The Dock tab."
            size="medium"
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Appearance picks the bar&apos;s material (Liquid Glass, Clear Glass,
            Blur, or Solid), its color, and its corners, with a small live
            preview at the top.
          </p>
          <Screenshot
            src={appearanceSettingsImage}
            alt="The Appearance tab with a preview of the bar and the material options"
            caption="Appearance, with a preview of the bar."
            size="medium"
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Dock Items is the editor: a miniature of the whole Dock on top, the
            items below to drag into place, and Save to apply. Arrangements can
            be saved as profiles, like one for work and one for home, and
            switched from here or from the menu bar.
          </p>
          <Screenshot
            src={dockItemsImage}
            alt="The Dock Items tab with a miniature of the Dock above the list of apps and spacers"
            caption="Dock Items: the miniature on top, the list to rearrange below."
            size="medium"
          />

          <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Windows sets the corner radius of every app&apos;s windows, down to
            square, with exceptions for apps that should keep their own.
          </p>
          <Screenshot
            src={windowsSettingsImage}
            alt="The Windows tab with square window corners and two per-app exceptions"
            caption="Window corners, with per-app exceptions."
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
                  feature="Live Details"
                  description="Launch bounces, today's date on Calendar, and a full Trash, plus running dots and badges that can each be turned off."
                />
                <FeatureRow
                  feature="Size"
                  description="Resize the Dock itself, scale the icons Max draws, or make the bar taller with the icons kept centered."
                />
                <FeatureRow
                  feature="Dock Editor"
                  description="Reorder, add, and remove apps, folders, and spacers, save arrangements as profiles, and keep a backup of your original Dock."
                />
                <FeatureRow
                  feature="Appearance"
                  description="Liquid Glass, Clear Glass, Blur, or Solid, with a flat or fading color, opacity, and corner radius, and a live preview."
                />
                <FeatureRow
                  feature="Window Corners"
                  description="Sets the corner radius of every app's windows, down to square, with per-app exceptions, and relaunches open apps to apply it."
                />
                <FeatureRow
                  feature="Multi-Display"
                  description="The bar follows the Dock between displays, and the Dock can be kept on one of them."
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
            I also wanted square window corners, since the little wedges of
            wallpaper between tiled windows bother me. macOS has no setting for
            it, and each app draws its own corners, so at first it looked like
            the only real fix meant disabling System Integrity Protection and
            injecting code into every app. A prototype that painted over the
            corners with a flat color looked rough against both light and dark
            windows, so I dropped it.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Then a search turned up an AI-generated answer pointing at a hidden
            AppKit preference, <code>NSConvolutionOverride1</code>. It
            looked made up, but the name turned out to be in macOS, right next
            to the code that sets a window&apos;s corner radius. Testing it
            showed AppKit reads it as the radius for every window: any positive
            value works, zero is ignored, and 0.01 is square. Apps pick it up
            when they relaunch, with no System Integrity Protection changes or
            code injection. Max now has a setting for it, with exceptions for
            apps that should keep their rounded corners.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Covering the Dock also covered what makes it feel alive, so the
            latest round brought that back: the launch bounce, Calendar&apos;s
            date, and the full Trash. The app got a new icon too, picked from
            thirty drawn variations: a dark desktop with two square-cornered
            windows tiled flush above a full-width bar, its app tiles in the
            desktop&apos;s own violets.
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
                Keeping the Dock on one display uses an event tap that stops the
                pointer just short of the other displays&apos; Dock edges, where
                pushing would move the Dock
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
            items={['Swift 6', 'AppKit', 'SwiftUI', 'Observation', 'Accessibility API', 'Core Graphics event taps', 'Liquid Glass', 'ServiceManagement']}
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
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Keep the Dock on:</span>
                <span>Your main display</span>
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
              <li className="flex justify-between gap-4">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Window corners:</span>
                <span>Square</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            Max needs macOS 26 or later, and Accessibility access to draw over
            the Dock. Without it, the bar sits behind the Dock instead. The full
            Trash icon also needs Full Disk Access. Minimized-window thumbnails
            and apps&apos; own live Dock tiles stay hidden under the bar.
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
