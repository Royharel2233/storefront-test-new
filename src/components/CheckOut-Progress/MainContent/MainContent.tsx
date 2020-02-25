import React, { useEffect } from 'react'

import { CheckOutProps } from '../interfaces'
import { PaymentMethod } from "./PaymentMethod";
import { ShippingAddress } from './ShippingAddress'
import { ShippingMethod } from './ShippingMethod'

import '../style/style.scss'

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
                  <ShippingMethod exportObj={exportObj}/>
              </>
            );
            break;
        case 0:
            return (
              <>
              <ShippingAddress exportObj={exportObj} />
              <PaymentMethod/>
            </>
              );
            break;
    }
}
