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
        <title>Weekly Debug</title>
        <meta
          name="description"
          content="Un podcast que pretende recoger las historias más interesantes del sector tecnólogico y presentarlas de manera comprensible para todos los amantes de la tecnología."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
