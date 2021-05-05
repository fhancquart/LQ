import React, { useState } from "react";
import { Step1 } from "../components/step-cards/Step1";

export default function Cartes() { 

  const [click, setClick] = useState("");
  const [inputName, setInputName] = useState("");

  console.log(inputName)

  return (
    <>      
        <span className="cartes">
              <Step1
                click={click}
                setClick={setClick}
                inputName={inputName}
                setInputName={setInputName}
              />
        </span>
    </>
  )
}