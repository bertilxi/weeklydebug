import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Pacifico as FontSans, Inter } from "next/font/google"
import Head from "next/head"
import { ThemeProvider } from "next-themes"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: "400",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "700"],
})

const title = "Weekly Debug"
const url = "https://www.weeklydebug.com"
const description =
  "Un podcast que pretende recoger las historias más interesantes del sector tecnólogico y presentarlas de manera comprensible para todos los amantes de la tecnología."

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
      }`}</style>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/og.png" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
