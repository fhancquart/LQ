import React from "react";

interface ButtonGroupsProps{
    id?: number
    field: string
    index: number
    active: any
    handleClick: any
    handleChangeButtons: any
    click: string
}

export const ButtonGroups: React.FC<ButtonGroupsProps> = (props) => {

    let fieldName = props.field == "type" ? "T" : (props.field == "question" ? "Q" : "R");

    return (
            <div className={
                    (props.active[props.field] && props.active.number == props.index || props.active[props.field] == false && props.field == "question" //actif & par défaut
                        ? `active ${fieldName}` : `${fieldName}`)
                } 
                onClick={
                    () => {
                        props.handleClick(props.field + props.index);
                        props.handleChangeButtons({
                            id: props.id,    
                            content: /*[props.index]*/ [{ number: props.index, [props.field] : true,}]
                        });
                    }
                }>{fieldName}</div>
    )

}