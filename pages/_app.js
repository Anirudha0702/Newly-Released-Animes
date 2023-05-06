import  AnimeCart  from '@/components/AnimeCart'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  
  
  return (
    <>
      <Component {...pageProps} />
      <AnimeCart/>
      <Footer/>
    </>
  )
}
