import React from "react";
import fabric from "../../../img/Fabric.png";

export const SingleItem: React.FC<{}> = ({}) => {
  return (
    <div className="order-small__item">
      <div className="order-small__wrap-image">
        <img src={fabric} />
      </div>

      <div className="order-small__item-names">
        <span>IVORY</span>
        <span>DIXIE (MILAN)</span>
      </div>
    </div>
  );
};
