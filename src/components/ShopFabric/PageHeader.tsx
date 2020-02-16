import React from "react";
<<<<<<< HEAD
import background from "../../img/shopfabricback.png";
=======
import background from "../../images/shopfabricback.png";
>>>>>>> 8dd861e25a49388e8a863aa72404a7f1abcbbccb
import "./style/style.scss";

export const PageHeader: React.FC<{}> = ({}) => {
  return (
    <div className="page-header">
      <div className="text">
        <h1 className="dark-grey">Shop Fabrics</h1>
        <p className="light-grey">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        </p>
        <div className="button-view-more">
          <a href="#">
            <span className="dark-grey">VIEW MORE</span>
          </a>
          <hr />
        </div>
      </div>
      <div className="img">
        <img src={background} />
      </div>
    </div>
  );
};
