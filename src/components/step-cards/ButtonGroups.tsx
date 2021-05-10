import React from "react";

interface ButtonGroupsProps{
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
            (props.active[props.field] && props.active.number == props.index ? 
            `active ${fieldName}` : `${fieldName}`)
            } 
            onClick={
                () => {
                    props.handleClick(props.field + props.index);
                    props.handleChangeButtons({
                        number: props.index,
                        [props.field] : true,
                    });
                }
            }>{fieldName}</div>
    )

}