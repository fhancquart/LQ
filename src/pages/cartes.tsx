import React from "react";
import { Step1 } from "../components/step-cards/step1/Step1";
import {useSwitchList} from "../utils/CustomHooks/useSwitchList";
import { useIsAuth } from "../utils/useIsAuth";
import { withApollo } from "../utils/withApollo";

const Cartes: React.FC<{}> = ({}) => {

  useIsAuth();

  const [
    family, 
    setFamily, 
    group,
    setGroup,
    settings,
    setSettings,
    handleChange,
    handleChangeButtons
  ] = useSwitchList();

  return (
    <>      
        <span className="cartes">
              <Step1
                family={family}
                setFamily={setFamily}
                group={group}
                setGroup={setGroup}
                handleChange={handleChange}
                settings={settings}
                handleChangeButtons={handleChangeButtons}
                setSettings={setSettings}
              />
        </span>
    </>
  )
}

export default withApollo({ ssr: false })(Cartes);