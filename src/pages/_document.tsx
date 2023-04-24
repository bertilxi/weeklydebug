import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className="dark:white min-h-screen bg-black font-sans text-white antialiased dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
