import React from "react";
import { EachFilterAttr } from "./EachFilterAttr";
import "./style/style.scss";

import {
  Category_category,
  Category_products,
  Category_products_edges_node,
} from "../../views/Category/types/Category";

import { Checkbox } from "@temp/@next/components/molecules/FilterAttribute/styles";

// import { Checkbox } from "../CheckOut-Progress/MainContent/ShippingMethod";

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

const demoObj: IFilterAttributes = {
  id: "",
  name: "No Val",
  slug: name,
  values: [
    {
      id: "",
      name: "No Name",
      slug: name,
    },
  ],
};

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
  const [currentProduct, setCurrentProduct] = React.useState<
    Category_products_edges_node["id"]
  >("");
  const [currentTypeID, setCurrentTypeID] = React.useState("Color");
  const [currentAttribute, setCurrentAttribute] = React.useState<
    IFilterAttributes
  >();
  const [showFilter, setShowFilter] = React.useState(false);

  const viewCurrentProduct = (stringParam: string) =>
    stringParam === currentProduct ? true : false;

  const updateState = (productParam: string) => {
    checkFilter(productParam);
    setCurrentProduct(productParam);
    setShowFilter(!showFilter);
  };

  const checkFilter = async (stringParam: string) => {
    let filteredAttribute;
    const splitter = array => {
      const newSlug = array.attribute.slug.split("-");
      return newSlug[newSlug.length - 1];
    };
    const filtered = currentProducts.edges.filter(
      product => product.node.id === currentProduct
    );
    filtered.every(product =>
      product.node.attributes.map((eachAttribute, index) => {
        const afterSplitText = splitter(eachAttribute);
        if (
          afterSplitText === currentTypeID &&
          currentProduct === stringParam
        ) {
          filteredAttribute = eachAttribute.attribute;
          setCurrentAttribute(filteredAttribute);
        }
      })
    );
  };

  return (
    <div className="fabric-filter">
      <div className="filter ">
        <div className="row">
          <span className="title">FILTER BY:</span>
          <span className="single-filter">Type</span>
          <span
            className="single-filter"
            onClick={() => setCurrentTypeID("Color")}
          >
            Color
          </span>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "5rem",
          }}
        >
          <div>
            {currentProducts.edges.map((product, index) => (
              <div>
                <div className="text-center">
                  <div className="">
                    <Checkbox>
                      {/* <div className="row"> */}
                      <input
                        tabIndex={0}
                        type="checkbox"
                        checked={
                          currentProduct === product.node.id
                            ? viewCurrentProduct(product.node.id)
                            : null
                        }
                        readOnly
                        className="dark-grey bold"
                      />
                      <label
                        className="text-dark"
                        onClick={() => updateState(product.node.id)}
                      >
                        {product.node.name.split("-", 1)}
                      </label>
                      {/* </div> */}
                    </Checkbox>
                  </div>
                  {currentProduct === product.node.id ? (
                    <div
                      className={
                        showFilter
                          ? "manage-display-block"
                          : "manage-display-none"
                      }
                    >
                      <div className="mb-1">
                        <EachFilterAttr
                          attribute={currentAttribute || demoObj}
                          onAttributeFiltersChange={onAttributeFiltersChange}
                          filters={filters}
                          key={index}
                          filtersLimit={5}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
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

// {currentProduct === product.node.id
//   ? product.node.attributes.map(value => (
//       <div
//         className={
//           showFilter
//             ? "manage-display-block"
//             : "manage-display-none"
//         }
//       >
//         <div className="mb-2">
//           <EachFilterAttr
//             attribute={currentAttribute || value.attribute}
//             onAttributeFiltersChange={
//               onAttributeFiltersChange
//             }
//             filters={filters}
//             key={index}
//             filtersLimit={5}
//           />
//         </div>
//       </div>
//     ))
//   : null}
