import React, { useReducer } from 'react';
import '../assets/scss/style.scss';
import { Conteneur } from '../components/Conteneur';
import { BackgroundContext, initialState, reducer } from "../utils/CustomHooks/useBackground";
import { useDarkMode } from '../utils/CustomHooks/useDarkMode';
import { Pyro } from '../components/Pyro';
import { withApollo } from '../utils/withApollo';
import { ModalContext } from '../utils/CustomHooks/useModalContext';
import { Modal } from '../components/Modal';
import useModal from '../utils/CustomHooks/useModal';
import json from "../assets/json/modal.json";


function MyApp({ Component, pageProps } : any) {

  const [isDark, setIsDark] = useDarkMode(); 
  const [background, setBackground] = useReducer(reducer, initialState)
  const [modal, setModal] = useReducer(reducer, initialState)
  const {toggle} = useModal();


  return (
    <>
        <BackgroundContext.Provider value={{
              active: background.active,
              setActive: () => setBackground({type: "active"}),
              setDesactive: () => setBackground({type: "desactive"}),
          }}>
          <Pyro />
          <ModalContext.Provider value={{
                  active: modal.active,
                  setActive: () => setModal({type: "active"}),
                  setDesactive: () => setModal({type: "desactive"}),
              }}>
                <Conteneur isDark={isDark} setIsDark={setIsDark}>                
                    <Modal 
                        toggle={toggle} 
                        title={json.NameCard.Title}
                        text={json.NameCard.Text}
                    />
                    <Component {...pageProps} />
                </Conteneur>
          </ModalContext.Provider>
        </BackgroundContext.Provider>
    </>
  )
}

export default withApollo({})(MyApp)
