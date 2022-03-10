import '../styles/globals.css'
import CountContextProvider from '../src/countContext'

function MyApp({ Component, pageProps }) {
  return (
    <CountContextProvider>
     <Component {...pageProps} />
    </CountContextProvider>
    )
}

export default MyApp
