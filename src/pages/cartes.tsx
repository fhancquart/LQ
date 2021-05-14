import React, { useState } from "react";
import { Step1 } from "../components/step-cards/Step1";
import {useSwitchList} from "../utils/CustomHooks/useSwitchList";

export default function Cartes() { 

  const [settings, setSettings] = useState({
    others:{},
    cards:{}
  } as any);

  const [
    active, 
    setActive, 
    family, 
    setFamily, 
    group,
    setGroup,
    handleChangeButtons
  ] = useSwitchList();

  const [click, setClick] = useState("");

  const handleChange = (evt: any, type:number) => {    
    const value = evt.target.value;
    let valueKey = type == 1 ? "others" : "cards";
    setSettings({
      ...settings,
      [valueKey]: {
        ...settings[valueKey],
        [evt.target.name]: value
      } 
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
                group={group}
                setGroup={setGroup}
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