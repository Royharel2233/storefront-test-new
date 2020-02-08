import React, {useState} from "react";

import { ChromePicker } from "react-color";

// import bedroom from "./img/ShadeExample.png";

import iconSvg from "../../images/z.svg";

import xpng from "../../images/CloseLogo.svg";


// import {
//     VariantsData_variants
//   } from "../../views/BuildShadePage/types/VariantsData";




const ChangeWallColor: React.FC<{
    closeOnClick: any;
    }> = ({ closeOnClick }) => {
      const [showOtherColors, setShowOtherColor] = useState(false)
      const [background, setbackground] = useState("#fff")
      const [backColor, setBackColor] = useState("#fff")
      const [trueForCustomColor, setTrueForCustomColor] = useState(false)


      const closeAction = () => (
          closeOnClick()
      )
      const ChooseColor = () => (
        setShowOtherColor(true)
      ) 
      const closeOtherColor =() => (
        setShowOtherColor(false)
      )
      const handleChangeComplete = (color) => {
        setTrueForCustomColor(true)
        setbackground(color.hex)
      }
      const setBackColorValue = (colorValue) => e => {
        setBackColor(colorValue)
        setTrueForCustomColor(false)
      }
    return (  
      <div className="change_wall_color" style={{ zIndex: 1 }}>
      <div className="upper_items">
        <div className="close_button" onClick={closeAction}><img src={xpng}/></div>
          <h4>Change Wall Color</h4>
          <span>{trueForCustomColor ?
          background
          :
          backColor}
          </span>
            <ul className="list_none">
              <li className="single_color">
                  <div className="color_img white" onClick={setBackColorValue("ffff")}></div>
                    <span>White</span>
              </li>
              <li className="single_color">
                  <div className="color_img black" onClick={setBackColorValue("#000000")}></div>
                    <span>Black</span>
              </li>
              <li className="single_color">
                  <div className="color_img off-white" onClick={setBackColorValue("#F9F5EA")}></div>
                    <span>Off White</span>
              </li>
              <li className="single_color">
                <div className="color_img beige" onClick={setBackColorValue("#C7AF83")}></div>
                  <span>Beige</span>
              </li>
              <li className="single_color">
                <div className="color_img natural" onClick={setBackColorValue("#DECBA1")}></div>
                  <span>Natural</span>
              </li>
              <li className="single_color">
                <div className="color_img gray" onClick={setBackColorValue("#CCCCCC")}></div>
                  <span>Gray</span>
              </li>
              <li className="single_color choose_other">
                  <div className="color_img" onClick={ChooseColor}>
                    <img src={iconSvg}/>
                  </div>
                  <span>Other</span>
              </li>
            </ul>
            {showOtherColors ?
            <div className="select-color-wrraper">  
              <div className="close_button" onClick={closeOtherColor}><img src={xpng} /></div>
              <p><b>Selected HEX:</b> {background}</p>
              <div className="select-color-box"><ChromePicker color={background} onChangeComplete={handleChangeComplete} /></div>
            </div>
            :
            <div></div>

            }
            
          </div>
          <div className="down_items">
            <a href="#"><span>SELECT COLOR</span></a>
            <a href="#"><span>DEFAULT</span></a>
          </div>
        </div>
          );
   }
 export default ChangeWallColor;