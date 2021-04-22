import React from "react";
import { Conteneur } from "./components/Conteneur";

export default function Home() {
  return (
    <>
      <Conteneur>
          <img src="" alt=""/>
          <h1>Hello</h1>
          <h2>Bonsoir</h2>
          <p>Lorem ipsum</p>
          <input type="text" placeholder="Test"/>
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
          </select>
          <span className="cta">Couleur</span>
          <button className="big-button"><span>J</span>ouer</button>
      </Conteneur>
    </>
  )
}
