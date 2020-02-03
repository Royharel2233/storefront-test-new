import React from "react";

import "./style/style.scss";

import bedroom from "../../images/bedroom.png";

export const FabricGallery: React.FC<{}> = () => {
  return (
    <div className="fubric-gallery">
      <h4 className="row">Fabric: Dixie (Milan)</h4>
      <div className="gallery d-flex justify-content-between flex-wrap">
        <div className="single-gallery">
          <a href="#">
            <img src={bedroom} />
          </a>
          <div className="content">
            <h3>Inky</h3>
            <div className="button">
              <a href="#">
                <span>ORDER SWATCH</span>
              </a>
              <hr />
            </div>
            <div className="button">
              <a href="#">
                <span>BUILD MY SHADE</span>
              </a>
              <hr />
            </div>
          </div>
        </div>
        <div className="single-gallery">
          <a href="#">
            <img src={bedroom} />
          </a>
          <div className="content">
            <h3>Inky</h3>
            <div className="button">
              <a href="#">
                <span>ORDER SWATCH</span>
              </a>
              <hr />
            </div>
            <div className="button">
              <a href="#">
                <span>BUILD MY SHADE</span>
              </a>
              <hr />
            </div>
          </div>
        </div>
        <div className="single-gallery">
          <a href="#">
            <img src={bedroom} />
          </a>
          <div className="content">
            <h3>Inky</h3>
            <div className="button">
              <a href="#">
                <span>ORDER SWATCH</span>
              </a>
              <hr />
            </div>
            <div className="button">
              <a href="#">
                <span>BUILD MY SHADE</span>
              </a>
              <hr />
            </div>
          </div>
        </div>
        <div className="single-gallery">
          <a href="#">
            <img src={bedroom} />
          </a>
          <div className="content">
            <h3>Inky</h3>
            <div className="button">
              <a href="#">
                <span>ORDER SWATCH</span>
              </a>
              <hr />
            </div>
            <div className="button">
              <a href="#">
                <span>BUILD MY SHADE</span>
              </a>
              <hr />
            </div>
          </div>
        </div>
        <div className="single-gallery">
          <a href="#">
            <img src={bedroom} />
          </a>
          <div className="content">
            <h3>Inky</h3>
            <div className="button">
              <a href="#">
                <span>ORDER SWATCH</span>
              </a>
              <hr />
            </div>
            <div className="button">
              <a href="#">
                <span>BUILD MY SHADE</span>
              </a>
              <hr />
            </div>
          </div>
        </div>
        <div className="single-gallery">
          <a href="#">
            <img src={bedroom} />
          </a>
          <div className="content">
            <h3>Inky</h3>
            <div className="button">
              <a href="#">
                <span>ORDER SWATCH</span>
              </a>
              <hr />
            </div>
            <div className="button">
              <a href="#">
                <span>BUILD MY SHADE</span>
              </a>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
