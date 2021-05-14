import React from "react";

interface ButtonGroupsProps{
    id?: number
    field: string
    index: number
    i: number
    active: any
    handleClick: any
    settings: any
    handleChangeButtons: any
    click: string
}

export const ButtonGroups: React.FC<ButtonGroupsProps> = (props) => {

    let fieldName = props.field == "type" ? "T" : (props.field == "question" ? "Q" : "R");

    return (
            <div className={
                    (
                        props.active[props.field] && props.active.number == props.index || 
                        props.active[props.field] == false && props.field == "question" //actif & par défaut
                        && props.active.number == props.id
                        ? 
                            `active ${fieldName} ${props.id}` 
                        : 
                            `${fieldName} ${props.id}`
                    )
                } 
                onClick={
                    () => {
                        props.handleClick(props.field + "-" + props.id + "-" + props.index); //A supprimer
                        props.handleChangeButtons({
                            id: props.id,    
                            content: /*[props.index]*/ [{ number: props.index, [props.field] : true,}]
                        });
                    }
                }>{fieldName}</div>
    )

}