import React, { useEffect, useReducer, useState } from "react";
import { Step1 } from "../components/step-cards/step1";
import { useBackContext, useStepContext } from "../utils/CustomHooks/useGlobalContext";
import {stepGlobalContext} from '../utils/CustomHooks/useGlobalContext'

export default function Cartes() { 
  return (
    <>      
        <span className="cartes">
              <Step1 
                nextStep={0}
              />
        </span>
    </>
  )
}