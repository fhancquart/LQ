import { useEffect, useState } from 'react';

export function useSwitchList() {

    const [family, setFamily] = useState(0)
    const [group, setGroup] = useState(0)

    let first = {
        id: 0,
        content: {}
    }

    let values = {
        number: 0,
        type:false,
        question:false,
        reponse:false
    };

    const [active,setActive] = useState([first]);

    useEffect(() => {
        active.length = 0; //reinit

        for (var g = 1; g <= group; g++) { //D'abord les familles
            active.push({
                id: g,
                content: [values]
            })
        }

        active.forEach((e) => {
            // console.log(e.content)
            for (var i = 1; i <= family - 1; i++) { //Puis les cartes pour chaque familles
                e.content.push({
                    number: i,
                    type:false,
                    question:false,
                    reponse:false
                } as any)
            }
        })

    }, [family, group])  

    const handleChangeButtons = async (evt: any) => {
        const value = evt;
        active[value.id-1].content[value.content[0].number -1] = value.content[0]; //Pour les index qui démarre à 1
    }

    return [active, setActive, family, setFamily, group, setGroup, handleChangeButtons]
}