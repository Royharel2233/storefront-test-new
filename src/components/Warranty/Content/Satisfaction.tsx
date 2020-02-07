import React from "react";
import "./style/style.scss";

export const Satisfaction: React.FC<{}> = ({}) => {
  return (
    <div className="satisfaction-guaranteed warranty-main-content">
      <div className="satisfaction-content">
        For nearly 50 years we’ve made satisfied customers by offering
        incredible products supported by superior service. Order our custom
        products with confidence knowing we stand behind every single product we
        make. If you are not completely satisfied with your purchase, or any
        part of your experience, just let us know. Below are “what if's” we have
        been asked from time to time and how we respond to ensure your
        satisfaction.
        <br />
        <br />
        <p className="title text-style-1 ">FAQ'S </p>
        <div>
          <p className="text-style-2 mb-0 mt-1">
            What if I don’t like what I ordered?
          </p>
          <p>
            If you receive something you do not like, we will do everything
            possible to rectify the issue. For starters, we will remake or
            repair the product to your liking if it was made incorrectly. If you
            simply feel you selected the wrong product or material, we will let
            you choose something else and give you 50% off the retail price of a
            new product. Simply put... it is our mission to satisfy each and
            every customer and we will do whatever is possible to accomplish
            that goal.
          </p>
        </div>
        <div>
          <p className="text-style-2 mb-0 mt-1">
            What if I measure incorrectly?
          </p>
          <p>
            Measure twice; cut once is a good adage. If you find your
            measurements were off and your treatment isn’t fitting quite right,
            we will remake the product the right size and give you a 50%
            discount on the replacement.
          </p>
        </div>
        <div>
          <p className="text-style-2 mb-0 mt-1">
            What if the installation is incorrect?
          </p>
          <p>
            We stand behind every one of our products, however we do not offer
            installation. If your installer measured incorrectly, we will remake
            the product at 50% off the retail price of a new product.
          </p>
        </div>
        <br />
        <div className="mt-3">
          <p className="title text-style-1 ">Got Questions?</p>
          <p>Contact Customer Service at (800) 817-1204 or email us.</p>
        </div>
      </div>
    </div>
  );
};
