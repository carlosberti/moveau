import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import ReactAxe from 'utils/react-axe'

ReactAxe()

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>movieau</title>
        <meta
          name="description"
          content="A simple project made to search for movies"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
