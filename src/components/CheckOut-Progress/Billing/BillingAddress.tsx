import React from "react";
import "../assets/style.scss";
import { PaymentMethod } from "./PaymentMethod";

export const BillingAddress: React.FC<{}> = () => {
  return (
    <>
      <div>Bulling Address</div>
      <PaymentMethod/>
    </>
  )
};
