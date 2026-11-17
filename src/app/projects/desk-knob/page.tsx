import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { ProjectDate } from '@/components/ProjectDate'
import { FeatureRow, Screenshot, TechStack } from '@/components/ProjectParts'

import coverImage from './desk_knob_cover.jpg'
import screensImage from './desk_knob_screens.png'
import flowImage from './desk_knob_flow.png'

export const metadata: Metadata = {
  title: 'Desk Knob - A Volume Knob for My Mac',
  description:
    "A rotary display on my desk that controls my Mac's volume, mic, and media, and lets me answer Claude Code's permission requests.",
}

export default function DeskKnob() {
  return (
    <Container className="mt-9 sm:mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Desk Knob
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A small rotary display on my desk that controls my Mac mini: volume, mute, the mic, audio output, and whatever is playing. It&apos;s an ESP32-S3 rotary knob with a round 2.1-inch touchscreen, the Elecrow CrowPanel, running ESPHome, and it reaches the Mac through Home Assistant.
        </p>
        <ProjectDate slug="desk-knob" />
      </header>

      <Screenshot
        src={coverImage}
        alt="The desk knob on its stand: a round touchscreen inside a black dial, showing four tiles for Mic, Output, Focus, and Lock"
        caption="The knob on my desk, showing the Desk page."
      />

      <div className="mt-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Why I Built This
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            I wanted a real knob for volume, and a mute button for the mic that I could hit without finding the right window first. The firmware started life as my turntable knob, a Sonos controller on the same hardware, and I rebuilt the screens around the Mac.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            How It Reaches the Mac
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The knob only ever talks to Home Assistant. On the Mac, a Hammerspoon script does the rest. It runs a small local server that Home Assistant calls to change things, and whenever the volume, mute, output device, mic, or playing track changes, it posts the new state back to Home Assistant, which the knob subscribes to.
          </p>
          <Screenshot
            src={flowImage}
            alt="A diagram of the chain: desk knob, Home Assistant, Hammerspoon, and the Mac mini, with arrows in both directions"
            caption="Everything goes through Home Assistant, in both directions."
          />
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Going through Home Assistant means the knob needs no software of its own on the Mac beyond that one script, and the Mac&apos;s audio state is available to the rest of the house too.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Pages and Gestures
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Turning the dial changes the volume, and so does dragging the arc on the screen. A tap in the centre mutes, and a hold plays or pauses. A piezo gives a small tock on each step of the dial.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Swiping moves between pages. Desk is home, with tiles for the mic, the audio output, Focus, and locking the Mac. Now playing shows the track and its cover, which Hammerspoon serves already shrunk to fit. Clock is a clock. When the Mac is asleep, the knob says so.
          </p>
          <Screenshot
            src={screensImage}
            alt="Four round screens: a volume arc reading 42, a now playing screen with track buttons, a Claude session screen reading 36, and a permission request with Deny and Allow buttons"
            caption="Four more screens, drawn from the firmware's layout, fonts, and colours. These are illustrations, not photos."
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            The Mic Tile
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Muting the mic at the system level isn&apos;t enough on a call, because the meeting app still shows you as unmuted. So the Mic tile also presses the app&apos;s own mute shortcut in Teams, Zoom, or Meet. Each app only takes its shortcut when it&apos;s in front, so the script brings it forward for a moment and hands focus back. If focus moves before the keystroke goes out, the keystroke is dropped rather than sent to the wrong window.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Some mics, my webcam among them, have no mute control at all. For those, muted means the input level is set to zero.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            The Claude Page
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A fourth page is for Claude Code. It shows how much of the current session&apos;s usage is gone and when it resets. When Claude Code asks for permission to run something, the request shows up on the knob with what it wants to do, and I can allow or deny it from there. Those routes need a secret token, so nothing else on the network can answer for me.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Small Details
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The printed stand holds the knob about 2.5 degrees askew, so there&apos;s a one-time tilt setting that rotates the picture to match. Text is about one and a half times the size of the first version, for reading at arm&apos;s length. Amber means volume and playback, purple means output and Do Not Disturb, and soft red means the mic is muted.
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
                  feature="Volume"
                  description="Turn the dial or drag the arc. Tap the centre to mute."
                />
                <FeatureRow
                  feature="Mic mute"
                  description="Mutes the mic and presses mute in Teams, Zoom, or Meet."
                />
                <FeatureRow
                  feature="Output picker"
                  description="Switch the Mac's audio output from the knob."
                />
                <FeatureRow
                  feature="Now playing"
                  description="Track, artist, and cover, with track buttons."
                />
                <FeatureRow
                  feature="Focus and lock"
                  description="Tiles to turn on a work Focus and to lock the Mac."
                />
                <FeatureRow
                  feature="Claude page"
                  description="Session usage, and allow or deny for permission requests."
                />
                <FeatureRow
                  feature="Screen tilt"
                  description="A calibration setting for a stand that sits slightly askew."
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
            color="amber"
            items={['ESP32-S3', 'Elecrow CrowPanel 2.1"', 'ESPHome', 'LVGL', 'Home Assistant', 'Hammerspoon', 'Lua']}
          />
        </section>
      </div>
    </Container>
  )
}
