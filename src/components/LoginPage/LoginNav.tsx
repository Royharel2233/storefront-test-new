import React from "react";

import { LoginProps } from "./interface";

import './style/style.scss'

export const LoginNav: React.FC<LoginProps> = ({ exportObj }) => {
  return (
    <div className="login-nav">
      <ul className="list_none">
        <li
          className={exportObj.functions.funcStorage.checkPageState(
            exportObj.pageState,
            0
          )}
        >
          <a onClick={() => exportObj.setPageState(0)}>LOGIN</a>
        </li>
        <li
          className={exportObj.functions.funcStorage.checkPageState(
            exportObj.pageState,
            1
          )}
        >
          <a onClick={() => exportObj.setPageState(1)}>SIGN UP</a>
        </li>
      </ul>
    </div>
  );
};
