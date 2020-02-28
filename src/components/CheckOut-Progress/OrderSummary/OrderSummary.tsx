import React from "react";

import "../style.scss";

import {CheckOutProps} from '../interfaces';

import { SingleItem } from "./SingleItem";

import { SingleBigItem } from "./SingleBigItem";

export const OrderSummary: React.FC<CheckOutProps> = ({exportObj}) => {

 const orderListItem = [1,2,3,4].map( () => {
   return <SingleItem/>
 });

 const orderListBigItem = [1,2,3].map( () => {
   return <SingleBigItem/>
 });

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

          <div className="table-order-row total">
            <div className="table-order-text">Total</div>
            <div className="table-order-data">&#36;9200</div>
          </div>
        </div>
      </div>

    </div>
  );
};
