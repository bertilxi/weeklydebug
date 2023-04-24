import Link from "next/link"
import {
  Instagram,
  Music2,
  Podcast,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react"

import { Logo1 } from "../components/wd"

const links = [
  {
    name: <span className="font-bold text-green-300">Podcast</span>,
    link: "https://podcast.weeklydebug.com/",
    icon: <Podcast className="mr-2 h-8 w-8 text-green-500" />,
  },
  {
    name: <span className="font-bold text-red-300">YouTube</span>,
    link: "https://www.youtube.com/@WeeklyDebug",
    icon: <Youtube className="mr-2 h-8 w-8 text-red-500" />,
  },
  {
    name: <span className="font-bold text-purple-300">Twitch</span>,
    link: "https://www.twitch.tv/weekly_debug",
    icon: <Twitch className="mr-2 h-8 w-8 text-purple-500" />,
  },
  {
    name: <span className="font-bold text-cyan-300">Twitter</span>,
    link: "https://twitter.com/WeeklyDebug",
    icon: <Twitter className="mr-2 h-8 w-8 text-cyan-500" />,
  },
  {
    name: <span className="font-bold text-pink-300">Instagram</span>,
    link: "https://www.instagram.com/weeklydebug",
    icon: <Instagram className="mr-2 h-8 w-8 text-pink-500" />,
  },
  {
    name: <span className="font-bold text-teal-300">TikTok</span>,
    link: "https://www.tiktok.com/@weeklydebug",
    icon: <Music2 className="mr-2 h-8 w-8 text-teal-500" />,
  },
]

export default function IndexPage() {
  return (
    <main>
      <div className="">
        <Logo1 />
      </div>

      <section className="sans container">
        <h1 className="mb-10 text-justify text-lg md:text-2xl">
          Bienvenidos a Weekly Debug, un podcast que pretende recoger las
          historias más interesantes del sector tecnólogico y presentarlas de
          manera comprensible para todos los amantes de la tecnología.
        </h1>

        <div className="flex flex-wrap justify-evenly">
          {links.map((link) => (
            <Link
              href={link.link}
              key={link.link}
              className="flex w-[130px] items-center p-2 text-left"
              rel="noreferrer noopener"
              target="_blank"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
