import React, { useState } from "react";
import Select from 'react-select';
import { IconCreditCard } from './../assets/icons/IconCreditCard';

import "../style.scss";

export const PaymentMethod: React.FC<{}> = () => {

  const newPaymentMethod = 'new payment method'

  const [selectedOption, setSelectOption] = useState(null);

  const [displayState, setDisplayState] = useState({
    display: "",
  });

  const onMethodSelect = selectedOption => {
    setSelectOption(selectedOption);

    if (selectedOption.value === newPaymentMethod) {
      setDisplayState({ display: "none" });
    } else {
      setDisplayState({ display: "block" });
    }
  };

  const options = [
    { value: 'post office',
      label: 'post office',
    },

    { value: newPaymentMethod,
      label: newPaymentMethod,
    },

  ];

  return (
    <div className={"payment-method"}>
      <h4 className={"payment-method-title"}>Payment Method</h4>
      <Select
        className={"payment-method-select"}
        value={selectedOption}
        options={options}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#fdcd4a',
            primary: '#fdcd4a',
          },
        })}
        onChange={onMethodSelect}>
      </Select>

      <div className="new-shipping-address" style={displayState}>


      </div>
      <button className={"checkout-page-button"}>
        Review order
      </button>
      <IconCreditCard
        className='icon-payment-method credit-card'
        name="visa"
        height='200px'
        width='28.7px'
      />

      <IconCreditCard
        className='icon-payment-method paypal'
        name="paypal"
        height='180px'
        width='74.6px'
      />

      <IconCreditCard
        className='icon-payment-method credit-card'
        name="american_express"
        height='200px'
        width='28.7px'
      />

      <IconCreditCard
        className='icon-payment-method credit-card'
        name="mastercard"
        height='200px'
        width='28.7px'
      />
    </div>
  )
};
