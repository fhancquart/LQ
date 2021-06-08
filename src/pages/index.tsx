import React from "react";
import { Button } from "../components/Button";
import { useMeQuery } from "../generated/graphql";
import { useIsAuth } from "../utils/useIsAuth";

export default function Accueil() {

  useIsAuth();
  const {data: meData} = useMeQuery()

  return (
    <>      
        <span className="home">
          <b><h1>Bonjour, {meData?.me?.username}</h1></b>

          <Button
            text="Partie"
            wButton="big"
            cButton="orange"
            isImage={true}
            image="users.svg"
            wImage={40}
            hImage={39}
            link="/accueil"
          />

          <Button
            text="Cartes"
            wButton="big"
            cButton="orange"
            isImage={true}
            image="cards.svg"
            wImage={40}
            hImage={39}
            link="/cartes"
          />

        </span>
    </>
  )
}
