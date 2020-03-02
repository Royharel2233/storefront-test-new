import React, { useState } from "react";
import { MainContent } from "./MainContent/MainContent";
import { OrderSummary } from "./OrderSummary/OrderSummary";

import "./style.scss";

export const CheckOut: React.FC<{}> = () => {
  const [tabBar, setTabBar] = useState(0);

  const onTabShippingHandler = (): any => {
    return setTabBar(0)
  };

  const onTabBillingHander = (): any => {
    return setTabBar(1)
  };

  const onTabReviewHander = (): any => {
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
                <li onClick={onTabBillingHander} className={"checkout-menu-item "}>Billing</li>
                <li onClick={onTabReviewHander} className={"checkout-menu-item"}>Review</li>
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
