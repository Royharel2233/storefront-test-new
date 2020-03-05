import React from 'react'

import { PaymentMethod } from "../Billing/PaymentMethod";
import { ShippingAddress } from "../Shipping/ShippingAddress";
import { ShippingMethod } from '../Shipping/ShippingMethod'

import '../assets/style.scss'

interface CheckOutProps {
  numberTab: number;
}

export const MainContent: React.FC<CheckOutProps> =
  (props: CheckOutProps) => {

    return (
      <>
        <div className="right-side">
          {RenderPage(props.numberTab)}
        </div>
      </>
    )
  };

const RenderPage = (numberTab: number) => {
  switch (numberTab) {
    case 0:
      return (
        <>
          <ShippingAddress/>
          <ShippingMethod/>
        </>
      );
      break;
    case 1:
      return (
        <>
          <ShippingMethod/>
          <PaymentMethod/>
        </>
      );
      break;

    case 2:
      return (
        <>
          <span>Testing</span>
        </>
      )
  }
};
