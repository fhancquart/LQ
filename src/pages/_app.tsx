import React, { useEffect, useState } from 'react';
import '../assets/scss/style.scss';
import { Conteneur } from '../components/Conteneur';
import { useDarkMode } from '../utils/CustomHooks/useDarkMode';

function MyApp({ Component, pageProps } : any) {

  const [isDark, setIsDark] = useDarkMode();  

  return (
    <Conteneur isDark={isDark} setIsDark={setIsDark}>
        <Component {...pageProps} />
    </Conteneur>
  )
}

export default MyApp
