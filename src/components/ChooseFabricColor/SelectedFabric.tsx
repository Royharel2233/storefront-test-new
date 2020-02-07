import React, {useState} from "react";

// import bedroom from "./img/ShadeExample.png";

import xpng from "../../images/CloseLogo.svg";

import plus from "../../images/PlusLogo.svg";


// import {
//     VariantsData_variants
//   } from "../../views/BuildShadePage/types/VariantsData";



interface PageProps {
    attributesValuesNames: any;
    chosenColorIndex: any;
    ChoiceName: any;
    onClick: any;
    fabricData: any;
    shadeData: any;
    imageUrl: string;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    loggedIn: any;
}

const SelectedFabric: React.FC <PageProps> = ({ onClick, fabricData, shadeData, ChoiceName, imageUrl, value1,value2, value3, 
    value4, attributesValuesNames, chosenColorIndex, loggedIn}) => {
    const [isOrderd, setIsOrdered] = useState(false)
    
    const orderSwatch = (fabricNum) => e => {
        alert(fabricNum)
        setIsOrdered(true)
    }
    const addSwatchToCart = (swatchId) => e => {
        alert(swatchId)
    }

    return(
                <div className="selected-fabric">
                                <div className="upper-items"> 
                                    <img className="fabric-img" src={imageUrl} />
                                    <div className="fabric-description">
                                        <div className="up-details">
                                            {}
                                            <div className="row"><span className="dark-grey">Color: </span><span className="light-grey"> {ChoiceName[chosenColorIndex].name !== undefined ?
                                            ChoiceName[chosenColorIndex].name
                                            :
                                            "null"
                                        }</span></div>
                                            <div className="row"><span className="dark-grey">Max Shade Width: </span><span className="light-grey"> {value1}</span></div>
                                            <div className="row"><span className="dark-grey">Fabric Width: </span><span className="light-grey">{value2}</span></div>
                                            <div className="row"><span className="dark-grey">Content: </span><span className="light-grey">{value3}</span></div>
                                            <div className="row"><span className="dark-grey">Fabric Number: </span><span className="light-grey">{value4}</span></div>

                                    </div>
                                    <div className="down-details">
                                        <div className="row"><span className="dark-grey">Dimout Factor: </span><span className="light-grey"></span></div>
                                        <div className="row"><span className="dark-grey">Energy Savings: </span><span className="light-grey"></span></div>
                                        <div className="row"><span className="dark-grey">UV Blocking: </span><span className="light-grey"></span></div>
                                    </div>
                                </div>
                            <div> <button onClick={onClick}><img src={xpng} /></button></div>
                            {loggedIn && <div><button onClick={addSwatchToCart(fabricData)}><img src={plus}></img></button></div>}
                        </div>
                        <div className="description">
                            <span className="dark-grey">Description:</span><span className="light-grey"> A beautiful basic light filtering solid that will help eliminate glare, maintain natural light and provide full privacy. Translucent with a subtle texture.</span>
                        </div>
                        <div className="down_items">
                            {isOrderd ? 
                            <a className="display-swatch one" href="#"><span>SWATCH ADDED</span></a>
                            :
                            <a className="display-swatch two" href="#" onClick={orderSwatch(value4)}><span>ORDER SWATCH</span></a>
                        }
                            <a href="#"><span>CONTINUE</span></a>
                        </div>
                    </div>
    )};
export default SelectedFabric;
