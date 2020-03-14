import React, { useEffect } from "react";
import { EachFilterAttr } from "./EachFilterAttr";
import "./style/style.scss";

import {
  Category_category,
  Category_products,
  Category_products_edges,
} from "../../views/Category/types/Category";

// import { Checkbox } from "@temp/@next/components/molecules/FilterAttribute/styles";

import { styled } from "@storybook/theming";
export const Checkbox = styled.div`
  .inputRow {
    display: inline-block;
    > input {
      opacity: 0;
    }

    > label {
      display: initial;
      font-family: Lato;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.63;
      letter-spacing: 0.4px;
      color: #343538;
    }

    > p {
      font-family: Lato;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.59;
      letter-spacing: 0.27px;
    }
    > input {
      position: relative;
      left: 1.3rem;
      top: 0.38rem;
    }
    > input + label {
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      &:before {
        content: "";
        position: absolute;
        left: 0.5rem;
        top: 0.4rem;
        width: 17.1px;
        height: 17.1px;
        background: white;
        border: 1px solid black;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
      }
      &:after {
        content: "✔";
        color: white;
        position: absolute;
        left: 0.5rem;
        top: 0.4rem;
        width: 17.1px;
        height: 17.1px;
        background: #343538;
        border: 1px solid black;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
        transition: all 0.2s;
      }
    }

    > input:not(:checked) + label {
      &:after {
        opacity: 0;
        transform: scale(0);
      }
    }
    > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
    }
    > input:checked + label {
      &:after {
        opacity: 1;
        transform: scale(1);
      }
    }
    > input:disabled:checked + label {
      &:after {
        color: #999;
      }
    }
    > input:disabled + label {
      color: #aaa;
    }
    > input:checked:focus + label,
    input:not(:checked):focus + label {
      &:before {
        border: 1px dotted blue;
      }
    }
  }
`;
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
    Category_products_edges
  >();

  // const checkedProducts = []

  // const handleChange = () => console.log('change', checkedProducts)

  const currentTypeID = "Color";

  const [showTypes, setShowTypes] = React.useState(false);

  const [currentAttribute, setCurrentAttribute] = React.useState<
    IFilterAttributes
  >();

  const [showFilter, setShowFilter] = React.useState(false);

  const viewCurrentProduct = (product: Category_products_edges) => {
    if(product === currentProduct) {
      return true
    } else {
      return false
    }
  }

  const updateState = (productParam: Category_products_edges) => {
    setCurrentProduct(productParam);
    checkFilter();
    setShowFilter(!showFilter);
  };

  const checkFilter = () => {
    let filteredAttribute: IFilterAttributes;
    const splitter = array => {
      const newSlug = array.attribute.slug.split("-");
      return newSlug[newSlug.length - 1];
    };
    const filtered = currentProducts.edges.filter(
      product => product === currentProduct
    );
    filtered.every(product =>
      product.node.attributes.map((eachAttribute, index) => {
        const afterSplitText = splitter(eachAttribute);
        if (afterSplitText === currentTypeID) {
          return (filteredAttribute = eachAttribute.attribute);
        } else {
          return demoObj;
        }
      })
    );
    console.warn("State updated", currentAttribute);
    return filteredAttribute;
  };

  useEffect(() => {
    setCurrentAttribute(checkFilter());
  }, [currentProduct]);

  return (
    <div className="fabric-filter">
      <div className="filter w-100">
        <div className="row">
          <span className="title">FILTER BY:</span>
          <span
            className="single-filter"
            onClick={() => setShowTypes(!showTypes)}
          >
            Type
          </span>
          <span className="single-filter">Color</span>
        </div>
        <div
          className=""
          style={{
            display: showTypes ? "flex" : "none",
            justifyContent: "center",
            marginRight: "5rem",
            flexDirection: "column",
            flexWrap: "wrap",
            transition: "all 2.0s",
          }}
        >
          <div
            className=""
            style={{
              display: showTypes ? "flex" : "none",
              flexDirection: "row",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {currentProducts.edges.map((product, index) => (
              <div
                style={{
                  flex: "1 0 21%",
                }}
              >
                <Checkbox>
                  <div className="inputRow d-flex flex-direction-row">
                    <input
                      tabIndex={index}
                      type="checkbox"
                      name={product.node.name}
                      checked={viewCurrentProduct(product)}
                      readOnly
                      className="dark-grey bold"
                    />
                    <label className="m-1" onClick={() => updateState(product)}>
                      {product.node.name.split("-", 1)}
                    </label>
                  </div>
                </Checkbox>
              </div>
            ))}
            <div
              className={
                showFilter ? "manage-display-block" : "manage-display-none"
              }
            >
              <div className="mb-1">
                {currentAttribute ? (
                  <EachFilterAttr
                    attribute={currentAttribute}
                    onAttributeFiltersChange={onAttributeFiltersChange}
                    filters={filters}
                    key={Math.random() * 100}
                    filtersLimit={5}
                  />
                ) : null}
              </div>
            </div>
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
