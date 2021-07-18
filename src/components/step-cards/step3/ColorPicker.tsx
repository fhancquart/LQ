import { Formik, Form } from "formik";
import React from "react";
import { useFamilyMutation } from "../../../generated/graphql";
import { shadeColor } from "../../../utils/shadeColor";

interface ColorPickerProps{
    index: number
    handleChange: any
    settings: any
    idCard: any
    idCreator: any
}

export const ColorPicker: React.FC<ColorPickerProps> = (props) => {

    const color = props.settings.cards[props.index][0]["color-" + (props.index + 1)];
    const name = props.settings.cards[props.index][0]["familyName-" + (props.index + 1)];

    const [family] = useFamilyMutation();

    const colorPicker = {
        backgroundColor: color,
        borderColor: shadeColor(color || "#f0f0f0",-10)
    };   

    const submitMyForm = async (event:any) => {
        console.log({[event.target.name]:event.target.value})
        console.log(props.idCard)
        //D'abord create puis si existe alors update
        // await family({variables:{input:{cf_name: }}})
      };

    return(
        <div className="ssButton" style={colorPicker}>
            <Formik
                initialValues={{cf_color: "", cf_name: "", cf_category: ""}}
                onSubmit={submitMyForm}
            >
                <Form>
                    <input 
                        type="text" 
                        name={`familyName-${props.index + 1}`} 
                        style={color ? { color: 'white', fontWeight: "bolder" } : {color: "#999999", fontWeight: "bolder"}} 
                        placeholder={`Famille ${props.index + 1}`} 
                        onChange={e => {props.handleChange(e,2, 0, props.index);  submitMyForm(e) }} 
                        value={name}
                    />
                    <input 
                        type="color" 
                        name={`color-${props.index + 1}`} 
                        onChange={e => props.handleChange(e,2, 0, props.index)} 
                        value={color}
                    />
                </Form>
            </Formik>
        </div>
    )
}