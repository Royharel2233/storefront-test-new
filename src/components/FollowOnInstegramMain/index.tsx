import React from 'react';

// import './followOnInstegramMain.scss';
// import './css/bootstrap.css';
// import './css/style.scss';

import image_one from './img/Image1.png';

import image_two from './img/Image2.png';

import image_three from './img/Image3.png';

import image_four from './img/Image4.png';

import image_five from './img/Image5.png';

import instagrem_small from './img/instagramsmall.svg';



const FollowOnInstegramMain = () => (
  <div className="FollowOnInstegramMain">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="main_title">
            Follow Our Instagram
          </h2>
          <a href="https://www.instagram.com/luxoutshades/" className="insta_id">
            <img src={instagrem_small} alt="Instagram" width="10" />
             @luxoutshades
          </a>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Vivamus<br />
            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <ul className="list-inline instafeed mb-0">
            <li className="list-inline-item">
              <a href="#"
              ><img src={image_one} className="img-fluid" alt="feed1"
              /></a>
            </li>
            <li className="list-inline-item">
              <a href="#"
              ><img src={image_two} className="img-fluid" alt="feed2"
              /></a>
            </li>
            <li className="list-inline-item">
              <a href="#"
              ><img src={image_three} className="img-fluid" alt="feed3"
              /></a>
            </li>
            <li className="list-inline-item">
              <a href="#"
              ><img src={image_four} className="img-fluid" alt="feed4"
              /></a>
            </li>
            <li className="list-inline-item">
              <a href="#"
              ><img src={image_five} className="img-fluid" alt="feed5"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
export default FollowOnInstegramMain;


