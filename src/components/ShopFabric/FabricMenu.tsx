import React from "react";

import {
  Category_products,
} from "../../views/Category/types/Category";

import "./style/style.scss";

interface FabricMenuProps {
  currentQuery: string;
  setCurrentQuery: React.Dispatch<React.SetStateAction<string>>;
  currentProducts: Category_products
}

export const FabricMenu: React.FC<FabricMenuProps> = ({
  currentQuery,
  setCurrentQuery,
  currentProducts,
}) => {
  return (
        <div className="shop-fabric-menu">
          <ul className="list_none ">
            <li
              className={currentQuery === "356" ? "active" : null}
              onClick={() => setCurrentQuery("356")}
            >
              <span>Designer Roller Shades</span>
            </li>
            <li
              className={currentQuery === "357" ? "active" : null}
              onClick={() => setCurrentQuery("357")}
            >
              <span>Luxshade Roller Shades</span>
            </li>
            <li
              className={currentQuery === "358" ? "active" : null}
              onClick={() => setCurrentQuery("358")}
            >
              <span>Slimline Dual Roller Shades</span>
            </li>
            <li
              className={currentQuery === "359" ? "active" : null}
              onClick={() => setCurrentQuery("359")}
            >
              <span>Luxshade Dual Roller Shades</span>
            </li>
            <li
              className={currentQuery === "361" ? "active" : null}
              onClick={() => setCurrentQuery("361")}
            >
              <span>Tailored Roman Shades</span>
            </li>
          </ul>
        </div>
  );
};
