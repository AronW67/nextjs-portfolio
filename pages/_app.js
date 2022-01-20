import '../styles/globals.css'
import Head from 'next/head'
import {Navbar} from '../components/NavBar'
import Footer from '../components/Footer'
import { config } from "@fortawesome/fontawesome-svg-core"
// You should do that in a Layout file or in `gatsby-browser.js`.
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/site-icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="AW Dev Portfolio"
          content="Portfolio site to showcase development work."
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>AW Dev Portfolio</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />    
      <Footer />
    </>

  )
}

export default MyApp
