// import '../styles/globals.css'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
