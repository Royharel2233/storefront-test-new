import React from "react";
import { CheckOutMenu } from "./CheckOutMenu";
import { MainContent } from './MainContent/MainContent'
import { OrderSummary } from "./OrderSummary/OrderSummary";

import './style/style.scss'


export const CheckOut: React.FC<{}> = () => {
    return (
        <div className="w-1239 checkout-page">
            <div className="checkout-header">
                <CheckOutMenu />
                <div className="button-back">
                    <i></i>
                    <span className="light-grey">back</span>
                </div>
            </div>
            <div className="checkout-main-content">
                <MainContent />
                <div>
                    <OrderSummary />
                </div>
            </div>
        </div>
    );
};
