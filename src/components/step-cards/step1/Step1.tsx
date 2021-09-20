import React, {useContext, useEffect } from "react";
import Image from 'next/image';
import { Button } from "../../Button";
import { Step2 } from "../step2/Step2";
import {PrevNextContext} from '../../../utils/CustomHooks/usePrevNextContext'
import {StepProps} from '../../../utils/Types/interface'
import { useGetAllPackQuery } from "../../../generated/graphql";
import { useApolloClient } from "@apollo/client";

export const Step1: React.FC<StepProps> = (props) => {

    const context = useContext(PrevNextContext);
    const {step, Next} = context;

    const {data: allPackData, loading} = useGetAllPackQuery();
    const datapack = allPackData?.getAllPack?.pack;   

    const countCards = 0; 

    const apolloClient = useApolloClient();
    const cacheReset = () => apolloClient.cache.reset();

    useEffect(() => {
        if(step == 0){
            cacheReset()
        }
    }, [step])

    return(
        <>  
             {step == 1 || step != 0 ? 
                <Step2 
                    group={props.group}
                    setGroup={props.setGroup}
                    handleChange={props.handleChange}
                    settings={props.settings}
                    setSettings={props.setSettings}
                    handleChangeButtons={props.handleChangeButtons}
                    family={props.family}
                    setFamily={props.setFamily}
                />
            : 
                
                <span className="step1">
                    <b><h1>Bienvenue dans l'assistant de création de jeu de carte en ligne</h1></b>
                    <span className="allPack">
                        {datapack?.length == 0 ? 
                            <p className="empty">Vous ne disposez actuellement d'aucun jeu de carte</p>
                        :
                            (loading ?
                                <p className="loader">Chargement...</p> 
                                : 
                                datapack?.map((e:any) => {
                                    return(
                                        <>
                                            <span className="pack">
                                                <Image 
                                                    src={`/SVG/pack.svg`}
                                                    alt="Logo"
                                                    width="160"
                                                    height="90"
                                                    className="logoico"
                                                />
                                                <p><span className="name">{e.cd_name}</span><br /><span className="number">{countCards} cartes</span></p>
                                            </span>
                                        </>
                                    )
                                })
                            )
                        }
                    </span>
                    <Button
                        text="Commencer"
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