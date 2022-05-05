import { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RecoilRoot } from 'recoil'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
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
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  )
}

export default MyApp
