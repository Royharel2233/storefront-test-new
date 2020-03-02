import React, {useState} from "react";

import "../style.scss";

import { SingleItem } from "./SingleItem";

import { SingleBigItem } from "./SingleBigItem";

const classNames = require('classnames');

export const OrderSummary: React.FC = () => {

 const orderListItem = [1,2,3,4].map( () => {
   return <SingleItem/>
 });

 const orderListBigItem = [1,2,3].map( () => {
   return <SingleBigItem/>
 });

  const [validPromocode, setValidPromocode] = useState<boolean | null>(null);
  const [appliedButton, setAppliedButton] = useState<"APPLY" | "APPLIED">("APPLY");

  const promosOffersButton = classNames('promos-offers-button', validPromocode, {
    'successfully': validPromocode,
    'invalid': !validPromocode,
  });

  const onClickApply = () => {
   setValidPromocode(!validPromocode);
   setAppliedButton("APPLIED")
 };

 const onClickCheckOut = () => {
   setValidPromocode(null);
   setAppliedButton("APPLY")
 };

 const promoCode = "JULY20";

  return (
    <div className="order-summary">
      <div className="order-summary-header">
        <h4>Order Summary</h4>
        <span>EDIT</span>
      </div>
      <div className="order-summary-details">
        <div className="fabric-details ">
          {orderListItem}
        </div>
      </div>

      <div className="fabric-extra-details">
        {orderListBigItem}
      </div>

      <div className="promos-offers">
        <div className="promos-offers-header">PROMOS & OFFERS</div>
        <div className="input-group promos-offers-input-group">

          <input
            type="text"
            className="form-control promos-offers-form"
            placeholder="ENTER PROMO CODE HERE"
            aria-label="Promo code"
            aria-describedby="promo-code" />

            <div className="input-group-append">
              <button
                className={`btn btn-outline-secondary border-0 ${promosOffersButton}`}
                type="button"
                onClick={onClickApply}>{appliedButton}
              </button>
            </div>

        </div>

        {(validPromocode)
        ? <div className="promos-offers-message successfully">
            {`PROMO CODE \"${promoCode}\" WAS APPLIED SUCCESSFULLY`}
          </div>
        : validPromocode === null
            ? null
            :<div className="promos-offers-message invalid">PROMO CODE INVALID</div>
        }
      </div>

      <div className="order-summary-table">
        <div className="order-summary-table-wrap">

          <div className="table-order-row">
            <div className="table-order-text">Shades</div>
            <div className="table-order-data">&#36;9200.00</div>
          </div>

          <div className="table-order-row">
            <div className="table-order-text">Shipping</div>
            <div className="table-order-data">TBD</div>
          </div>

          <div className="table-order-row">
            <div className="table-order-text">Tax</div>
            <div className="table-order-data text-s">Not calculated yet</div>
          </div>

          {(validPromocode)
            ? <div className="table-order-row">
                <div className="table-order-text">Promotion</div>
                <div className="table-order-data promotion">- &#36;20.00</div>
              </div>
            : null
          }

          <div className="table-order-row total">
            <div className="table-order-text">Total</div>
            <div className="table-order-data">&#36;9200.00</div>
          </div>
        </div>
        <button
          className="checkout-page-button" style={{width: "100%"}}
          type="button"
          onClick={onClickCheckOut}>CHECK OUT</button>
      </div>
    </div>
  );
};
