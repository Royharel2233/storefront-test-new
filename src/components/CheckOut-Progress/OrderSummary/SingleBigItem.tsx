import React from "react";
import placeholder from "../../../img/Placeholder.png";

export const SingleBigItem: React.FC<{}> = ({}) => {
  return (

      <div className="fabric-extra-details-single-item">
        <div className="wrap-image">
          <img src={placeholder} />
        </div>

        <div className="fabric-single-item-names">
          <span>double roller</span>
          <span>fabric detail here</span>
          <span>quantity: 01</span>
        </div>
      </div>

  );
};
