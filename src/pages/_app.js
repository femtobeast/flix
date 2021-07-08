import '../../styles/globals.css'
import Provider from '../lib/Context'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Progress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '../components/Layout'

Progress.configure({ minimum: 0.4, speed: 700 })

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const handleRouteChangeStart = (url, { shallow }) => {
    Progress.start()
  }

  const handleRouteChangeComplete = (url, { shallow }) => {
    Progress.done()
  }

  const handleRouteChangeError = (err, url) => {
    if (err.cancelled) {
      Progress.done()
    }
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [])

  return (
    <Provider>
      <AnimatePresence exitBeforeEnter>
        <Layout title={pageProps.title}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </Provider>
  )
}

export default MyApp
