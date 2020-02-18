import React, { useContext, useState } from "react";

// interface LoginProps {

// }
import { MiscFunctionsContext } from "@temp/context/MiscFunctions";

import { LuxoutLogin } from "./LuxoutLogin";

import { LuxoutSignUp } from "./LuxoutSignUp";

import { LoginNav } from "./LoginNav";

import "./style/style.scss";

export const LoginMain: React.FC<{}> = ({}) => {

  const [pageState, setPageState] = useState(1);
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  })

  const exportObj = {
    pageState,
    setPageState,
    loginState,
    setLoginState,
    functions: useContext(MiscFunctionsContext),
  }

  return (
    <div className="container login-page ">
      <div className="login-banner">
        <div className="content">
          <h1 className="m-auto">Enter the Luxout Expirience</h1>
          <p className="m-auto">
            Join us today to receive exclusive offers and pricing to the trade
            only
          </p>
        </div>
      </div>
      <div className="login-container">
        <LoginNav exportObj={exportObj}/>
        <div>
          {exportObj.functions.funcStorage.RenderPage(
            pageState,
            exportObj,
            LuxoutLogin,
            LuxoutSignUp
          )}
        </div>
      </div>
    </div>
  );
};

