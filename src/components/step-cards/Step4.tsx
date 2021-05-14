import React from "react";

interface Step4Props{
    settings: any
    group: number
    family: number
}

export const Step4: React.FC<Step4Props> = (props) => {

    const cardTotal = (props.group * props.family);

    return(
        <>
            <span className="step4">      
                    <span className="step">3/3</span>    
                    <b><h1>Attribuez vos visuels</h1></b>
                    <p>Nom du jeu : <b>{props.settings.name}</b></p>
                    <p>Pour chacune de vos cartes, définissez un visuel approprié</p>

                    <select name="pictures">
                        <option value="" selected disabled>Choisissez une catégorie</option>
                        <option value="pic1">1</option>
                        <option value="pic2">2</option>
                        <option value="pic3">3</option>
                    </select>

                    <p className="numberCard"><span>1</span>/{cardTotal}</p>

            </span>
        </>
    )
}