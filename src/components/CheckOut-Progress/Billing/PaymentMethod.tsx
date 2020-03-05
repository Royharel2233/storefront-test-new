import React, { useState } from "react";
import Select from 'react-select';
import { IconCreditCard } from './../assets/icons/IconCreditCard';
import { IconPaypal } from "./../assets/icons/IconPaypal";

import "../style.scss";


export const PaymentMethod: React.FC<{}> = () => {

  const newPaymentMethod = 'new payment method';

  const [selectedOption, setSelectOption] = useState(null);

  const [displayState, setDisplayState] = useState({
    display: "",
  });

  const onMethodSelect = selectedOption => {
    setSelectOption(selectedOption);

    if (selectedOption.value === newPaymentMethod) {
      setDisplayState({ display: "block" });
    } else {
      setDisplayState({ display: "none" });
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

      <div className="new-payment_method" style={displayState}>

        <div
          // onClick={onChangeHandler}
          className="form-field-radio">
          <label>
            <input
              id="credit-card"
              name="method"
              checked
              type="radio"
              value="credit-card"
            />
            Credit Card
            <IconCreditCard
              className="credit-card"
              name="mastercard"
              height='20px'
              width='28.7px'
            />
            <IconCreditCard
              className="credit-card"
              name="visa"
              height='20px'
              width='28.7px'
            />
            <IconCreditCard
              className="credit-card"
              name="american_express"
              height='200px'
              width='28.7px'
            />
            <span className="checkmark">{''}</span>
          </label>
        </div>

          <div className='credit-card-details'>
            <div className='card-number field'>
              <label>CARD NUMBER</label>
              <input
                className={"form-field-input"}
                type="text"
                id="card-number" />
            </div>

            <div className='validity-term field'>
              <label>MM/YY</label>
              <input
                className={"form-field-input"}
                type="text"
                id="validity-term" />
            </div>

          <div className='security-code field'>
            <label>SECURITY CODE</label>
            <input
              className={"form-field-input"}
              type="text"
              id="security-code" />
          </div>
      </div>

        <div className="form-field-radio">
          <label>
          <input
            id="paypal"
            name="method"
            type="radio"
            value="paypal"
          />
            <IconPaypal/>
            <span className="checkmark">{''}</span>
          </label>
        </div>

        <div className="form-field w-100 mt-3">
          <div className="form-field-checkbox">
            <input
              type="checkbox"
              name="save_payment_method"
              id="save_payment_method"
              value="save_payment_method"
            />

            <label
              className={"form-field-checkbox-label"}
              htmlFor="save_payment_method">Save payment method for future use
            </label>
          </div>
        </div>

      </div>
      <button className="checkout-page-button">
        Review order
      </button>
    </div>
  )
};
