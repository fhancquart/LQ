import React, { useState } from "react";
import { useGetImagesByTagsMutation, useGetTagsQuery } from "../../../generated/graphql";

interface CustomSelectProps{
    handleChange: any
    famille: number
    nameSelect: string
    carte: number
}

export const CustomSelect: React.FC<CustomSelectProps> = (props) => {

    const [open, setOpen] = useState(false);
    const {data: data} = useGetTagsQuery();
    const [images] = useGetImagesByTagsMutation();

    return(
        <>
            <span className="select">
                <span className="customSelect" onClick={() => setOpen(open == false ? true : false)}>
                    <span className="choose">Choisissez une catégorie</span>
                </span>
                {open &&
                    <span className="listing">
                        {data?.getTags.tags.map((v:any,i:number) => {
                            let event = {
                                target : {
                                    name : `image-${props.carte}`,
                                    value: i+1
                                }
                            }
                            return(
                                <p data-value={i+1} onClick={async () => {
                                    setOpen(false);
                                    await props.handleChange(event,2, props.carte, props.famille-1); //géré le target name et target value pour i
                                    const getImagesTags = await images({variables: {img_tag1: i+1}});       
                                    console.log(getImagesTags)       
                                }}>{i+1} - {v.tag_name}</p>
                            )
                        })}
                    </span>
                }
            </span>
        </>
    )
}