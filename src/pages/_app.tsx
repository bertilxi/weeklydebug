import "@/styles/globals.css"
import { useEffect } from "react"
import type { AppProps } from "next/app"
import { Pacifico as FontSans, Inter } from "next/font/google"
import Head from "next/head"
import { useRouter } from "next/router"
import { ThemeProvider } from "next-themes"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug()
    },
  })
}

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
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => posthog?.capture("$pageview")
    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

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

      <PostHogProvider client={posthog}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Component {...pageProps} />
        </ThemeProvider>
      </PostHogProvider>
    </>
  )
}
