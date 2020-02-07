import React from "react";
import fabric from "../../../img/Fabric.png";

export const SingleItem: React.FC<{}> = ({}) => {
  return (
    <div className="fabric-single-item">
      <img src={fabric} />
      <div className="fabric-single-item-names">
          <span className="dark-grey">IVORY</span>
          <span className="grey text-center">DIXIE (MILAN)</span>
      </div>
    </div>
  );
};
