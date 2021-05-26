import React, { useReducer } from 'react';
import '../assets/scss/style.scss';
import { Conteneur } from '../components/Conteneur';
import { BackgroundContext, initialState, reducer } from "../utils/CustomHooks/useBackground";
import { useDarkMode } from '../utils/CustomHooks/useDarkMode';
import { Pyro } from '../components/Pyro';

function MyApp({ Component, pageProps } : any) {

  const [isDark, setIsDark] = useDarkMode(); 
  const [background, setBackground] = useReducer(reducer, initialState)

  return (
    <>
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
    </>
  )
}

export default MyApp
