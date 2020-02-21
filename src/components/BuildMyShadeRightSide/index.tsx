
import React, { useState } from "react";

import "./index.scss";

//  add here to right CSS files

import ChooseYourShade from "../../components/ChooseYourShade";

import ChooseFabricColor from "../../components/ChooseFabricColor";

import {
  ProductsListNew_categories,
  // ProductsListNew_categories_edges_node_products,
  // ProductsListNew_categories_edges_node_products_edges
} from "../../views/BuildMyShade/types/ProductsListNew";


interface RightSideProps {
  products: ProductsListNew_categories;
  setShadeName: (s: string) => void;
  OpenPopUpAction: () => void;
  opacity: number;
  changeRightSideOpacity: (opacity: number) => void;
  changeLeftSideOpacity: (opacity: number) => void;
}


const BuildMyShadeRightSide: React.FC<RightSideProps> =
  ({
    products,
    setShadeName,
    OpenPopUpAction,
    opacity,
    changeRightSideOpacity,
    changeLeftSideOpacity,
  }) => {
    const [chosenShadeIndex, setChosenShadeIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const triggerChooseFabricColor = (chosenShadeIndex) => {
      setChosenShadeIndex(chosenShadeIndex)
      setIsVisible(true)
      changeRightSideOpacity(1.0)
    }
    const triggerChooseShade = () => {
      setIsVisible(false)
      changeRightSideOpacity(1.0)
    }
    const moreInfoAction = (ChosenShadeForInfo) => {
      setShadeName(ChosenShadeForInfo)
      OpenPopUpAction()
      changeRightSideOpacity(.25);
      changeLeftSideOpacity(.25)
    }

    return (
      <div className="build-shade-right-side" style={{
        maxWidth: "400px",
        background: "#fafafa",
        maxHeight: "980px",
        overflow: "hidden",
        opacity,
      }}>
        {isVisible
          ?
          <ChooseFabricColor
            categories={products}
            onClick={triggerChooseShade}
            shadeIndex={chosenShadeIndex}
          />
          :
          <ChooseYourShade
            shadesData={products}
            onClick={triggerChooseFabricColor}
            chooseFabricForInfoAction={moreInfoAction}
          />
        }
      </div>
    )
  };
export default BuildMyShadeRightSide;
