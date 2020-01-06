import "./scss/index.scss";

// import selectColor from "../../images/select-color.png";

import "./scss/ustyle.css";

// import "./scss/style.css";

import BuildMyShadeLeftSide from "../../components/BuildMyShadeLeftSide";

import BuildMyShadeRightSide from "../../components/BuildMyShadeRightSide";

// import "./scss/bootstrap.css";

import * as React from "react";



// import { IFilterAttributes, IFilters } from "@types";
// import { Breadcrumbs, ProductsFeatured, ProductsList } from "../../components";
// import { getDBIdFromGraphqlId, maybe } from "../../core/utils";

// import { ProductListHeader } from "../../@next/components/molecules";
// import { FilterSidebar } from "../../@next/components/organisms/FilterSidebar";
// import { Collection_collection, Collection_products } from "./types/Collection";



const Page: React.FC = () => {
  return (
  <>
  <div className="container">
      <div className="build-my-shade-main w-1239">
        <BuildMyShadeLeftSide />
        <BuildMyShadeRightSide />
      </div>

  {/* <div className="build-my-shade-popup">
      <div className="close_button"><img src={xpng}/></div>
      <div className="popup-title-wrraper">
          <h2 className="dark-grey">Double Roller</h2>
          <span className="title-devideer"></span>
      </div>
      <div className="popup-content">
          <div className="content-block">
              <p className="title">Product Details</p>
              <p>A beautiful basic light filtering solid that will help eliminate glare, maintain natural light and provide full privacy. Translucent with a subtle texture.</p>
          </div>
          <div className="content-block">
              <p className="title">Materials</p>
              <p>An exclusive collection of 800+ materials</p>
          </div>
          <div className="content-block three-items">
              <div className="inner-items">
              <div className="first">
                  <p className="title">Min Size</p>
                  <p>12” x 12”</p>
              </div>
              <div className="second">
                  <p className="title">Max Size*</p>
                  <p>118” x 144”</p>
              </div>
              <div className="third">
                  <p className="title">Customizable</p>
                  <p>To the 1/8”</p>
              </div>
              </div>
              <span>*Depending on Fabric Width & Thickness</span>
          </div>
          <div className="content-block">
              <p className="title">Ships In</p>
              <p>Approximately 15 business days</p>
          </div>
          <div className="slider-block">
              <p className="title">Additional Details</p>
              <div className="slider-block-content">
                  <div className="slider">
                      <img src={bedroom} />
                  </div>
                  <div className="slider-text">
                      <ul className="">
                          <li><span className="light-grey">Half wrapped bottom bar ensures a clean hang (no creases)</span></li>
                          <li><span className="light-grey dark">Crush cutting helps eliminate frayed edges</span></li>
                          <li><span className="light-grey">Hung and tested prior to leaving our workroom</span></li>
                          <li><span className="light-grey">Meets the strictest child safety standards</span></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </div> */}
  </div>
</>
  );
};

export default Page;
