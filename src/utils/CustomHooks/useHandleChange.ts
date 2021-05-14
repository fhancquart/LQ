import { useState } from "react";


export default function useHandleChange(evt: any, type:number) {

    const [settings, setSettings] = useState({
        others:{},
        cards:{}
    });

    const value = evt.target.value;
    
    if(type == 1){
      setSettings({
        ...settings,
        others: {
          ...settings.others,
          [evt.target.name]: value
        }
      });
    } else{
      setSettings({
        ...settings,
        cards: {
          ...settings.cards,
          [evt.target.name]: value
        }
      });
    }   

    return [settings, setSettings]
  }