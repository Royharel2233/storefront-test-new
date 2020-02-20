
import React from "react";

import xpng from "../../images/CloseLogo.svg";


const BuildMyShadePopUp: React.FC<{
    ClosePopUpAction: any;
    fabricName: any;
    }> = ({ ClosePopUpAction, fabricName }) => {
        const ClosePopUp = () => (
            ClosePopUpAction()
        )
        return(
            <div className="build-my-shade-popup">
        <div className="close_button" onClick={ClosePopUp}><img src={xpng}/></div>
        <div className="popup-title-wrraper">
        <h2 className="dark-grey">{fabricName}</h2>
            <span className="title-devideer"></span>
        </div>
        <div className="popup-content">
            <div className="content-block">
                <p className="title-longer">Product Details</p>
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
                <p className="title-longer">Additional Details</p>
                <div className="slider-block-content">
                    <div className="slider">
                        <img />
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
        </div>
        )
        };
    
export default BuildMyShadePopUp;

