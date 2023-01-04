import '../styles/globals.css'
import { Lato } from '@next/font/google'
import { Montserrat } from '@next/font/google'
import { League_Spartan } from '@next/font/google'
import { Roboto } from '@next/font/google'

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
  return <Component {...pageProps} />
}
