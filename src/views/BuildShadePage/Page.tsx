
import React, {useRef, useState} from "react";


import "./scss/index.scss";

// import selectColor from "../../images/select-color.png";

import "./scss/ustyle.css";

// import "./scss/style.css";

import BuildMyShadeLeftSide from "../../components/BuildMyShadeLeftSide";

import BuildMyShadeRightSide from "../../components/BuildMyShadeRightSide";

import BuildShadePopUp from "./BuildShadePopUp";



import {
  ProductsListNew_categories,
} from "./types/ProductsListNew";






const Page: React.FC<{
categories: ProductsListNew_categories;
}> = ({ categories }) => {
    const [ShadeName, setShadeName] = useState("Double Roller Shade")
    const [isPopUpVIsible, setIsPopUPVisible] = useState(false)
    const componentRef = useRef();
    const ClosePopUpFub = () => {
        setIsPopUPVisible(false)
    }
    const OpenPopUp = () => {
        setIsPopUPVisible(true)
    }
    const ChangePopHeadLine = (shadeNameValues) => {
        setShadeName(shadeNameValues)
    }
    return(
    <div className="container">
        <div className="build-my-shade-main w-1239">
            <BuildMyShadeLeftSide printOutFunc={componentRef}/>
            <BuildMyShadeRightSide products={categories} children={React.Children} setShadeName={ChangePopHeadLine} OpenPopUpAction={OpenPopUp}/>
        </div>
        { isPopUpVIsible ?
        < BuildShadePopUp  ClosePopUpAction={ClosePopUpFub} fabricName={ShadeName}/>
        :
        <div></div> 
    } 
        
    </div>
    )
    };

export default Page;
