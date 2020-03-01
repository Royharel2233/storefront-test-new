import React, { useEffect } from 'react'

import { PaymentMethod } from "../Billing/PaymentMethod";
import { CheckOutProps } from '../interfaces'
import { ShippingAddress } from '../Shipping/ShippingAddress'
import { ShippingMethod } from '../Shipping/ShippingMethod'

import '../style.scss'

export const MainContent: React.FC<CheckOutProps> = ({ exportObj }) => {

  useEffect(() => {
    RenderPage(exportObj.formState, exportObj);
    return () => {
      RenderPage(0, exportObj)
    };
  }, [exportObj.formState]);

  return (
    <div className="right-side">
      {RenderPage(exportObj.formState, exportObj)}
    </div>
  )
};

function RenderPage(param: number, exportObj) {
  switch (param) {
    case 1:
      return (
        <>
          <ShippingAddress exportObj={exportObj} />
          <ShippingMethod/>
        </>
      );
      break;
    case 0:
      return (
        <>
          <ShippingAddress exportObj={exportObj} />
          <ShippingMethod/>
          <PaymentMethod/>
        </>
      );
      break;
  }
}
