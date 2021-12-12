import React from "react";
import { Button } from "../components/Button";
import { useMeQuery } from "../generated/graphql";
import { useIsAuth } from "../utils/useIsAuth";
import { withApollo } from "../utils/withApollo";

const Accueil = () => {

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
            link="/"
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

export default withApollo({ ssr: true })(Accueil);