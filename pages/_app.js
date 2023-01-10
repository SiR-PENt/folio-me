import '../styles/globals.css'
import { Lato } from '@next/font/google'
import { Montserrat } from '@next/font/google'
import { League_Spartan } from '@next/font/google'
import Head from 'next/head'


export const lato = Lato({
  weight: '300',
  variable:'--font-lato',
})

export const montserrat = Montserrat({
  weight: '300',
  variable:'--font-montserrat',
})
export const leagueSpartan = League_Spartan({
  weight: '300',
  variable:'--font-spartan',
})

export default function App({ Component, pageProps }) {

  return  (
    <>
    <Head>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}
