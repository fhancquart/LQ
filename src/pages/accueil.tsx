import React from "react";
import Link from 'next/link'
import Image from 'next/image'

export default function Accueil() {
  return (
    <>      
        <span className="home">
          <h1>Bonjour, prenom</h1>

          <button className="big-button orange-button">
            <div className="card1">
              <Image 
                  src="/SVG/users.svg" 
                  alt="card"
                  width="40"
                  height="39"
              />
            </div>
            <span className="maj">P</span>
            <span>a</span>
            <span>r</span>
            <span>t</span>
            <span>i</span>
            <span>e</span>
          </button>

          <button className="big-button orange-button">
            <div className="card1">
              <Image 
                  src="/SVG/cards.svg" 
                  alt="card"
                  width="40"
                  height="39"
              />
            </div>
            <span className="maj">C</span>
            <span>a</span>
            <span>r</span>
            <span>t</span>
            <span>e</span>
            <span>s</span>
          </button>
        </span>
    </>
  )
}
