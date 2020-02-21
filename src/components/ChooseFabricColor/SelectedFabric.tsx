import React, { useState } from "react";

// import bedroom from "./img/ShadeExample.png";

import closeLogoSource from "../../images/CloseLogo.svg";

import addLogoSource from "../../images/PlusLogo.svg";

import ContniueLogo from "../../images/ContniueLogo.svg";

import OrderSwatchLogo from "../../images/OrderSwatchLogo.svg";

import SwatchAddedLogo from "../../images/SwatchAddedLogo.svg";



// import {
//     VariantsData_variants
//   } from "../../views/BuildShadePage/types/VariantsData";



interface SelectedFabricProps {
    chosenColorIndex: number;
    ChoiceName: string;
    closeSelectedView: () => void;
    fabricData: number;
    shadeIndex: number;
    imageUrl: string;
    maxShadeWidth: string;
    fabricWidth: string;
    fabricContent: string;
    FarbricNmber: string;
    loggedIn: boolean;
    addToCart: (variantId: string, quantity?: number) => void;
    variantId: string
}

const SelectedFabric: React.FC<SelectedFabricProps> = ({
    closeSelectedView: closeSelected,
    fabricData,
    ChoiceName,
    imageUrl,
    maxShadeWidth,
    fabricWidth,
    fabricContent,
    FarbricNmber,
    loggedIn,
    addToCart,
    variantId
}) => {
    const [isOrderd, setIsOrdered] = useState(false)

    const orderSwatch = (fabricId: string) => e => {
        alert(fabricId)
        setIsOrdered(true)
    }

    const addSwatchToCart = (variantSwatchId: string) => e => {
        addToCart(variantSwatchId);
    }

    return (
        <div className="selected-fabric">
            <div className="upper-items">
                <img className="fabric-img" src={imageUrl} />
                <div className="fabric-description">
                    <div className="up-details">
                        <div className="row">
                            <span className="dark-grey">Color: </span>
                            <span className="light-grey">
                                {ChoiceName !== undefined
                                    ? ChoiceName
                                    : "null"
                                }
                            </span>
                        </div>
                        <div className="row"><span className="dark-grey">Max Shade Width: </span><span className="light-grey"> {maxShadeWidth}</span></div>
                        <div className="row"><span className="dark-grey">Fabric Width: </span><span className="light-grey">{fabricWidth}</span></div>
                        <div className="row"><span className="dark-grey">Content: </span><span className="light-grey">{fabricContent}</span></div>
                        <div className="row"><span className="dark-grey">Fabric Number: </span><span className="light-grey">{FarbricNmber}</span></div>
                    </div>
                    <div className="down-details">
                        <div className="row"><span className="dark-grey">Dimout Factor: </span><span className="light-grey"></span></div>
                        <div className="row"><span className="dark-grey">Energy Savings: </span><span className="light-grey"></span></div>
                        <div className="row"><span className="dark-grey">UV Blocking: </span><span className="light-grey"></span></div>
                    </div>
                </div>
                <div className="close_button_more_info">
                    <button onClick={closeSelected}>
                        <img src={closeLogoSource} />
                    </button>
                </div>
                {loggedIn &&
                    <div className="add_swatch_to_cart">
                        <button onClick={addSwatchToCart(variantId)}>
                            <img src={addLogoSource}></img>
                        </button>
                    </div>
                }
            </div>
            <div className="description">
                <span className="dark-grey">Description:</span><span className="light-grey"> A beautiful basic light filtering solid that will help eliminate glare, maintain natural light and provide full privacy. Translucent with a subtle texture.</span>
            </div>
            <div className="down_items">
                {loggedIn &&
                    <div className="signed_in">
                        {isOrderd ?
                            <button className="display-swatch one"><img src={SwatchAddedLogo}></img></button>
                            // <a className="display-swatch one" href="#"><span>SWATCH ADDED</span></a>
                            :
                            <button className="display-swatch two" onClick={orderSwatch(FarbricNmber)}><img src={OrderSwatchLogo}></img></button>
                            // <a  href="#" ><span>ORDER SWATCH</span></a>
                        }
                    </div>
                }
                <button><img src={ContniueLogo}></img></button>
                {/* <a href="#"><span>CONTINUE</span></a> */}
                <br />
            </div>
        </div>
    )
};
export default SelectedFabric;
