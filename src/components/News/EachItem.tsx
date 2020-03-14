import React from "react";
import "./style/style.scss";
// interface EachItemProps {

// }

import placeholder9 from "../../img/Placeholder9.png";

export const EachItem: React.FC<{}> = ({}) => {
  return (
    <div className="all-news">
          <article id="news-1">
            <div className="row news-block">
              <div className="image-news col-md-2 col-sm-2">
                <img src={placeholder9} className="w-100"/>
              </div>
              <div className="text-news col-md-10 col-sm-10">
                <h4>New Shade Added!</h4>
                <span className="post-date float-right">dec 20, 2020</span>
                <p>
                  Lorem Ipsum. We just added a new fabric to our Double Roller
                  Shades line. This is an exciting opportunity. You asked and we
                  delivered. Lorem Ipsum. We just added a new fabric to our
                  Double Roller Shades line. This is an exciting opportunity.
                  This is an exciting opportunity. This is an exciting
                  opportunity. This is an exciting opportunity. This is an
                  exciting opportunity...
                </p>
                <span className="read-more">read more</span>
              </div>
            </div>
          </article>
        </div>
  );
};
