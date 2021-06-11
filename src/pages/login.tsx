import React, { useState } from "react";
import { Login } from "../components/Login";
import { Registration } from "../components/Registration";
import { withApollo } from "../utils/withApollo";

const Home: React.FC<{}> = ({}) => {
  
  const [isLogin, setisLogin] = useState(false)

  return (
    <>  
        {isLogin ? 
          <Login setisLogin={setisLogin} /> 
        : 
          <Registration setisLogin={setisLogin} /> 
        }
    </>
  )
}

export default withApollo({ ssr: false })(Home);