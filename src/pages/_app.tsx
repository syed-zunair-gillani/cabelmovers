import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import { ApolloProvider } from '@apollo/client'
import apolloClient from '@/config/client'
import Breadcrum from '@/components/breadcrum'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const {pathname} = useRouter()
  console.log("🚀 ~ App ~ pathname:", pathname)
  const notInclude = ['/lp-best-isps']

  return (
    <>
      {/* <GoogleAnalytics measurementId="GTM-TNZF6NMR" />       */}
      {
        !notInclude.includes(pathname) && <Header />
      }
      <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      </ApolloProvider>
      {
        !notInclude.includes(pathname) && <Footer />
      }
      
    </>
  )
}
