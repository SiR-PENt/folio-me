import '../styles/globals.css'
import { Lato } from '@next/font/google'

export const lato = Lato({
  weight: '300',
  variable:'--font-lato',
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
