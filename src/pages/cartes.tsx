import React, { useCallback, useReducer, useState } from "react";
import { Step1 } from "../components/step-cards/Step1";

export default function Cartes(initialValues = {}) { 

  

  const [click, setClick] = useState("");

  const [active,setActive] = useState({
    button: "", active: false,
    button2: "", active2: false,
    button3: "", active3: false,
  });

  const [settings, setSettings] = React.useState({});

  const handleChange = (evt: any) => {
    const value = evt.target.value;
    setSettings({
        ...settings,
        [evt.target.name]: value
    });
}

  const [inputName, setInputName] = useState("");

  const handleClick = async (v: string) => {
    setClick(v)
  }    

  const handleInput = async (v: string) => {
      setInputName(v)
  } 

  return (
    <>      
        <span className="cartes">
              <Step1
                click={click}
                handleClick={handleClick}
                inputName={inputName}
                handleInput={handleInput}
                active={active}
                setActive={setActive}
                handleChange={handleChange}
                settings={settings}
              />
        </span>
    </>
  )
}