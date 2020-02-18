
import React, {useRef, useState} from "react";


import "./scss/index.scss";

// import selectColor from "../../images/select-color.png";

// import "./scss/ustyle.css";

// import "./scss/style.css";

import BuildMyShadeLeftSide from "../../components/BuildMyShadeLeftSide";

import BuildMyShadeRightSide from "../../components/BuildMyShadeRightSide";

import BuildShadePopUp from "./BuildShadePopUp";

import { CartContext } from "../../components/CartProvider/context";

import { ProductDescription } from "../../components";


import {
  ProductsListNew_categories,
} from "./types/ProductsListNew";






const Page: React.FC<{
categories: ProductsListNew_categories;
}> = ({ categories }) => {
    const cartContextConsumer = (
        <CartContext.Consumer>
            {cart => (
            <ProductDescription
                name={categories.edges[0].node.name}
                productVariants={categories.edges[0].node.products[0].variants}
                selectedAttributes={categories.edges[0].node.products[0].attributes}
                addToCart={cart.add}
            >
            </ProductDescription>
            )}
        </CartContext.Consumer>
        );
    const [opacityValueRightSide, setOpacityValueRightSide] = useState("100%")
    const [opacityValueLefttSide, setOpacityValueLeftSide] = useState("100%")

    const [ShadeName, setShadeName] = useState("Double Roller Shade")
    const [isPopUpVIsible, setIsPopUPVisible] = useState(false)
    const [currentShade, setCurrentShade] = useState("../../images/ShadeExample.png")
    
    const componentRef = useRef();
    const ClosePopUpFub = () => {
        setIsPopUPVisible(false)
        setOpacityValueLeftSide("100%")
        setOpacityValueRightSide("100%")
    }
    const OpenPopUp = () => {
        setIsPopUPVisible(true)
    }
    const ChangePopHeadLine = (shadeNameValues) => {
        setShadeName(shadeNameValues)
    }
    const changeCurrentShade = (newShadeUrl) => {
        setCurrentShade(newShadeUrl)
    }
    return(
        
    
    <div className="container">
        
        <div className="build-my-shade-main w-1239">
            <BuildMyShadeLeftSide printOutFunc={componentRef} current_shade={currentShade} setNewShade={changeCurrentShade} opacity={opacityValueLefttSide} changeRightSideOpacity={setOpacityValueRightSide} changeLeftSideOpacity={setOpacityValueLeftSide}/>
            <BuildMyShadeRightSide products={categories} children={React.Children} setShadeName={ChangePopHeadLine} OpenPopUpAction={OpenPopUp} opacity={opacityValueRightSide} changeRightSideOpacity={setOpacityValueRightSide} changeLeftSideOpacity={setOpacityValueLeftSide}/>
            {cartContextConsumer}
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
