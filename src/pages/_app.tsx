import React from 'react';
import '../assets/scss/style.scss';
import { Conteneur } from './components/Conteneur';

function MyApp({ Component, pageProps } : any) {
  return (
    <Conteneur>
      <Component {...pageProps} />
    </Conteneur>
  )
}

export default MyApp
