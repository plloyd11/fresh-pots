import { Signika } from '@next/font/google'
import { Quicksand } from '@next/font/google'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StoreProvider  from '../store/store'

const signika = Signika({
    subsets: ['latin'],
    variable: '--font-signika',
})
const quicksand = Quicksand({
    subsets: ['latin'],
    variable: '--font-quicksand',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
        <main className={`flex flex-col h-screen ${signika.variable} font-sans, ${quicksand.variable} font-sans`}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </main>
    </StoreProvider>
  )
}
