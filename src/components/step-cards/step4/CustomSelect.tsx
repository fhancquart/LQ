import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useGetImagesByTagsMutation, useGetTagsQuery } from "../../../generated/graphql";

interface CustomSelectProps{
    handleChange: any
    famille: number
    nameSelect: string
    carte: number
    color: any
}

export const CustomSelect: React.FC<CustomSelectProps> = (props) => {

    const [open, setOpen] = useState(false);
    const [menuImages, setMenuImages] = useState(false);
    const [go, setGo] = useState(false);

    const [first, setFirst] = useState(true);
    const [category, setCategory] = useState("");
    const [secondCategory, setSecondCategory] = useState("");
    const [deleteCategory, setDeleteCategory] = useState(false);
    const [deleteSecondCategory, setDeleteSecondCategory] = useState(false);

    const [allImages, setAllImages] = useState({img_name: [] as any});

    useEffect(() => {
        setGo(true)
    }, [allImages])

    const {data: data} = useGetTagsQuery();
    const [images] = useGetImagesByTagsMutation();

    return(
        <>
            <span className="select">

                <span className="customSelect" onClick={() => setOpen(open == false ? true : false)}>
                    <span className="choose">Choisissez une catégorie</span>
                </span>

                {open && !menuImages &&
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
                                    setMenuImages(true);
                                    await props.handleChange(event,2, props.carte, props.famille-1); //gère le visu front
                                    const getImages = await images({variables: {img_tag1: i+1}}); 
                                    setAllImages({...allImages, img_name : getImages.data?.getImagesByTags.images});
                                    if (!first){  
                                        setSecondCategory(v.tag_name); 
                                        setDeleteSecondCategory(false); 
                                    } else{ 
                                        setCategory(v.tag_name);
                                        setDeleteCategory(false); 
                                    }
                                }}>{i+1} - {v.tag_name}</p>
                            )
                        })}
                    </span>
                }

                {menuImages &&
                    <span className="listing">  
                        <span className="listPicto">
                            <div className="navCat">

                                <span className="add" onClick={() => {
                                    setOpen(true)
                                    if (first){ 
                                        setFirst(false); 
                                        setDeleteCategory(false); 
                                    } else{ 
                                        setFirst(true); 
                                        setDeleteSecondCategory(false);
                                    }
                                    setMenuImages(false)
                                }}>+</span>

                                {!deleteCategory && 
                                    <span className="pastille" onClick={() => {
                                        setDeleteCategory(true);
                                        setFirst(false); 
                                    }}>
                                            <span className="plus">+</span>{category}
                                    </span>
                                }

                                {!first && !deleteSecondCategory && 
                                    <span className="pastille secondP" onClick={() => {
                                        setDeleteSecondCategory(true);
                                        setFirst(true); 
                                    }}>
                                        <span className="plus">+</span>{secondCategory}
                                    </span>
                                }

                            </div>
                            <div className="allPictos">
                                {go && 
                                    allImages.img_name.map((i:any) => {
                                        const myLoader = () => {
                                            return `http://learnerquiz.info/img/pictos/${i.img_name}`
                                        }

                                        return (
                                            <>  
                                                <span className="globPicto">
                                                    <Image 
                                                        loader={myLoader}
                                                        src="me.png"
                                                        alt="Picto"
                                                        width="50"
                                                        height="50"
                                                        className="pictoCard"
                                                        onClick={() => {
                                                            setMenuImages(false);
                                                        }}
                                                    />
                                                    <style jsx global>{`
                                                        .globPicto:hover{
                                                            background-color: ${props.color} !important;
                                                            border-color: ${props.color};
                                                        }
                                                    `}</style>
                                                    </span>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </span>
                    </span>
                }
            </span>
        </>
    )
}