import React from "react";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <>      
        <span className="registration">
          <b><h1>Nouveau joueur</h1></b>
          <div className="inputs">
            <input type="email" placeholder="Pseudo ou email"/>
            <input type="password" placeholder="Mot de passe"/>
          </div>
            
          <Button
            text="Démarrer"
            wButton="big"
            cButton="orange"
            isImage={false}
            link="/accueil"
          />
            <a>Se connecter</a>
        </span>
    </>
  )
}
