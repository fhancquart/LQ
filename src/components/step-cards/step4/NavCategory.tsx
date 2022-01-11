import React from "react";

interface NavCategoryProps{
    setOpen: any
    first: any
    setFirst: any
    setDeleteCategory: any
    setDeleteSecondCategory: any
    deleteCategory: any
    setMenuImages: any
    category: string
    deleteSecondCategory: boolean
    secondCategory: string
}

export const NavCategory: React.FC<NavCategoryProps> = (props) => {

    return(
        <>
            <span className="add" onClick={() => {
                props.setOpen(true);
                if (props.first){ 
                    props.setFirst(false); 
                    props.setDeleteCategory(false); 
                    props.setDeleteSecondCategory(false);
                } else{ 
                    props.setFirst(true); 
                    props.setDeleteCategory(false); 
                    if(props.deleteSecondCategory){
                        props.setFirst(true); 
                    }  else{
                        props.setFirst(false); 
                        props.setDeleteCategory(false); 
                    }
                }
                props.setMenuImages(false)
            }}>+</span>

            {!props.deleteCategory && props.category != "" &&
                <span className="pastille" onClick={() => {
                    props.setDeleteCategory(true);
                    props.setFirst(false); 
                }}>
                        <span className="plus">+</span>{props.category}
                </span>
            }

            {!props.deleteSecondCategory && props.secondCategory != "" && 
                <span className="pastille secondP" onClick={() => {
                    props.setDeleteSecondCategory(true);
                    props.deleteCategory ? props.setFirst(false) : props.setFirst(true); //gestion suppr des 2 pastilles
                }}>
                    <span className="plus">+</span>{props.secondCategory}
                </span>
            }
        </>
    )
}

