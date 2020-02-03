import React from "react";
import "./style/style.scss";

export const DeliveryMethod: React.FC<{}> = () => {
  return (
    <div className="delivery-method">
      <h1 className="dark-grey">Delivery Methods*</h1>
      <div className="content">
        <div className="methods">
          <div className="single-method">
            <i>
              <img />
            </i>
            <h3>$15 Fixed Freight</h3>
            <p>
              Standard ground freight is our regular shipping method. Freight is
              $15/shade up to 90” wide. Shades over 90” wide must be quoted.
            </p>
          </div>
          <div className="single-method">
            <i>
              <img />
            </i>
            <h3>Air Freight</h3>
            <p> Collect freight charges will apply.</p>
          </div>
          <div className="single-method">
            <i>
              <img />
            </i>
            <h3>Pick Up</h3>
            <p>Free of charge.</p>
          </div>
        </div>
        <div className="methods-more-details">
          <p>
            <p className="title">*Oversized Shipping Charge</p>
            Orders requiring LTL freight shipment or expedited freight (orders
            that can not or are desired to ship other than standard ground UPS
            freight) call for freight charge.
            <br />
            <br />
            <p className="title">*All shipments F.O.B. Richmond, VA USA.</p>
            Orders without specific shipping directions will be shipped the
            method deemed most suitable by LuXout. LuXout does not take
            responsibility for shipping delays, damages, or losses. Please
            inspect products upon receipt and immediately notify the shipper and
            make claim for damages. We are not responsible for trip charges and
            installation costs. Any international duties, customs fees or taxes
            are the buyer’s responsibility.
          </p>
        </div>
      </div>
    </div>
  );
};
