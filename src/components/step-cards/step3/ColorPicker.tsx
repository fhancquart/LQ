import { Formik, Form } from "formik";
import React from "react";
import { useState } from "react";
import { useFamilyMutation, useIsFamilyNameExistMutation, useUpdateFamilyMutation } from "../../../generated/graphql";
import { shadeColor } from "../../../utils/shadeColor";

interface ColorPickerProps {
  index: number;
  handleChange: any;
  settings: any;
  idCard: any;
  idCreator: any;
}

export const ColorPicker: React.FC<ColorPickerProps> = (props) => {
    
  const color = props.settings.cards[props.index][0]["color-" + (props.index + 1)];
  const name = props.settings.cards[props.index][0]["familyName-" + (props.index + 1)];

  const [familyName, setFamilyname] = useState("");
  const [familyColor, setFamilyColor] = useState("");

  const [family] = useFamilyMutation();
  const [updateFamily] = useUpdateFamilyMutation();
  const [isFamilyNameExist] = useIsFamilyNameExistMutation();

  const colorPicker = {
    backgroundColor: color,
    borderColor: shadeColor(color || "#f0f0f0", -10),
  };

  const submitMyForm = async (event: any) => {
    let numberFamily = event.target.name.split("-").pop();

    event.target.name.includes("familyName") && setFamilyname(event.target.value);
    event.target.name.includes("color") && setFamilyColor(event.target.value);

    //D'abord un select, si existe update selon cf_category et cf_number sinon insert
    const familyNameExist = await isFamilyNameExist({variables: {cf_category: props.idCard, cf_number: parseInt(numberFamily)}});

    if(familyNameExist.data?.isFamilyNameExist?.message == "existe"){
      await updateFamily({variables:{
        cf_name: familyName,
        cf_number: parseInt(numberFamily),
        cf_category: props.idCard,
        cf_color: familyColor
       }
      })
    } else{
      await family({
        variables: {
          input: {
            cf_name: familyName,
            cf_number: parseInt(numberFamily),
            cf_category: props.idCard,
            cf_color: familyColor,
          },
        },
      });
    }
    
  };

  return (
    <div className="ssButton" style={colorPicker}>
      <Formik
        initialValues={{ cf_color: "", cf_name: "", cf_category: "" }}
        onSubmit={submitMyForm}
      >
        <Form>
          <input
            type="text"
            name={`familyName-${props.index + 1}`}
            style={
              color
                ? { color: "white", fontWeight: "bolder" }
                : { color: "#999999", fontWeight: "bolder" }
            }
            placeholder={`Famille ${props.index + 1}`}
            onChange={(e) => {
              props.handleChange(e, 2, 0, props.index);
              submitMyForm(e);
            }}
            value={name}
          />
          <input
            type="color"
            name={`color-${props.index + 1}`}
            onChange={(e) => {
              props.handleChange(e, 2, 0, props.index);
              submitMyForm(e);
            }}
            value={color}
          />
        </Form>
      </Formik>
    </div>
  );
};
