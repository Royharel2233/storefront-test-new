import React from "react";
import { EachFilterAttr } from "./EachFilterAttr";
import "./style/style.scss";

import {
  Category_category,
  Category_products,
} from "../../views/Category/types/Category";


interface Attributes {
  [key: string]: string[];
}
export interface IFilters {
  attributes: Attributes;
  pageSize: number;
  sortBy: string;
  priceLte: number;
  priceGte: number;
}

export interface ISingleFilterAttribute {
  id: string;
  name: string;
  slug: string;
}
export interface IFilterAttributes {
  id: string;
  name: string;
  slug: string;
  values: ISingleFilterAttribute[];
}

export const FabricFilter: React.FC<{
  currentQuery: string;
  currentCategory: Category_category;
  currentProducts: Category_products;
  attributes: IFilterAttributes[][];
  filtersLimit: number;
  show: boolean;
  filters: IFilters;
  numberOfProducts: number;
  onAttributeFiltersChange: (attributeSlug: string, value: string) => void;
}> = ({
  currentQuery,
  currentProducts,
  currentCategory,
  attributes,
  numberOfProducts,
  filters,
  filtersLimit,
  onAttributeFiltersChange,
  ...props
}) => {
  // const [currentFilterState, setCurrentFilterState] = React.useState(0);
  const [currentProduct, setCurrentProduct] = React.useState("");
  const [showFilter, setShowFilter] = React.useState(false);

  const updateState = (productParam: string) => {
    setCurrentProduct(productParam);
    setShowFilter(!showFilter);
  };

  // const checkFilter = async (
  //   filterKind: string,
  //   attribute,
  //   filters,
  //   onAttributeFiltersChange
  // ) => {
  //   // const currentID: string = getGraphqlIdFromDBId(currentQuery, "Category");
  //   if (filterKind === "Type") {
  //     setCurrentFilterState(1);
  //     if (currentFilterState === 1) {
  //     }
  //   } else if (filterKind === "Color") {
  //     setCurrentFilterState(2);
  //   } else if (filterKind === "Width") {
  //     setCurrentFilterState(3);
  //   }
  // };

  return (
    <div className="fabric-filter">
      <div className="filter ">
        <div className="row">
          <span className="title">FILTER BY:</span>
          <span
            className="single-filter"
            // onClick={() =>
            //   checkFilter(
            //     "Type",
            //     currentProducts.edges.map(node => node.node),
            //     filters,
            //     onAttributeFiltersChange
            //   )
            // }
          >
            Type
          </span>
          <div></div>
          <span
            className="single-filter"
            // onClick={() =>
            //   checkFilter(
            //     "Color",
            //     attributes,
            //     filters,
            //     onAttributeFiltersChange
            //   )
            // }
          >
            Color
          </span>
          <span
            className="single-filter"
            // onClick={() =>
            //   checkFilter(
            //     "Width",
            //     attributes,
            //     filters,
            //     onAttributeFiltersChange
            //   )
            // }
          >
            Width
          </span>
        </div>
      </div>
      <div className="" style={{ display: "inline-block" }}>
        <div>
          {currentProducts.edges.map((product, index) => (
            <div>
              <div className="text-center">
                <div className="mt-5">
                  <button
                    className="btn-sm btn-dark m-1"
                    onClick={() => updateState(product.node.id)}
                  >
                    {product.node.name.split("-", 1)}
                  </button>
                </div>
                {currentProduct === product.node.id
                  ? product.node.attributes.map(value => (
                      <div
                        className={
                          showFilter
                            ? "manage-display-block"
                            : "manage-display-none"
                        }
                      >
                        <div className="mb-2">
                          <EachFilterAttr
                            attribute={value.attribute}
                            onAttributeFiltersChange={onAttributeFiltersChange}
                            filters={filters}
                            key={index}
                            filtersLimit={5}
                          />
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="products-number p-2">
        <span className="text-right">
          {numberOfProducts} Products Available
        </span>
      </div>
    </div>
  );
};

// {
//   <div style={Show}>
//     <EachFilterAttr
//       {...{
//         onAttributeFiltersChange,
//         attribute,
//         filters,
//         ...props,
//       }}
//     />
//   </div>;
//   setShow({ display: "inline-block" });
// }
