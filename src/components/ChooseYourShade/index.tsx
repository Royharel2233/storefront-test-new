
 import React from "react";

 import "./index.scss";

//  import ShadeExample from "./img/ShadeExample.png";

 import {
    ProductsListNew_categories,
    // ProductsListNew_categories_edges_node_products,
    // ProductsListNew_categories_edges_node_products_edges
  } from "../../views/BuildMyShade/types/ProductsListNew";

  import YellowUnde from "../../images/YellowUnderLine.svg";

  import infoLogo from "../../images/infoLogo.svg";


 interface PageVars {
    onClick: any;
    shadesData: ProductsListNew_categories;
    chooseFabricForInfoAction: any;
}

const ChooseYourShade: React.FC <PageVars> = ({ onClick, shadesData, chooseFabricForInfoAction}) => {
  const handleChange = (index) => e => {
    onClick(index)    // param is the argument you passed to the function
    // e is the event object that returned
  };
  const moreInfoOnClick = (shadeName) => e => {
    chooseFabricForInfoAction(shadeName)
  }
  
  return (
    <div className="choose-your-shade">
    <div className="choose-slider-nav">01/02</div>
    <div className="choose-slider-nav-underLine-far-fabric"><img src={YellowUnde} /></div>   
    <br/>
    <h3><b>Choose Your Shade</b></h3>
    <br/>
    <ul className="img_slider_wrraper list_none">
      {shadesData.edges.map((category, index) => (
        <li className="img_slider_single_item" key={index}>
            <img src={category.node.backgroundImage.url} onClick={handleChange(index)}/>
            <div className="single_title">
                <p>{category.node.name}</p>
                <button onClick={moreInfoOnClick(category.node.name)}>
                <img src={infoLogo} />
                </button>
            </div>
        </li>
      ))}
    </ul>
    </div>
       );
  }
export default ChooseYourShade;
