import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import { useGetImagesByTagsMutation, useGetTagsQuery, useUpdateImageMutation } from "../../../generated/graphql";
import { NavCategory } from "./NavCategory";
import useOnClick from "../../../utils/CustomHooks/useOnClick";

interface CustomSelectProps{
    handleChange: any
    famille: number
    nameSelect: string
    carte: number
    color: any
    idCard: any
    group: any
    family: any
    setOpen: any
    open: any
}

export const CustomSelect: React.FC<CustomSelectProps> = (props) => {

    const [menuImages, setMenuImages] = useState(false);
    const [go, setGo] = useState(false);

    const [first, setFirst] = useState(true);
    const [category, setCategory] = useState("");
    const [idCategory, setIdCategory] = useState(0);
    const [secondCategory, setSecondCategory] = useState("");
    const [deleteCategory, setDeleteCategory] = useState(true);
    const [deleteSecondCategory, setDeleteSecondCategory] = useState(true);

    const [allImages, setAllImages] = useState({img_name: [] as any});

    useEffect(() => {
        setGo(true)
    }, [allImages])

    const {data: data} = useGetTagsQuery();
    const [images] = useGetImagesByTagsMutation();
    const [updateImage] = useUpdateImageMutation();

    const ref = useRef<HTMLDivElement>(null); // .listing
    const ref2 = useRef<HTMLDivElement>(null); // .listing
    useOnClick(ref, () => props.setOpen(false));
    useOnClick(ref2, () => setMenuImages(false));
    
    const [event, setEvent] = useState({
        target : {
            name : "", 
            value: ""
        }
    });

    useEffect(() => {
        props.handleChange(event,2, props.carte, props.famille-1)
        updateImage({variables:{cg_category: props.idCard, cg_family: props.famille, cg_number: props.carte, cg_image: event.target.value}})
    }, [event])



    return(
        <>
            <span className="select">

                <span className="customSelect" onClick={() => props.setOpen(props.open == false ? true : false)}>
                    <span className="choose">Choisissez une catégorie</span>
                </span>

                {/* Ecran 1 */}
                {props.open && !menuImages &&
                    <span className="listing" ref={ref}>
                        {data?.getTags.tags.map((v:any,i:number) => {

                            return(
                                <p data-value={v.tag_num} onClick={async () => {
                                    props.setOpen(false);
                                    setMenuImages(true);
                                    if (!first || !deleteCategory && !deleteSecondCategory){  
                                        const getImages = await images({variables: {img_tag1: idCategory, img_tag2: i+1}}); 
                                        setAllImages({...allImages, img_name : getImages.data?.getImagesByTags.images});
                                        setSecondCategory(v.tag_name); 
                                        setDeleteSecondCategory(false); 
                                    } else{ 
                                        setIdCategory(i+1);
                                        const getImages = await images({variables: {img_tag1: i+1}}); 
                                        setAllImages({...allImages, img_name : getImages.data?.getImagesByTags.images});
                                        setCategory(v.tag_name);
                                        setDeleteCategory(false); 
                                    }

                                }}>{i+1} - {v.tag_name}</p>
                            )
                        })}
                    </span>
                }

                {/* Ecran 2 */}
                {menuImages &&
                    <span className="listing" ref={ref2}>  
                        <span className="listPicto">
                            <div className="navCat">

                                <NavCategory 
                                    setOpen={props.setOpen}
                                    first={first}
                                    setFirst={setFirst}
                                    setDeleteCategory={setDeleteCategory}
                                    setDeleteSecondCategory={setDeleteSecondCategory}
                                    deleteCategory={deleteCategory}
                                    setMenuImages={setMenuImages}
                                    category={category}
                                    deleteSecondCategory={deleteSecondCategory}
                                    secondCategory={secondCategory}
                                />

                            </div>
                            <div className="allPictos">
                                {go && 
                                    allImages.img_name.map((i:any) => {
                                        
                                        const myLoader = () => {
                                            return `/SVG/visus/${i.img_name}`
                                        }

                                        return (
                                            <>  
                                                <span key={i} className="globPicto" onClick={async (e: any) => {
                                                    setEvent({
                                                        ...event as any, 
                                                        target:{
                                                                ...event.target as any, 
                                                                value: `/SVG/visus/${i.img_name}`, 
                                                                name: `image-${props.carte}`
                                                            }
                                                        });
                                                }}>
                                                    <Image 
                                                        loader={myLoader}
                                                        src="me.png"
                                                        alt="Picto"
                                                        width="50"
                                                        height="50"
                                                        className="pictoCard"
                                                        onClick={(e: any) => {
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