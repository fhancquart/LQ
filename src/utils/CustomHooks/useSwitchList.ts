import { useEffect, useState } from 'react';

export function useSwitchList() {

    const [family, setFamily] = useState(0)

    let values = {
        number: 0,
        type:false,
        question:false,
        reponse:false
    };

    const [active,setActive] = useState([values]);

    console.log(active)

    useEffect(() => {
        active.length = 0; //reinit
        for (var i = 1; i <= family; i++) {
          active.push({
              number: i,
              type : false,
              question : false,
              reponse : false,
          });
        }
    }, [family])  

    const handleChangeButtons = async (evt: any) => {
        const value = evt;
        active[value.number - 1] = value; //Pour les index qui démarre à 0
    }

    return [active, setActive, family, setFamily, handleChangeButtons]
}