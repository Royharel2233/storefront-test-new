
import React, { useRef, useState } from "react";


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

interface PageProps {
    categories: ProductsListNew_categories;
}

const Page: React.FC<PageProps> = ({ categories }) => {
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
    const [opacityValueRightSide, setOpacityValueRightSide] = useState(1.0)
    const [opacityValueLefttSide, setOpacityValueLeftSide] = useState(1.0)

    const [ShadeName, setShadeName] = useState("Double Roller Shade")
    const [isPopUpVIsible, setIsPopUPVisible] = useState(false)
    const [currentShade, setCurrentShade] = useState("../../images/ShadeExample.png")

    const componentRef = useRef();
    const ClosePopUpFub = () => {
        setIsPopUPVisible(false)
        setOpacityValueLeftSide(1.0)
        setOpacityValueRightSide(1.0)
    }
    const openPopUp = (): void => {
        setIsPopUPVisible(true)
    }
    const ChangePopHeadLine = (shadeNameValues) => {
        setShadeName(shadeNameValues)
    }
    const changeCurrentShade = (newShadeUrl: string): void => {
        setCurrentShade(newShadeUrl)
    }

    return (

        <div className="container">
            <div className="build-my-shade-main w-1239">
                <BuildMyShadeLeftSide
                    printOutFunc={componentRef}
                    current_shade={currentShade}
                    setNewShade={changeCurrentShade}
                    opacity={opacityValueLefttSide}
                    changeRightSideOpacity={setOpacityValueRightSide}
                    changeLeftSideOpacity={setOpacityValueLeftSide}
                />
                <BuildMyShadeRightSide
                    products={categories}
                    children={React.Children}
                    setShadeName={ChangePopHeadLine}
                    OpenPopUpAction={openPopUp}
                    opacity={opacityValueRightSide}
                    changeRightSideOpacity={setOpacityValueRightSide}
                    changeLeftSideOpacity={setOpacityValueLeftSide}
                />
            </div>
            {isPopUpVIsible
                ? < BuildShadePopUp ClosePopUpAction={ClosePopUpFub} fabricName={ShadeName} />
                : <div></div>
            }

        </div>
    )
};

export default Page;
