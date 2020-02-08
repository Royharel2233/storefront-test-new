import React from "react";

export const ImageContent: React.FC<{}> = ({}) => {
  return (
    <div className="img-content">
      <div className="single-img">
        <img />
        <div className="details">
          <p className="name charcoal-black">double roller</p>
          <p className="type light-grey">fabric detail here</p>
          <p className="quantity grey">quantity: 01</p>
        </div>
      </div>
    </div>
  );
};
