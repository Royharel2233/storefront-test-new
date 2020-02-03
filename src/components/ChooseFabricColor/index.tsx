
import React, {useState} from "react";

import SelectedFabric from "./SelectedFabric";

import ArrowImage from "../../images/ArrowShape.svg";

import "./index.scss";

import {
    ProductsListNew_categories,
    // ProductsListNew_categories_edges_node_products,
    // ProductsListNew_categories_edges_node_products_edges
  } from "../../views/BuildShadePage/types/ProductsListNew";




import YellowUnde from "../../images/YellowUnderLine.svg";

interface PageProps {
    shadesData: ProductsListNew_categories;
    shadeIndex: any;
    onClick: any;
}

  
const ChooseFabricColor: React.FC<PageProps> = ({shadesData,shadeIndex, onClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    // const [fabricChoiceData, setFabricChoiceData] = useState([]);
    const [fabricTypeNum, setFabricTypeNum] = useState(0)
    const [ChoiceName, setChoiceName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [value1Data, setValue1Data] = useState("");
    const [value2Data, setValue2Data] = useState("");
    const [value3Data, setValue3Data] = useState("");
    const [value4Data, setValue4Data] = useState("");
    const [attributesValuesNames, setAttributesValuesNames] = useState([])
    const [chosenFabricColor, setChosenFabricColor] = useState(0)
    const [clickTd, setClickedTd] = useState(null);



    const show = (shadeNum, fabricTypeNum, name, image,attributesValues, value1, value2, value3, value4, FabricColorNumber, colorName) => {
        setIsVisible(true);
        // setFabricChoiceData(shadeNum);
        setChoiceName(name);
        setImageUrl(image);
        setFabricTypeNum(fabricTypeNum)
        setValue1Data(value1)
        setValue2Data(value2)
        setValue3Data(value3)
        setValue4Data(value4)
        setAttributesValuesNames(attributesValues)
        setChosenFabricColor(FabricColorNumber)
        setClickedTd(FabricColorNumber) 
        // window.alert(param);
    }
    const hide = () =>{
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
    const handleChange = (shadeNum, fabricTypeNum, name, image, attributesValues, value1, value2, value3, value4, FabricColorNumber, colorName) => e => {
        show(shadeNum, fabricTypeNum, name, image,attributesValues, value1, value2, value3, value4, FabricColorNumber, colorName);
        // param is the argument you passed to the function
        // e is the event object that returned
    };
    

    return(
                <div className="choose-your-fabric-color">
                    <div className="back-button-fabric-color">
                        <img key="ArrowImage" src={ArrowImage}/>
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
                    {shadesData.edges[shadeIndex].node.products.edges.map((item, fabricIndex) => (
                        <div key={item.node.id}>
                            <p className="fabric-type-title dark-grey"><b>Fabric:</b>{item.node.name.substring(0,item.node.name.indexOf('-'))} {isVisible}</p>
                            <div className="fabric-images-table">
                            {item.node.variants.map((vairant, varIndex)=> (
                                     <div className={clickTd === varIndex ? "fabric-images-table-single-item" : "fabric-images-table-single-item"} key={varIndex}>
                                     {item.node.images[varIndex].url !== null ? 
                                     <img src={item.node.images[varIndex].url} onClick={handleChange(shadeIndex, fabricIndex, item.node.variants, 
                                        item.node.images[varIndex].url, 
                                         [item.node.attributes[0].attribute.name,
                                         item.node.attributes[1].attribute.name,
                                         item.node.attributes[2].attribute.name,
                                         item.node.attributes[3].attribute.name],
                                         item.node.attributes[0].attribute.values[0].name, 
                                         item.node.attributes[1].attribute.values[0].name,
                                         item.node.attributes[2].attribute.values[0].name,
                                         item.node.attributes[3].attribute.values[0].name,
                                         varIndex,  
                                         vairant.name
                                         )}/>
                                     :
                                     <div></div>}
                                     <br />
                                     <span>{vairant.name}</span>
                                     
                                 </div>
                            ))}
                            </div> 
                        </div>
                    ))}
                    </div>
                    {isVisible ?
                    <SelectedFabric onClick={hide} fabricData={fabricTypeNum} shadeData={shadeIndex} ChoiceName={ChoiceName} 
                    imageUrl={imageUrl} value1={value1Data} value2={value2Data} value3={value3Data} attributesValuesNames={attributesValuesNames} value4={value4Data} chosenColorIndex={chosenFabricColor}/>
                    :
                    <div></div>
                                    }

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
    )};
export default ChooseFabricColor;
