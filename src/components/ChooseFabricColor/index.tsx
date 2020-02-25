
import React, { useState } from "react";

import SelectedFabric from "./SelectedFabric";

import ArrowImage from "../../images/ArrowShape.svg";

import "./index.scss";

import {
    ProductsListNew_categories,
    // ProductsListNew_categories_edges_node_products,
    // ProductsListNew_categories_edges_node_products_edges
} from "../../views/BuildMyShade/types/ProductsListNew";


import { useUserDetails } from "@sdk/react";

// import { CartContext } from "../CartProvider/context";

// import ProductDescription from "../../components/ProductDescription";

// import AddToCart from "./AddToCart";

import YellowUnde from "../../images/YellowUnderLine.svg";
import { CartContext } from "../CartProvider/context";

interface PageProps {
    categories: ProductsListNew_categories;
    shadeIndex: number;
    onClick: any;
}


const ChooseFabricColor: React.FC<PageProps> = ({ categories: shadesData, shadeIndex, onClick }) => {
    const { data: user } = useUserDetails();
    const [isVisible, setIsVisible] = useState(false);
    // const [fabricChoiceData, setFabricChoiceData] = useState([]);
    const [fabricTypeNum, setFabricTypeNum] = useState(0)
    const [ChoiceName, setChoiceName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [fabricColor, setFabricColor] = useState("");
    const [fabricMaxShadeWidth, setFabricMaxShadeWidth] = useState("");
    const [fabricContent, setFabricContent] = useState("");
    const [fabricNumber, setFabricNumber] = useState("");
    const [chosenFabricColor, setChosenFabricColor] = useState(0)
    const [clickTd, setClickedTd] = useState(null);
    const [variantId, setVariantId] = useState("");

    const show = (fabricTypeNum, image, attributesValues, fabricColor, fabricMaxShadeWidth, fabricContent, fabricNumber, FabricColorNumber, colorName, variantId: string) => {
        setIsVisible(true);
        // setFabricChoiceData(shadeNum);
        setChoiceName(colorName);
        setFabricTypeNum(fabricTypeNum)
        setImageUrl(image);
        setFabricColor(fabricColor)
        setFabricMaxShadeWidth(fabricMaxShadeWidth)
        setFabricContent(fabricContent)
        setFabricNumber(fabricNumber)
        setChosenFabricColor(FabricColorNumber)
        setClickedTd(FabricColorNumber)
        setVariantId(variantId)
        // window.alert(param);
    }
    const hide = () => {
        setIsVisible(false);
    }
    // const handleVisibleChange = (visible: boolean) => {
    //     window.alert(visible) // visible is `true` when user clicks. It works
    //     setIsVisible(visible) // This does not set isVisible to `true`.
    // }     
    // const onPicClick = () =>{

    //     setIsVisible(true)
    // }
    // const [show, toggleShow] = React.useState(true);
    const handleChange = (fabricTypeNum, image, attributesValues, value1, value2, value3, value4, FabricColorNumber, colorName, variantId: string) => e => {
        show(fabricTypeNum, image, attributesValues, value1, value2, value3, value4, FabricColorNumber, colorName, variantId);
        // param is the argument you passed to the function
        // e is the event object that returned
    };
    // const handleSubmit = () => {
    //     addToCart(this.state.variant, this.state.quantity);
    // };

    // const canAddToCart = (lines: CartLine[]) => {
    // const { variant, quantity, variantStock } = this.state;
    // const cartLine = lines.find(({ variantId }) => variantId === variant);
    // const syncedQuantityWithCart = cartLine
    //     ? quantity + cartLine.quantity
    //     : quantity;
    // return quantity !== 0 && variant && variantStock >= syncedQuantityWithCart;
    // };
    // const cartContextConsumer = (
    //   <CartContext.Consumer>            
    //         {cart => (
    //     //   <ProductDescription
    //     //     name={shadesData.edges[0].node.name}
    //     //     // productVariants={shadesData.edges[0].node.products}
    //     //     selectedAttributes={shadesData.edges[0].node.products[1].attributes}
    //     //     addToCart={cart.add}
    //     //   >
    //     //   </ProductDescription>
    //     )}
    //   </CartContext.Consumer>
    // );
    return (
        <div className="choose-your-fabric-color">
            <div className="back-button-fabric-color">
                <img key="ArrowImage" src={ArrowImage} />
                <button
                    onClick={onClick}>
                    back
                        </button>
            </div>
            <div className="choose-slider-nav">02/02</div>
            <div className="choose-slider-nav-underLine-far-color"><img src={YellowUnde} /></div>
            <br />
            <h3 ><b>Choose Your Fabric + Color</b></h3>
            <div className="selected-title">
                <span className="light-grey">Selected Shade:</span>
                <span className="yellow" key={shadesData.edges[shadeIndex].node.id}>{shadesData.edges[shadeIndex].node.name}</span>
            </div>
            <br />
            <div className="fabric-type-list">
                {shadesData.edges[shadeIndex].node.products.edges.map((product, fabricIndex) => (
                    <div key={product.node.id}>
                        <p className="fabric-type-title dark-grey"><b>Fabric:</b>{product.node.name.substring(0, product.node.name.indexOf('-'))} {isVisible}</p>
                        <div className="fabric-images-table">
                            {product.node.variants.map((vairant, varIndex) => (
                                <div className={clickTd === varIndex ? "fabric-images-table-single-item" : "fabric-images-table-single-item"} key={varIndex}>
                                    {product.node.images[varIndex].url !== null ?
                                        <img
                                            src={product.node.images[varIndex].url}
                                            onClick={
                                                handleChange(
                                                    fabricIndex,
                                                    product.node.variants[fabricIndex],
                                                    product.node.images[varIndex].url,
                                                    // Fabric Color name
                                                    product.node.attributes[0].attribute.values[0].name,
                                                    // Fabric max shade width
                                                    product.node.attributes[1].attribute.values[0].name,
                                                    // Fabric content
                                                    product.node.attributes[2].attribute.values[0].name,
                                                    // Fabric number
                                                    product.node.attributes[3].attribute.values[0].name,
                                                    varIndex,
                                                    vairant.name,
                                                    vairant.id
                                                )
                                            }
                                        />
                                        :
                                        <div></div>}
                                    <span>{vairant.name}</span>

                                </div>
                            ))}
                            {isVisible && fabricIndex === fabricTypeNum ?
                                <div>
                                    <CartContext.Consumer>
                                        {cart => (
                                            <SelectedFabric
                                                chosenColorIndex={chosenFabricColor}
                                                ChoiceName={ChoiceName}
                                                closeSelectedView={hide}
                                                fabricData={fabricTypeNum}
                                                shadeIndex={shadeIndex}
                                                imageUrl={imageUrl}
                                                maxShadeWidth={fabricColor}
                                                fabricWidth={fabricMaxShadeWidth}
                                                fabricContent={fabricContent}
                                                FarbricNmber={fabricNumber}
                                                loggedIn={user ? true : false}
                                                addToCart={cart.add}
                                                variantId={variantId}

                                            />
                                        )}
                                    </CartContext.Consumer>
                                    <br />
                                </div>
                                :
                                <div></div>
                            }
                            {/* {cartContextConsumer} */}
                        </div>
                    </div>
                ))}
            </div>


            {/* className={`selected-fabric${isVisible ? '' : '-hidden'}`} */}
            {/* <div className="selected-fabric">
                                <div className="upper-items">
                                    <img className="fabric-img" src={bedroom} />
                                    <div className="fabric-description">
                                        <div className="up-details">
                                        <div className="row"><span className="dark-grey">Color: </span><span className="light-grey"> Ivory</span></div>
                                        <div className="row"><span className="dark-grey">Max Shade Width: </span><span className="light-grey"> 96</span></div>
                                        <div className="row"><span className="dark-grey">Fabric Width: </span><span className="light-grey"></span></div>
                                        <div className="row"><span className="dark-grey">Content: </span><span className="light-grey"></span></div>
                                        <div className="row"><span className="dark-grey">Fabric Number: </span><span className="light-grey"></span></div>
                                    </div>
                                    <div className="down-details">
                                        <div className="row"><span className="dark-grey">Dimout Factor: </span><span className="light-grey"> Ivory</span></div>
                                        <div className="row"><span className="dark-grey">Energy Savings: </span><span className="light-grey"> 96</span></div>
                                        <div className="row"><span className="dark-grey">UV Blocking: </span><span className="light-grey"> 96</span></div>
                                    </div>
                                </div>
                            <div> <button onClick={hide}><img src={xpng} /></button></div>
                        </div>
                        <div className="description">
                            <span className="dark-grey">Description:</span><span className="light-grey"> A beautiful basic light filtering solid that will help eliminate glare, maintain natural light and provide full privacy. Translucent with a subtle texture.</span>
                        </div>
                        <div className="down_items">
                            <a className="display-swatch one" href="#"><span>SWATCH ADDED</span></a>
                            <a className="display-swatch two" href="#"><span>ORDER SWATCH</span></a>
                            <a href="#"><span>CONTINUE</span></a>
                        </div>
                    </div>
                 */}


        </div>
    )
};
export default ChooseFabricColor;
