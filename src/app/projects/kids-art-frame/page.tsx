import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { ProjectDate } from '@/components/ProjectDate'
import { FeatureRow, Screenshot, TechStack } from '@/components/ProjectParts'

import coverImage from './kids_art_frame_cover.jpg'
import flowImage from './kids_art_frame_hero.png'
import homeImage from './frame_home.jpg'
import nextImage from './frame_next.jpg'
import whoImage from './frame_who.png'
import captureImage from './frame_capture.png'

export const metadata: Metadata = {
  title: "Kids' Art Frame - A Color E-Paper Frame for Kids' Art",
  description:
    "A 13.3-inch color e-paper frame that shows my kids' art. A photo from my phone is straightened, filed, captioned, and on the wall within minutes.",
}

export default function KidsArtFrame() {
  return (
    <Container className="mt-9 sm:mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Kids&apos; Art Frame
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A 13.3-inch color e-paper frame that shows my kids&apos; art, fed by
          a small server on my home lab. I take a photo of a new piece with my
          phone, the server finds the paper and straightens it, and the frame
          picks it up on its own.
        </p>
        <ProjectDate slug="kids-art-frame" />
      </header>

      <Screenshot
        src={coverImage}
        alt="Three screens of the phone page: a preview of the frame showing a painting, a grid for choosing the next piece, and the camera screen for adding art"
        caption="The phone page: what the frame is showing, what's next, and adding a new piece."
      />

      <div className="mt-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Why I Built This
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            I wanted a frame on the wall that shows the kids&apos; art and
            changes through the day, and I wanted adding a new piece to take
            about as long as taking a photo. I also wanted a proper archive of
            the originals, not just a slideshow.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The first version used the flatbed scanner on our printer. The
            scans looked great, but walking every painting to the scanner was
            never going to last. I tried the document scanner built into the
            iPhone next, and it shrank a page to about 1261 by 1745 pixels,
            roughly a quarter of the detail of the flatbed. A normal phone
            photo keeps far more, so I built the capture around that and
            removed the scanner pieces entirely.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Adding Art
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The server hosts a small page I open on my phone. I pick which kid
            made the piece and take a photo straight down. In about two
            seconds the server finds the paper&apos;s edges and shows the
            photo with a dot on each corner. If a dot is off, I drag it, with
            a magnifier above my finger. Then it straightens the page, I
            rotate it if needed, and save.
          </p>
          <Screenshot
            src={whoImage}
            size="phone"
            alt="The Add screen asking who made the piece, with a separate option for a printed family photo"
            caption="Adding starts with who made it."
          />
          <Screenshot
            src={captureImage}
            size="phone"
            alt="The capture screen with a large Take a photo button and three tips for a clean shot"
            caption="The capture screen opens the phone's own camera."
          />
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Two files are kept. The straightened copy is filed at the
            photo&apos;s full detail with the location removed, and the
            untouched photo goes in a folder beside it, so a bad crop can be
            redone later. Portrait or landscape is worked out from the shape
            of the paper.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Finding the Paper
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Edge finding tries four detection methods and keeps the best
            outline. On 16 test photos it found the paper to within about two
            pixels on 11 of them, including steep angles, a rug, and a couch.
            It misses when the paper looks like what&apos;s under it, such as
            white paper on a light table, and dragging the corners covers
            those.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The first real photo failed anyway. It was a white canvas on dark
            wood, which should have been easy, and one method had found the
            edges almost exactly. But the canvas was covered in green
            handprints, and a check that asked &ldquo;is this outline mostly
            paper inside?&rdquo; threw the right answer out. Kids&apos; art is
            mostly paint, so that check now looks at the outline&apos;s shape
            instead of how much white is inside it. When the page isn&apos;t
            sure about the corners, it says so and asks me to check each one.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            The Frame
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The frame is a Seeed reTerminal E1004 with a 1200 by 1600 Spectra
            6 color panel, running ESPHome on battery. It wakes three times a
            day, asks the server what to show, draws it, and goes back to
            sleep. It shows the newest piece it hasn&apos;t shown yet,
            otherwise one it hasn&apos;t shown recently. Because it sleeps,
            it can&apos;t be woken from the network, so its buttons do that
            job: refresh shows the next piece now, and the arrows step
            forward and back.
          </p>
          <Screenshot
            src={homeImage}
            size="phone"
            alt="The phone page's home screen: a preview of the frame showing a blue and green painting with its caption, the battery level, and the last sync time"
            caption="The home screen mirrors the frame, with its battery level and last sync."
          />
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            The phone page can also queue a specific piece for the next wake
            and switch the frame between two modes, Kids&apos; Art and Family
            Photos. The server renders each image for the panel ahead of
            time, and photos get a gentler color boost than paintings. Home
            Assistant sends a notification when the battery drops under 20%.
          </p>
          <Screenshot
            src={nextImage}
            size="phone"
            alt="The Choose what's next screen, a grid of the kids' art with a caption under each piece"
            caption="Picking the piece the frame shows next."
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Immich as the Source of Truth
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Everything is filed in{' '}
            <a
              href="https://immich.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Immich
            </a>
            , the self-hosted photo library I already run. It picks up a
            saved piece within a few minutes, and the server adds it to an
            album with a caption made of the kid&apos;s name and the month.
            From then on the frame follows the album. Editing the description
            in Immich changes the caption on the frame, and moving a piece to
            the trash removes its files an hour later, which leaves time to
            restore a mistake.
          </p>
          <Screenshot
            src={flowImage}
            alt="A diagram of the flow: phone, then art server, then Immich, then the frame"
            caption="How a piece gets from the kitchen table to the frame."
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
                  feature="Phone capture"
                  description="A page on the home network opens the phone's own camera at full resolution. There's no app to install."
                />
                <FeatureRow
                  feature="Edge finding"
                  description="The server finds the paper and straightens it, with draggable corners for the photos it gets wrong."
                />
                <FeatureRow
                  feature="Two copies"
                  description="A straightened archive copy and the untouched original, both backed up nightly."
                />
                <FeatureRow
                  feature="Captions"
                  description="Each piece is captioned with who made it and when. Editing the caption in Immich updates the frame."
                />
                <FeatureRow
                  feature="Printed photos"
                  description="Old family prints go through the same capture and can be dated back to 1900."
                />
                <FeatureRow
                  feature="Two modes"
                  description="Kids' Art or Family Photos, switched from the phone page."
                />
                <FeatureRow
                  feature="Battery alert"
                  description="A Home Assistant notification when the frame drops under 20%."
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
            items={['Seeed reTerminal E1004', 'Spectra 6 e-paper', 'ESPHome', 'Immich', 'Proxmox', 'Home Assistant']}
          />
        </section>
      </div>
    </Container>
  )
}
