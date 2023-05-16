import Link from "next/link"
import {
  AtSign,
  Instagram,
  Music2,
  Podcast,
  Twitch,
  Youtube,
} from "lucide-react"

import { Logo1 } from "../components/wd"

const links = [
  {
    name: <span className="font-bold text-green-300">Spotify</span>,
    link: "https://open.spotify.com/show/5h8I9FCGZGs0mgXJIsswXj",
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
      <div>
        <Logo1 />
      </div>

      <section className="sans container md:mb-20">
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
              className="flex w-[150px] items-center p-2 text-left"
              rel="noreferrer noopener"
              target="_blank"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="sans container p-10">
        <footer className="flex flex-1 justify-center text-xl md:text-2xl">
          <div
            className="flex cursor-pointer items-center hover:text-pink-500 hover:underline"
            onClick={() =>
              open(
                Buffer.from(
                  "bWFpbHRvOmNvbnRhY3RvQHdlZWtseWRlYnVnLmNvbQ==",
                  "base64"
                ).toString("utf8"),
                "_blank"
              )
            }
          >
            contacto
            <AtSign className="h-7 w-7 text-pink-500" />
            weeklydebug.com
          </div>
        </footer>
      </section>
    </main>
  )
}
