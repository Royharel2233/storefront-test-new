import React from "react";
import "./style/style.scss";
// interface EachItemProps {

// }

import placeholder9 from "../../img/placeholder9.png";

export const EachItem: React.FC<{}> = ({}) => {
  return (
    <div className="each-item-container w-100">
      <div className="">
        <div className="col-sm-12">
          <span className="news-date">
            <p className="news-created-date">dec 20, 2020</p>
            <p className="read-more">Read more</p>
          </span>
          <img
            src={placeholder9}
            className="each-item-image col-sm-3 p-1 ml-auto"
          />
          <div className="col-sm-9 mt-2">
            <span className="each-item-header">New Shade Added!</span>
          </div>
        </div>
        <div className="p-1 m-1">
          <p className="ml-2 each-item-description">
            Lorem Ipsum. We just added a new fabric to our Double Roller Shades
            line. This is an exciting opportunity. You asked and we delivered.
            Lorem Ipsum. We just added a new fabric to our Double Roller Shades
            line. This is an exciting opportunity. This is an exciting
            opportunity. This is an exciting opportunity. This is an exciting
            opportunity. This is an exciting opportunity...
          </p>
        </div>
      </div>
    </div>
  );
};
