import React, { useState } from "react";
import { Login } from "../components/Login";
import { Registration } from "../components/Registration";

export default function Home() { 
  
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
