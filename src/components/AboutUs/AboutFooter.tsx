import React from "react";
import "./css/style.scss";

import { Link } from "react-router-dom";

import { contactUs } from "../../routes/Routes";

const AboutFooter: React.FC<{}> = () => {
  return (
    <div className="about-us-down-block">
      <h1 className="normal">Interested In Learning More?</h1>
      <Link to={contactUs}>
        <button className="checkout-page-button" type="button">
          CONTACT US
        </button>
      </Link>
    </div>
  );
};

export default AboutFooter;
