
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

  }> = ({products, setShadeName, OpenPopUpAction }) => {
    const [chosenShade, setChosenShade] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const triggerChooseFabricColor = (chosenShadeValue) => {
      setChosenShade(chosenShadeValue)
      setIsVisible(true)
    }
    const triggerChooseShade = () => {
      setIsVisible(false)
    }    
    const moreInfoAction = (ChosenShadeForInfo) => {
      setShadeName(ChosenShadeForInfo)
      OpenPopUpAction()
    }
    return(
    <div className="build-shade-right-side">
      {isVisible ? <ChooseFabricColor shadesData={products} shadeIndex={chosenShade} onClick={triggerChooseShade} /> 
      :
      <ChooseYourShade shadesData={products} onClick={triggerChooseFabricColor} chooseFabricForInfoAction={moreInfoAction}/>}
    </div>
    )
  };
export default BuildMyShadeRightSide;
