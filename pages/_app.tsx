import { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RecoilRoot } from 'recoil'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
    cache: new InMemoryCache()
  })

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: false,
      easing: "ease-out-sine",
      duration: 600,
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default MyApp
