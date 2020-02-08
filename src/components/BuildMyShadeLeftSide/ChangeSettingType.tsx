import React from "react";

// import bedroom from "./img/ShadeExample.png";
import xpng from "../../images/CloseLogo.svg";

import ShadeExample from "../../images/ShadeExample.png";



// import {
//     VariantsData_variants
//   } from "../../views/BuildShadePage/types/VariantsData";




const ChangeSettingType: React.FC<{
    closeOnClick: any;
    ChangeBackground: any;
    }> = ({ closeOnClick, ChangeBackground }) => {
    const ChangeBackgroundColor = (backgroundUrlValue) => e => {
        ChangeBackground(backgroundUrlValue)
    }
    const closeAction = () => {
        closeOnClick()
    }
   return (  
    <div className="change-setting">
      <div className="close_button" onClick={closeAction}><img src={xpng}/></div>
        <h4>Change Setting</h4>
        <ul className="change-setting-img-slider list_none">
          <li className="img_slider_single_item">
            <img src={ShadeExample} onClick={ChangeBackgroundColor("../../images/ShadeExample.png")} />
            <div className="single_title">
              <p>ShadeExample</p>
            </div>
          </li>
          <li className="img_slider_single_item">
            <img src={ShadeExample} onClick={ChangeBackgroundColor("1")}/>
            <div className="single_title">
              <p>Kitchen</p>
            </div>
          </li>
          <li className="img_slider_single_item">
            <img src={ShadeExample} onClick={ChangeBackgroundColor("2")}/>
            <div className="single_title">
            <p>Living Room</p>
            </div>
          </li>
          <li className="img_slider_single_item">
            <img src={ShadeExample} onClick={ChangeBackgroundColor("3")}/>
            <div className="single_title">
              <p>ShadeExample</p>

            </div>
          </li>
        </ul>
        <div className="down_items">
          <a href="#"><span>CONFIRM ROOM</span></a>
          <a href="#"><span>DEFAULT</span></a>
        </div>
      </div>
        );
   }
 export default ChangeSettingType;