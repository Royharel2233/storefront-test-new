import React from "react";
import BedRoom from "../../images/bedroom.png";
import "./css/style.scss";

export const AboutMain: React.FC<{}> = () => {
  return (
    <div className="about-us-main-content">
      <img src={BedRoom} />
      <div className="content">
        <h1 className="dark-grey normal">History</h1>
        <p className="dark-grey">
          LuXout Shades is part of LuXout Products, Inc. headquartered in
          Richmond, Virginia. We have been making stage curtains since 1948,
          started dry cleaning residential draperies in 1967 and began making
          window treatments in 1982 as a drapery workroom to the Trade. We
          ceased dry cleaning draperies in 2013 to focus on our shade
          production. As a "to the trade" workroom we have learned how important
          quality, integrity and reliability are to our trade customers. We used
          this understanding of the trade business to apply to our shade
          manufacturing business. As owners of our business we take pride in our
          products and staff. Our pride shows in the quality of our products,
          the incredible care we take in packing our products to ship to you and
          the ease in installation. Our staff signs every product we make. Just
          take a look at a tag on our products and see their pride.
        </p>
      </div>
    </div>
  );
};
