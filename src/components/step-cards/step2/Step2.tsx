import React, {useContext, useEffect, useState } from "react";
import { Button } from "../../Button";
import { Step3 } from "../step3/Step3";
import {PrevNextContext} from '../../../utils/CustomHooks/usePrevNextContext'
import { StepProps } from "../../../utils/Types/interface";
import { useCategoryMutation, useIsPackNameExistingMutation, useMeQuery, useUpdateCategoryMutation } from "../../../generated/graphql";
import { Field, Form, Formik } from "formik";
import { ModalContext } from "../../../utils/CustomHooks/useModalContext";


export const Step2: React.FC<StepProps> = (props) => {

    const context = useContext(PrevNextContext);
    const {step, Next} = context;

    const maxValue = (e:any, type:any) => {
        e > 7 ? type(7) : type(e);
    }

    const [category] = useCategoryMutation();
    const {data: meData} = useMeQuery();
    const [updateCategory] = useUpdateCategoryMutation();
    const [isPackNameExisting] = useIsPackNameExistingMutation();

    const [idCard, setIdCard] = useState<number>()
    const [idCreator, setIdCreator] = useState<number>()

    const datas = {
        cd_name: props.settings.others.cd_name,
        cd_link: props.settings.others.cd_name,
        cd_resume: props.settings.others.cd_resume,
        cd_id: idCard!
    };


    const ContextModal = useContext(ModalContext);
    const {setActive, setDesactive} = ContextModal;
    
    return(
        <>  
            {step == 2 || step != 1 ? 
                <Step3 
                    setSettings={props.setSettings}
                    handleChange={props.handleChange}
                    settings={props.settings}
                    handleChangeButtons={props.handleChangeButtons}
                    family={props.family}
                    group={props.group}
                />
            :                 
                <span className="step2">
                    <span className="step">1/3</span> 
                    <b><h1>Dites-nous en plus</h1></b>

                    <Formik
                        initialValues={{cd_name: "", cd_link: "", cd_resume: ""}}
                        onSubmit={async () => {
                            if (meData?.me?.id == idCreator){
                                await updateCategory({variables: datas});
                                Next();
                            } else{
                                const test = await isPackNameExisting({variables: {cd_name: props.settings.others.cd_name}})
                                if(test.data?.isPackNameExisting?.message == "existe"){
                                    setActive();
                                    setTimeout(() => {
                                        setDesactive()
                                    }, 3000);
                                } else{
                                    const response = await category({variables: {input: datas}}) 
                                    setIdCard(response.data?.category.cd_id)
                                    setIdCreator(response.data?.category.cd_userid)
                                    Next();
                                }
                            }                                                               
                        }}
                    >
                        {({isSubmitting}) => ( 
                            <Form>
                                <div className="inputs">
                                    <label htmlFor="cd_name">Quel est son nom ?</label>
                                    <Field name="cd_name" type="text" placeholder="Nom du jeu" onChange={(e:any) => {
                                        props.handleChange(e, 1)
                                    }} value={props.settings.others.cd_name}/>

                                    <label htmlFor="familyID">De combien de familles dispose-t-il ?</label>
                                    <input type="number" pattern="\d*" name="familyID" placeholder="7 max." onChange={(e) =>{
                                        maxValue(e.target.value, props.setGroup);
                                        props.handleChange(e, 1);
                                    }} min="1" max="7" value={props.group == 0 ? "" : props.group}/>

                                    <label htmlFor="family">De combien de cartes dispose chaque famille ?</label>
                                    <input type="number" pattern="\d*" name="family" placeholder="7 max." onChange={(e) =>{
                                        maxValue(e.target.value, props.setFamily);
                                        props.handleChange(e, 1);
                                    }} min="1" max="7" value={props.family == 0 ? "" : props.family}/>

                                    <label htmlFor="summary">Court résumé de sa thématique</label>
                                    <Field name="cd_resume" as="textarea" placeholder="50 caractères max." maxLength={50} onChange={(e:any) => {
                                        props.handleChange(e, 1)
                                    }} value={props.settings.others.cd_resume} />
                                </div>

                                {isSubmitting ? 
                                    <p>loading</p>
                                :
                                    <Button
                                        text="Suivant"
                                        wButton="big"
                                        cButton="orange"
                                        isImage={false}
                                        link=""
                                        isClick={true}
                                        isSubmit={true}
                                    />
                                }

                            </Form>
                        )}
                    </Formik>
                </span>
            }
        </>
    )
}