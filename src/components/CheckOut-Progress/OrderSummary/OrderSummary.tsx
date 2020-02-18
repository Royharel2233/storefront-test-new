import React from "react";
import "../style/style.scss";

import placeholder from "../../../img/Placeholder.png";

import {CheckOutProps} from '../interfaces'
import { SingleItem } from "./SingleItem";

export const OrderSummary: React.FC<CheckOutProps> = ({exportObj}) => {
  return (
    <div className="order-summary mb-2">
      <div className="order-summary-header">
        <h4 className="dark-grey">Order Summary</h4>
        <span className="grey">EDIT</span>
      </div>
      <div className="order-summary-details">
        <div className="fabric-details d-flex justify-content-around">
          <div>
            <SingleItem/>
          </div>
          <div>
            <SingleItem/>
          </div>
        </div>
        <div className="fabric-extra-details d-flex justify-content-center">
          <div className="fabric-extra-details-single-item">
            <img src={placeholder} />
            <div className="fabric-single-item-names">
              <span className="dark-grey">double roller</span>
              <span className="grey">custom build my shade</span>
            </div>
          </div>
          <div className="fabric-extra-details-single-item">
            <img src={placeholder}  />
            <div className="fabric-single-item-names">
              <span className="dark-grey">designer shade</span>
              <span className="grey">custom build my shade</span>
            </div>
          </div>
        </div>
        <div className="ammount-table">
          <table>
            <tbody>
              <tr>
                <th>
                  <p className="dark-grey">Shades</p>
                </th>
                <td>
                  <p className="dark-grey bold">$9200.00</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p className="dark-grey">Shipping</p>
                </th>
                <td>
                  <p className="dark-grey bold">TBD</p>
                </td>
              </tr>
              <tr className="tax">
                <th>
                  <p className="dark-grey">Tax</p>
                </th>
                <td>
                  <p className="dark-grey bold">Not calculated yet</p>
                </td>
              </tr>
              <tr className="total">
                <th>
                  <p className="dark-grey bold">Total</p>
                </th>
                <td>
                  <p className="yellow bold">$9200.00</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
