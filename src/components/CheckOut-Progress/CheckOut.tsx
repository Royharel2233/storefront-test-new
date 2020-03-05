import React, { useState } from "react";
import { MainContent } from "./MainContent/MainContent";
import { OrderSummary } from "./OrderSummary/OrderSummary";

import "./assets/style.scss";

export const CheckOut: React.FC<{}> = () => {
  const [tabBar, setTabBar] = useState(0);

  const onTabShippingHandler = (): any => {
    return setTabBar(0)
  };

  const onTabBillingHandler = (): any => {
    return setTabBar(1)
  };

  const onTabReviewHandler = (): any => {
    return setTabBar(2)
  };


  return (
    <div className="checkout-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="checkout-navbar">
              <div className="checkout-navbar-back">
                <div className="checkout-navbar-back-wrap">
                  <span className="checkout-navbar-back-wrap-arrow"></span>
                  <span className="checkout-navbar-back-wrap-text">Back</span>
                </div>
              </div>

              <ul className="checkout-menu" >
                <li onClick={onTabShippingHandler} className={"checkout-menu-item active"}>Shipping</li>
                <li onClick={onTabBillingHandler} className={"checkout-menu-item"}>Billing</li>
                <li onClick={onTabReviewHandler} className={"checkout-menu-item"}>Review</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="checkout-main-content">
              <MainContent  numberTab={tabBar} />
              <OrderSummary/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
