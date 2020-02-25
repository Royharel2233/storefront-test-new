import React, { useEffect, useState } from "react";

import NewsLetterSignUp from "../NewsLetterSignUp";

import logo_image from "../../img/logo_lux.svg";

import facebook from "../../img/Facebook.svg";

import instagrem from "../../img/Instagram.svg";

import pintrest from "../../img/Pinterest.svg";

import houzz from "../../img/Houzz.svg";

import youtube from "../../img/Youtube.svg";

import { Link } from "react-router-dom";

const classNames = require('classnames');

import {
  aboutUs,
  contactUs,
  shippingHandling,
  warrantyPage,
} from "../../routes/Routes";

const FooterMain = () => {

  const [visible, setVisible] = useState<boolean>(true);
  const namepage = window.location.pathname;

  useEffect(() => {
    if (namepage.indexOf('check-out') !== -1) {
      setVisible(false)
    }
  },[]);

  const visibleFooter = classNames('FooterMain', visible, {
    'no-visible': !visible,
  });

  return (
    <div className={visibleFooter}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <a href="/">
              <img src={logo_image} className="img-fluid logo" alt="logo" />
            </a>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-md-3">
                <ul className="list-unstyled mb-0">
                  <li>PRODUCT</li>
                  <li>
                    <a href="#">Installation</a>
                  </li>
                  <Link to={warrantyPage}>
                    <li>
                      <a href="#">Warranty</a>
                    </li>
                  </Link>
                  <li>
                    <a href="#">Child Safety</a>
                  </li>
                  <li>
                    <a href="#">Videos</a>
                  </li>
                  <li>
                    <a href="#">Motorization</a>
                  </li>
                  <li>
                    <a href="#">Finishing Touches</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="list-unstyled mb-0">
                  <li>about</li>
                  <li>
                    <a href="#">Why LuXout?</a>
                  </li>
                  <Link to={contactUs}>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </Link>
                  <Link to={aboutUs}>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                  </Link>
                  <Link to={shippingHandling}>
                    <li>
                      <a href="#">Shipping + Handling</a>
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="list-unstyled">
                  <li>to the trade</li>
                  {/* <Link to={projectCenter}>
                    <li>
                      <a href="#">Project Center</a>
                    </li>
                  </Link> */}
                  <li>
                    <a href="#">Orders</a>
                  </li>
                  <li>
                    <a href="#">Product Details</a>
                  </li>
                  <li>
                    <a href="#">Photography</a>
                  </li>
                  {/* <Link to={newsPage}>
                    <li>
                      <a href="#">News</a>
                    </li>
                  </Link> */}
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="list-unstyled">
                  <li>legal</li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <NewsLetterSignUp />
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-sm-6">
            <p className="mb-0">© 2019 LuXout Shades All Rights Reserved</p>
          </div>
          <div className="col-sm-6">
            <ul className="list-inline text-sm-right mb-0">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/LuXoutShades/">
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/luxoutshades/">
                  <img src={instagrem} alt="Instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.pinterest.com/search/pins/?q=luxout%20shades">
                  <img src={pintrest} alt="Pinterest" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.houzz.com/professionals/window-treatments/luxout-shades-pfvwus-pf~1419787701">
                  <img src={houzz} alt="Houzz" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.youtube.com/channel/UCaqqsXVBCDjXcQBhe0J8Sjg">
                  <img src={youtube} alt="Youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};
export default FooterMain;
