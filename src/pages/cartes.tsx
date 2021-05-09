import React, { useState } from "react";
import { Step1 } from "../components/step-cards/Step1";
import {useSwitchList} from "../utils/CustomHooks/useSwitchList";

export default function Cartes() { 

  const [settings, setSettings] = useState({});
  const [active, setActive, family, setFamily, handleChangeButtons] = useSwitchList();
  const [click, setClick] = useState("");

  const handleChange = (evt: any) => {
    const value = evt.target.value;
    setSettings({
        ...settings,
        [evt.target.name]: value
    });
  }

 


  const handleClick = async (v: string) => {
    setClick(v)
  }    

  return (
    <>      
        <span className="cartes">
              <Step1
                click={click}
                family={family}
                setFamily={setFamily}
                handleClick={handleClick}
                active={active}
                setActive={setActive}
                handleChange={handleChange}
                settings={settings}
                handleChangeButtons={handleChangeButtons}
              />
        </span>
    </>
  )
}