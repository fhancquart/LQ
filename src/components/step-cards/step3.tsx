import React, { useEffect, useState } from "react";
import { useBackContext, useStepContext } from "../../utils/CustomHooks/useGlobalContext";
import { Button } from "../Button";
import { Step2 } from "./step2";

interface Step3Props {
    nextStep: number;
}

export const Step3: React.FC<Step3Props> = (props) => {
    
    const [step4, setStep4] = useState(false);
    const { backComponent, setBackComponent } = useBackContext();
    const { nextStep, setNextStep } = useStepContext();
    

    return(
        <>  
            {!step4 ? 
                <span>
                    <b><h1>sdf</h1></b>

                    <Button
                        text="Go"
                        wButton="big"
                        cButton="orange"
                        isImage={false}
                        link=""
                        isClick={true}
                        click={() => {
                            setStep4(true);
                        }}
                    />
                </span>
            :                 
                "YO"
            }
        </>
    )
}