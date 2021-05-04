import React, { useContext} from "react";
import {PrevNextContext} from '../../utils/CustomHooks/usePrevNextContext'
import { Button } from "../Button";

interface Step3Props {}

export const Step3: React.FC<Step3Props> = () => {
    
    const context = useContext(PrevNextContext);
    const {step, Next} = context;
    

    return(
        <>  
            {step == 3 || step != 2 ? 
                "YO"
            :                 
                <span>
                    <b><h1>sdf</h1></b>

                    <Button
                        text="Go"
                        wButton="big"
                        cButton="orange"
                        isImage={false}
                        link=""
                        isClick={true}
                        click={Next}
                    />
                </span>
            }
        </>
    )
}