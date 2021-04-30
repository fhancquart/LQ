import React from "react";
import Link from 'next/link'

export default function Home() {
  return (
    <>      
        <span className="registration">
          <b><h1>Nouveau joueur</h1></b>
          <div className="inputs">
            <input type="email" placeholder="Pseudo ou email"/>
            <input type="password" placeholder="Mot de passe"/>
          </div>
          <Link href="/accueil">
            <button className="big-button orange-button">
              <span className="maj">D</span>
              <span>é</span>
              <span>m</span>
              <span>a</span>
              <span>r</span>
              <span>r</span>
              <span>e</span>
              <span>r</span>
            </button>
          </Link>
            <a>Se connecter</a>
        </span>
    </>
  )
}
