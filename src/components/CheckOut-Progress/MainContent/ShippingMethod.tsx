import React from "react";
import "../style/style.scss";

import { styled } from "@styles";

export const Checkbox = styled.div`
  .row {
    display: inline-block;
    > input {
      opacity: 0;
    }

    > label {
      display: initial;
      font-family: Lato;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.63;
      letter-spacing: 0.4px;
      color: #343538;
    }

    > p {
      font-family: Lato;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.59;
      letter-spacing: 0.27px;
    }
    > input + label {
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 3px;
        width: 13px;
        width: 13.2px;
        height: 13.1px;
        border-radius: 50%;
        background: white;
        border: 1px solid black;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
      }
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 3px;
        width: 13px;
        width: 13.2px;
        height: 13.1px;
        border-radius: 50%;
        background: #fdcd4a;
        border: 1px solid black;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
        transition: all 0.2s;
      }
    }

    > input:not(:checked) + label {
      &:after {
        opacity: 0;
        transform: scale(0);
      }
    }
    > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
    }
    > input:checked + label {
      &:after {
        opacity: 1;
        transform: scale(1);
      }
    }
    > input:disabled:checked + label {
      &:after {
        color: #999;
      }
    }
    > input:disabled + label {
      color: #aaa;
    }
    > input:checked:focus + label,
    input:not(:checked):focus + label {
      &:before {
        border: 1px dotted blue;
      }
    }
  }
`;

import { CheckOutProps } from "../interfaces";

export const ShippingMethod: React.FC<CheckOutProps> = ({}) => {
  const [currentMethod, setCurrentMethod] = React.useState("");

  const checkIfAttributeIsChecked = (slug: string) => {
        if (currentMethod === slug) {
          return true;
        } else {
          return false;
        }
  };

  return (
    <div className="shipping-method" style={{ display: "block" }}>
      <h3 className="dark-grey">Shipping Method</h3>
      <div className="shipping-method-table">
        <Checkbox className="p-2 m-2">
          <div className="row">
            <input
              tabIndex={-1}
              type="checkbox"
              name="fixedFright"
              checked={
                currentMethod === "fixed-fright"
                  ? checkIfAttributeIsChecked(currentMethod)
                  : null
              }
              value="fixed-fright"
              readOnly
              className="dark-grey bold"
            />
            <label onClick={() => setCurrentMethod("fixed-fright")}>
              Fixed Fright
            </label>
            <div className="d-inline-block float-right mr-3">
              <p className="shipping-price ">$15/Shade*</p>
            </div>
            <p className="mt-0 ml-4 p-1">
              *Freight is $15/shade up to 90” wide.
              <br />
              *For shades over 90”, a quote is needed. Choose this option and a
              LuXout representative will reach out to you shortly after placing
              your order.
            </p>
          </div>
          <hr className="bg-dark" />
          <div className="row">
            <input
              tabIndex={0}
              type="checkbox"
              name="airFright"
              checked={
                currentMethod === "air-fright"
                  ? checkIfAttributeIsChecked("air-fright")
                  : null
              }
              value="air-fright"
              readOnly
              className="dark-grey bold"
            />
            <label onClick={() => setCurrentMethod("air-fright")}>
              Air Fright
            </label>
            <div className="d-inline" >
              <p className="shipping-price text-right">$100</p>
            </div>
          </div>
        </Checkbox>
      </div>

      <button
        className="checkout-page-button shipping-method-button"
        type="button"
      >
        CONTINUE TO BILLING
      </button>
    </div>
  );
};
