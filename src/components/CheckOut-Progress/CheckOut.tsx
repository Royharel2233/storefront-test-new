import React, { useState } from "react";
import { CheckOutMenu } from "./CheckOutMenu";
import { MainContent } from "./MainContent/MainContent";
import { OrderSummary } from "./OrderSummary/OrderSummary";
// import {useHistory} from 'react-dom'

import "./style/style.scss";

export const CheckOut: React.FC<{}> = () => {
  const [formState, setFormState] = useState(0);
  const [pageState, setPageState] = useState(0);
  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    address: "Demo Address",
    city: "",
    zip: 0,
    state: "",
    country: "",
    email: "",
    phone: "",
  });

  const exportObj = {
    formState,
    setFormState,
    pageState,
    setPageState,
    userState,
    setUserState,
  };

  return (
    <div className="w-1239 checkout-page container">
      <div className="checkout-header">
        <CheckOutMenu exportObj={exportObj} />
        <div className="button-back">
          <i>
            <span className="light-grey">back</span>
          </i>
        </div>
      </div>
      <div className="checkout-main-content">
        <MainContent exportObj={exportObj} />
        <div>
          <OrderSummary exportObj={exportObj} />
        </div>
      </div>
    </div>
  );
};
