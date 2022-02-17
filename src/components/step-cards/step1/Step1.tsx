import React, {useContext, useEffect, useState } from "react";
import Image from 'next/image';
import { Button } from "../../Button";
import { Step2 } from "../step2/Step2";
import {PrevNextContext} from '../../../utils/CustomHooks/usePrevNextContext'
import {StepProps} from '../../../utils/Types/interface'
import { useGetAllPackQuery, useGetCurrentGameMutation,   } from "../../../generated/graphql";
import { useApolloClient } from "@apollo/client";

export const Step1: React.FC<StepProps> = (props) => {

    const context = useContext(PrevNextContext);
    const {step, Next} = context;

    const {data: allPackData, loading} = useGetAllPackQuery();
    const datapack = allPackData?.getAllPack?.pack;   

    const countCards = 0; 

    const apolloClient = useApolloClient();
    const cacheReset = () => apolloClient.cache.reset();


    const [getCurrntGame] = useGetCurrentGameMutation()
    const [cards] = useState<any>([])
    const [isCurrentGame, setIsCurrentGame] = useState(false)
    const [idCreator, setIdCreator] = useState<number>()
    const [idCard, setIdCard] = useState<number>()
    const [familyGroupNum, setFamilyGroupNum] = useState<any>({group: null, family: null})


    function openGame(id:number, userid:number) {
        setIsCurrentGame(true)
        setIdCreator(userid)
        setIdCard(id)
        const currentGame = getCurrntGame({variables:{cd_id: id}})
        currentGame.then(function(result) {
            result.data?.getCurrentGame?.family.map((v,i) => {
                cards.push(new Array(
                    {
                        ["familyName-"+(i+1)] : v.cf_name,
                        ["color-"+(i+1)] : v.cf_color,
                        ["family"] : v.cf_number,
                    }
                ))
                result.data?.getCurrentGame?.game.map((v2,i2) => {
                    v2.cg_family == v.cf_number && //On set les Q/R aux bons id de famille
                    cards[i].push({
                            id: v2.cg_number,
                            ["question-"+(v2.cg_number)] : v2.cg_question,
                            ["reponse-"+(v2.cg_number)] : v2.cg_reponse,
                            ["image-"+(v2.cg_number)] : v2.cg_image,
                        }
                    )
                })
            })
            
            props.setSettings(
                {...props.settings, 
                    cards,
                    others:{
                        cd_name: result.data?.getCurrentGame?.category[0].cd_name,
                        cd_resume: result.data?.getCurrentGame?.category[0].cd_resume,
                    }
                },
            1)       

            setFamilyGroupNum({...familyGroupNum, group: result.data?.getCurrentGame?.game.length, family: result.data?.getCurrentGame?.family.length})
            Next()
        })
    }

    // useEffect(() => {
    //     // console.log(props.settings)
    // }, [props.settings])



    useEffect(() => {
        if(step == 0){
            cacheReset()
        }
    }, [step])

    return(
        <>  
             {step == 1 || step != 0 ? 
                <Step2 
                    group={props.group || familyGroupNum.family}
                    setGroup={props.setGroup}
                    handleChange={props.handleChange}
                    settings={props.settings}
                    setSettings={props.setSettings}
                    handleChangeButtons={props.handleChangeButtons}
                    family={props.family || (familyGroupNum.group/familyGroupNum.family)}
                    setFamily={props.setFamily}
                    isCurrentGame={isCurrentGame}
                    idCreator={idCreator}
                    idCard={idCard}
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
                                                    onClick={() => openGame(e.cd_id, e.cd_userid)}
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
                        text="Créer un jeu"
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