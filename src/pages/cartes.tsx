import React, { useEffect, useState } from "react";
import { Step1 } from "../components/step-cards/step1/Step1";
import {useSwitchList} from "../utils/CustomHooks/useSwitchList";

export default function Cartes() { 

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