import { Signika } from '@next/font/google'
import { Quicksand } from '@next/font/google'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StoreProvider  from '../store/store'
import useBlobity from 'blobity/lib/react/useBlobity';

const signika = Signika({
    subsets: ['latin'],
    variable: '--font-signika',
})
const quicksand = Quicksand({
    subsets: ['latin'],
    variable: '--font-quicksand',
})


const Ass = () => {
    const blobity = useBlobity({
        licenseKey: 'plloyd11',
        color: '#ffffff',
        dotColor: '#271c19',
        zIndex: 1,
        fontSize: 18,
    });
    return <div />;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
        <main className={`flex flex-col h-screen bg-[#271c19] ${signika.variable} font-sans, ${quicksand.variable} font-sans`}>
            <Header />
            <Ass />
            <Component {...pageProps} />
            <Footer />
        </main>
    </StoreProvider>
  )
}
