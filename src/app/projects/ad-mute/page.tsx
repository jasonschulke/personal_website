import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { ProjectDate } from '@/components/ProjectDate'
import { Screenshot, TechStack } from '@/components/ProjectParts'

import heroImage from './ad_mute_hero.png'

export const metadata: Metadata = {
  title: 'Ad Mute - Muting Disney+ Ads with Home Assistant',
  description:
    'A Home Assistant automation that mutes the TV during Disney+ ad breaks by watching how the playback position behaves.',
}

const REDDIT_POST =
  'https://www.reddit.com/r/homeassistant/comments/1xb1whg/mute_ads_on_android_tv/'

const automationYaml = `alias: Disney+ ad mute
mode: single
max_exceeded: silent
triggers:
  - trigger: state
    entity_id: media_player.smart_tv
    attribute: media_position_updated_at
conditions:
  - condition: state
    entity_id: media_player.smart_tv
    state: playing
  - condition: state
    entity_id: media_player.smart_tv
    attribute: app_name
    state: Disney+
actions:
  - if:
      - condition: template
        value_template: >-
          {% set delta = (trigger.to_state.attributes.media_position | float(0))
                       - (trigger.from_state.attributes.media_position | float(0)) %}
          {{ (delta | abs) < 0.25 }}
    then:
      - if:
          - condition: state
            entity_id: media_player.smart_tv
            attribute: is_volume_muted
            state: false
        then:
          - action: media_player.volume_mute
            target:
              entity_id: media_player.smart_tv
            data:
              is_volume_muted: true
    else:
      - if:
          - condition: state
            entity_id: media_player.smart_tv
            attribute: is_volume_muted
            state: true
        then:
          - action: media_player.volume_mute
            target:
              entity_id: media_player.smart_tv
            data:
              is_volume_muted: false`

export default function AdMute() {
  return (
    <Container className="mt-9 sm:mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Ad Mute
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A Home Assistant automation that mutes my TV when a Disney+ ad
          starts and unmutes it when the show comes back. Nothing tells Home
          Assistant that an ad is playing, so it works that out from how the
          playback position behaves.
        </p>
        <ProjectDate slug="ad-mute" />
      </header>

      <Screenshot
        src={heroImage}
        alt="A diagram of playback position over time: it climbs during the show, stays flat through the ad break, and climbs again afterwards"
        caption="An illustration of the signal, not recorded data: the position climbs during the show and stops during an ad."
      />

      <div className="mt-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Why I Built This
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            I wanted the TV to mute itself when ads come on. The trouble was
            that I couldn&apos;t find anything in Home Assistant that says an
            ad is playing. The media player reports the app, the title, and
            whether it&apos;s playing or paused, and none of that changes
            during an ad break.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            The Signal
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            What I did notice is that the{' '}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-700">
              media_position
            </code>{' '}
            attribute behaves differently during a show than during an ad.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <li>
              During a show, the Cast integration reports a new position
              about twice a second, each one half a second further along.
            </li>
            <li>
              During an ad, it sits at nearly the same number for the whole
              break, only changing by a few thousandths of a second.
            </li>
            <li>When the show comes back, it starts counting again.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            How It Works
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The automation fires on every position report and compares it to
            the last one. If the two are within 0.25 seconds of each other,
            it mutes. Otherwise it unmutes. It only sends the command when
            the mute state would change, so that&apos;s one mute at the start
            of the break and one unmute at the end. It&apos;s been working
            really well so far.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            This is on a TCL Google TV through the Cast integration. The
            signal comes from the app, not the TV, so any Cast device running
            Disney+ should behave the same. I haven&apos;t tested other
            streaming services yet.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            The Automation
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            To use it, swap{' '}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-700">
              media_player.smart_tv
            </code>{' '}
            for your own entity ID.
          </p>
          <pre className="mt-6 overflow-x-auto rounded-2xl bg-zinc-900 p-6 text-sm leading-6 text-zinc-100 dark:bg-zinc-800">
            <code className="font-mono">{automationYaml}</code>
          </pre>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            I shared this on{' '}
            <a
              href={REDDIT_POST}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              r/homeassistant
            </a>
            . If you try it with another service, I&apos;d like to hear how
            it goes.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Tech Stack
          </h2>
          <TechStack
            color="indigo"
            items={['Home Assistant', 'Cast integration', 'YAML', 'Jinja templates', 'Google TV']}
          />
        </section>
      </div>
    </Container>
  )
}
