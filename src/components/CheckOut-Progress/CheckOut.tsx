import React, { useState } from "react";
import { MainContent } from "./MainContent/MainContent";
import { OrderSummary } from "./OrderSummary/OrderSummary";

import "./style.scss";

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
    <div className="checkout-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="checkout-main-content">
              <MainContent exportObj={exportObj} />
              <OrderSummary exportObj={exportObj} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
