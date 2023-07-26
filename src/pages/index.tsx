import Link from "next/link"
import { AtSign } from "lucide-react"

import { Logo1 } from "../components/wd"

const links = [
  {
    name: <span className="text-green-300">Spotify</span>,
    link: "https://open.spotify.com/show/5h8I9FCGZGs0mgXJIsswXj",
    icon: (
      <svg className="mr-2 h-8 w-8 fill-green-500" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm31.07-46.26a8,8,0,0,1-10.81,3.33,42.79,42.79,0,0,0-40.52,0,8,8,0,0,1-7.48-14.14,59.33,59.33,0,0,1,55.48,0A8,8,0,0,1,159.07,169.74Zm32-56a8,8,0,0,1-10.83,3.29,110.62,110.62,0,0,0-104.46,0,8,8,0,0,1-7.54-14.12,126.67,126.67,0,0,1,119.54,0A8,8,0,0,1,191.06,113.76Zm-16,28a8,8,0,0,1-10.82,3.3,77,77,0,0,0-72.48,0,8,8,0,0,1-7.52-14.12,93,93,0,0,1,87.52,0A8,8,0,0,1,175.06,141.76Z"></path>
      </svg>
    ),
  },
  {
    name: <span className="text-red-300">YouTube</span>,
    link: "https://www.youtube.com/@WeeklyDebug",
    icon: (
      <svg className="mr-2 h-8 w-8 fill-red-500" viewBox="0 0 256 256">
        <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path>
      </svg>
    ),
  },
  {
    name: <span className="text-purple-300">Twitch</span>,
    link: "https://www.twitch.tv/weekly_debug",
    icon: (
      <svg className="mr-2 h-8 w-8 fill-purple-500" viewBox="0 0 256 256">
        <path d="M208,32H48A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16H64v32a8,8,0,0,0,13.12,6.15L122.9,208h42.2a16,16,0,0,0,10.25-3.71l42.89-35.75A15.93,15.93,0,0,0,224,156.25V48A16,16,0,0,0,208,32Zm0,124.25L165.1,192H122.9a16,16,0,0,0-10.25,3.71L80,222.92V200a8,8,0,0,0-8-8H48V48H208ZM160,136V88a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm-48,0V88a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Z"></path>
      </svg>
    ),
  },
  {
    name: <span className="text-pink-300">Instagram</span>,
    link: "https://www.instagram.com/weeklydebug",
    icon: (
      <svg className="mr-2 h-8 w-8 fill-pink-500" viewBox="0 0 256 256">
        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
      </svg>
    ),
  },
  {
    name: <span className="text-teal-300">TikTok</span>,
    link: "https://www.tiktok.com/@weeklydebug",
    icon: (
      <svg className="mr-2 h-8 w-8 fill-teal-500" viewBox="0 0 256 256">
        <path d="M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z"></path>
      </svg>
    ),
  },
  {
    name: <span className="text-violet-300">Discord</span>,
    link: "https://discord.weeklydebug.com",
    icon: (
      <svg className="mr-2 h-8 w-8 fill-violet-500" viewBox="0 0 256 256">
        <path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"></path>
      </svg>
    ),
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
              className="flex w-[150px] items-center p-2 text-left hover:opacity-70"
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
