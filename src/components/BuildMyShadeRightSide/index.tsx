
 import React, { useState } from "react";

 import "./index.scss";

//  add here to right CSS files

 import ChooseYourShade from "../../components/ChooseYourShade";

 import ChooseFabricColor from "../../components/ChooseFabricColor";

 import {
  ProductsListNew_categories,
  // ProductsListNew_categories_edges_node_products,
  // ProductsListNew_categories_edges_node_products_edges
} from "../../views/BuildShadePage/types/ProductsListNew";




const BuildMyShadeRightSide: React.FC<{
  products: ProductsListNew_categories;
  setShadeName: any;
  OpenPopUpAction: any;
  opacity: any;
  changeRightSideOpacity: any;
  changeLeftSideOpacity: any;

  }> = ({products, setShadeName, OpenPopUpAction, opacity, changeRightSideOpacity, changeLeftSideOpacity}) => {
    const [chosenShade, setChosenShade] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const triggerChooseFabricColor = (chosenShadeValue) => {
      setChosenShade(chosenShadeValue)
      setIsVisible(true)
      changeRightSideOpacity("100%")
    }
    const triggerChooseShade = () => {
      setIsVisible(false)
      changeRightSideOpacity("100%")
    }    
    const moreInfoAction = (ChosenShadeForInfo) => {
      setShadeName(ChosenShadeForInfo)
      OpenPopUpAction()
      changeRightSideOpacity("25%")
      changeLeftSideOpacity("25%")
    }
    return(
    <div className="build-shade-right-side" style={ {
      maxWidth: "400px",
      background: "#fafafa",
      maxHeight: "980px",
      overflow: "hidden",
      opacity,
      } }>
      {isVisible ? <ChooseFabricColor shadesData={products} shadeIndex={chosenShade} onClick={triggerChooseShade} /> 
      :
      <ChooseYourShade shadesData={products} onClick={triggerChooseFabricColor} chooseFabricForInfoAction={moreInfoAction}/>}
    </div>
    )
  };
export default BuildMyShadeRightSide;
