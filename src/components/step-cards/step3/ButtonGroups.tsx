import React from "react";

interface ButtonGroupsProps{
    field: string
    index: number
    i: number
    id: any
    settings: any
    setSettings: any
    handleChangeButtons: any
}

export const ButtonGroups: React.FC<ButtonGroupsProps> = (props) => {

    const fieldName = props.field == "type" ? "T" : (props.field == "question" ? "Q" : "R");
    const realBool = props.settings.cards[props.id][props.index][props.field];

    return (           
        <> 
            <div className={ 
                realBool == undefined && props.field == "question" || 
                realBool == true ? `active ${fieldName}` : `${fieldName}`} 
            onClick={
                () => {
                    props.handleChangeButtons({
                        id: props.id,
                        index: props.index,
                        field: props.field,
                    }
                )
            }}>{fieldName}</div>
        </>            
    )

}