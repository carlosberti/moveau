import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'

import GlobalStyles from 'styles/global'
import { darkTheme, lightTheme } from 'styles/theme'
import SEO from '../../next-seo.config'
import ReactAxe from 'utils/react-axe'
import { useDarkMode } from 'store'

ReactAxe()

function App({ Component, pageProps }: AppProps) {
  const isDarkMode = useDarkMode((state) => state.darkMode)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Head>
        <link rel="shortcut icon" href="/assets/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/assets/img/icon-512.png" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="linear-gradient(to right, #9580FF 0%, #80FFEA 100%)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
