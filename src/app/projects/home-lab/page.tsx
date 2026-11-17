import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { ProjectDate } from '@/components/ProjectDate'
import { FeatureRow, Screenshot, TechStack } from '@/components/ProjectParts'

import dashboardImage from './home_lab_dashboard.jpg'
import networkImage from './home_lab_network.jpg'
import retroImage from './home_lab_retro.jpg'

export const metadata: Metadata = {
  title: 'Home Lab Dashboard - One Page for the Whole Server',
  description:
    'A custom dashboard for my home server: a health score, what needs attention, every service and device, and a map of the network.',
}

export default function HomeLab() {
  return (
    <Container className="mt-9 sm:mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Home Lab Dashboard
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A dashboard for the server in my house. It started as a stock Homepage install and grew into its own thing: a single health score, a short list of what needs attention, every service and device, and a map of the network.
        </p>
        <ProjectDate slug="home-lab" />
      </header>

      <Screenshot
        src={dashboardImage}
        alt="The Home Lab dashboard: a health score of 95 with a day of history, summary tiles for containers, storage, backups and smart home devices, a grid of services, and a side rail listing what needs attention and recent activity"
        caption="The dashboard: one score, a summary, and what needs a look."
      />

      <div className="mt-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Why I Built This
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            My home lab is an old Acer laptop running Proxmox, with a couple of dozen containers on it: photo backup, DNS, Home Assistant, and the small servers behind my other projects. Each one has its own status page. What I wanted was one page that answers a single question: is everything okay, and if not, what should I look at?
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Homepage, the open source dashboard, got me a grid of tiles quickly. The rest is custom: about 1,900 lines of JavaScript and as much CSS layered on top of it, fed by a small service on the server I call the scorekeeper.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            One Score
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The scorekeeper rolls everything up into a health score out of 100 and keeps a day of history, so a dip overnight is still visible in the morning. Under the score, a summary strip covers the four things I check most: how many containers are running, how full the storage drive is, when the backups last ran, and how many smart home devices are online.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The rail on the right is the part I use most. Needs attention lists the things that are wrong right now in plain words, and each item can be dismissed until it changes. Activity is a running log of the last week: a backup finished, a container stopped, the server restarted.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Services and Devices
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Each service is a compact tile with its state and response time, which comes from Uptime Kuma. Clicking a tile opens a popup with details, a short description of what the service is for, and a troubleshooting write-up, so I don&apos;t have to remember how I set something up a year ago.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A devices table lists everything on the network with an owner: me, my partner, or shared. The avatar in the header switches between three profiles. Shared hides the server internals, so the dashboard is still useful to someone who only wants to know whether the photos backed up.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            The Network Map
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A second page draws the network as a map: the router and switches in the middle, and rings for computers, phones, screens, and the servers. Picking something on a ring shows what&apos;s connected to it.
          </p>
          <Screenshot
            src={networkImage}
            alt="The network map: the router, DNS, powerline adapters and switch in the centre, with groups of computers, phones, gadgets and servers arranged in a ring around them"
            caption="The network map."
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Two Themes
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            There are two skins. Classic is the default. Retro swaps in serif type, square corners and hard outlines, and has its own startup screen. The choice is remembered per browser.
          </p>
          <Screenshot
            src={retroImage}
            alt="The same dashboard in the Retro theme, with serif headings, square tiles and outlined panels"
            caption="The Retro theme."
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
                  feature="Health score"
                  description="One number out of 100 with a day of history."
                />
                <FeatureRow
                  feature="Needs attention"
                  description="What's wrong right now in plain words, dismissable until it changes."
                />
                <FeatureRow
                  feature="Activity log"
                  description="A week of backups, restarts, and containers stopping and starting."
                />
                <FeatureRow
                  feature="Service tiles"
                  description="State and response time, with a details popup and troubleshooting notes for each."
                />
                <FeatureRow
                  feature="Devices"
                  description="Everything on the network, with an owner for each device."
                />
                <FeatureRow
                  feature="Profiles"
                  description="Shared, mine, and my partner's, switched from the header."
                />
                <FeatureRow
                  feature="Network map"
                  description="A second page that draws the network and what's connected to what."
                />
                <FeatureRow
                  feature="Themes"
                  description="Classic and Retro, each in light and dark."
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
            color="indigo"
            items={['Homepage', 'JavaScript', 'CSS', 'Proxmox', 'Uptime Kuma', 'Beszel', 'Home Assistant']}
          />
        </section>
      </div>
    </Container>
  )
}
