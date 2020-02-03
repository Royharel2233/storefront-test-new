import React from "react";
import "../style/style.scss";

export const ShippingMethod: React.FC<{}> = () => {
  return (
    <div className="shipping-method">
      <h3 className="dark-grey">Shipping Method</h3>
      <div className="shipping-method-table">
        <table>
          <tbody>
            <tr className="fixed-freight-tr selected">
              <th>
                <p className="dark-grey bold">Fixed Freight</p>
              </th>
              <td>
                <p className="dark-grey bold">$15/shade*</p>
              </td>
            </tr>
            <tr className="fixed-freight-note-tr">
              <td>
                <p className="fixed-freight-note">
                  *Freight is $15/shade up to 90” wide.
                  <br />
                  *For shades over 90”, a quote is needed. Choose this option
                  and a LuXout representative will reach out to you shortly
                  after placing your order.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <p className="dark-grey bold">Air Freight</p>
              </th>
              <td>
                <p className="dark-grey bold">$100</p>
              </td>
            </tr>
            <tr>
              <th>
                <p className="dark-grey bold">Pick Up</p>
              </th>
              <td>
                <p className="dark-grey bold">Free</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="checkout-page-button shipping-method-button"
        type="button"
      >
        CONTINUE TO BILLING{" "}
      </button>
    </div>
  );
};
