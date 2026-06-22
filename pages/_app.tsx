import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { JSX } from 'react/jsx-runtime'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Best Nuxt blog ever</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  )
}
