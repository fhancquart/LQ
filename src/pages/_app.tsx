import React, { useReducer } from 'react';
import '../assets/scss/style.scss';
import { Conteneur } from '../components/Conteneur';
import { BackgroundContext, initialState, reducer } from "../utils/CustomHooks/useBackground";
import { useDarkMode } from '../utils/CustomHooks/useDarkMode';
import { Pyro } from '../components/Pyro';

import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: "include",
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps } : any) {

  const [isDark, setIsDark] = useDarkMode(); 
  const [background, setBackground] = useReducer(reducer, initialState)

  return (
    <>
      <ApolloProvider client={client}>
        <BackgroundContext.Provider value={{
              active: background.active,
              setActive: () => setBackground({type: "active"}),
              setDesactive: () => setBackground({type: "desactive"}),
          }}>
          <Pyro />
          <Conteneur isDark={isDark} setIsDark={setIsDark}>
              <Component {...pageProps} />
          </Conteneur>
        </BackgroundContext.Provider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
