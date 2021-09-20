import { useEffect, useState } from 'react';

export function useSwitchList() {

    const [family, setFamily] = useState(0)
    const [group, setGroup] = useState(0)

    const [settings, setSettings] = useState({
        others:{
          field: ""
        },
        cards:[]
      } as any);
    
      useEffect(() => {
        settings.cards.length = 0; //reinit
    
        for (var g = 1; g <= group; g++) { //D'abord les familles
            settings.cards.push(new Array({
              ["familyName-" + g]: "",
              ["color-" + g]: "",
              ["family"]: g,
            }))
        }
    
        settings.cards.forEach((e: any) => {
            for (var i = 1; i <= family; i++) { //Puis les cartes pour chaque familles
                e.push({
                    id: i,
                    ["question-" + i]: "",
                    ["reponse-" + i]: ""          
                } as any)
            }
        })
    
    }, [family, group])  
    
      const handleChange = (evt: any, type:number, i: number, f:number) => {    
        const value = evt.target.value;
        let valueKey = type == 1 ? "others" : "cards";
    
        if(type == 1){
          setSettings({
            ...settings,
            [valueKey]: {
              ...settings[valueKey],
              [evt.target.name]: value
            } 
          });
        } else{
    
          settings.cards[f][i][evt.target.name] = value
          // settings.cards[f][i]["family"] = i
      
          setSettings({
            ...settings,
            others: {
              ...settings.others,
              test: "ok"
            } 
          });
    
        }
        
      }
    
      const handleChangeButtons = async (evt: any) => {
        const value = evt;    
    
        settings.cards[value.id][value.index].question = false
        settings.cards[value.id][value.index].reponse = false
        settings.cards[value.id][value.index][value.field] = true
    
        setSettings({
          ...settings,
          others: {
            ...settings.others,
            field: value.field
          } 
        });
    
      }

    return [family, setFamily, group, setGroup, settings, setSettings, handleChange, handleChangeButtons]
}