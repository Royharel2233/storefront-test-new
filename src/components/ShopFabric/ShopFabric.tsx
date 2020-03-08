import React, { useState } from "react";

import { IFilterAttributes, IFilters } from "./FabricFilter";
import { FabricPopUp } from "./FabricPopUp";

// import { FabricGallery } from "./Gallery/FabricGallery";
// import { FilterSidebar } from "../../@next/components/organisms/FilterSidebar";

import { StringParam, useQueryParam } from "use-query-params";
import { PRODUCTS_PER_PAGE } from "../../core/config";
import {
  convertSortByFromString,
  convertToAttributeScalar,
  getGraphqlIdFromDBId,
  maybe,
} from "../../core/utils";

import {
  Category_category,
  Category_products,
} from "../../views/Category/types/Category";

interface SortItem {
  label: string;
  value?: string;
}

interface SortOptions extends Array<SortItem> {}

interface PageProps {
  match: string;
  activeFilters: number;
  attributes: {
    attribute: IFilterAttributes[];
  };
  activeSortOption: string;
  category: Category_category;
  displayLoader: boolean;
  filters: IFilters;
  hasNextPage: boolean;
  products: Category_products;
  sortOptions: SortOptions;
  clearFilters: () => void;
  onLoadMore: () => void;
  onAttributeFiltersChange: (attributeSlug: string, value: string) => void;
  onOrder: (order: { value?: string; label: string }) => void;
}

import "./style/style.scss";

import { TypedShopFabricQuery } from "./queries";

// import { match } from "react-router";

import ShopFabricPage from "./ShopFabricPage";

export const FilterQuerySet = {
  encode(valueObj) {
    const str = [];
    Object.keys(valueObj).forEach(value => {
      str.push(value + "_" + valueObj[value].join("_"));
    });
    return str.join(".");
  },

  decode(strValue) {
    const obj = {};
    const propsWithValues = strValue.split(".").filter(n => n);
    propsWithValues.map(value => {
      const propWithValues = value.split("_").filter(n => n);
      obj[propWithValues[0]] = propWithValues.slice(1);
    });
    return obj;
  },
};
export const ShopFabric: React.FC<PageProps> = ({ match }) => {
  const [sort, setSort] = useQueryParam("sortBy", StringParam);
  const [attributeFilters, setAttributeFilters] = useQueryParam(
    "filters",
    FilterQuerySet
  );
  const [currentQuery, setCurrentQuery] = useState("359");
  
  const clearFilters = () => {
    setAttributeFilters({});
  };

  const onFiltersChange = (name, value) => {
    if (attributeFilters && attributeFilters.hasOwnProperty(name)) {
      if (attributeFilters[name].includes(value)) {
        if (filters.attributes[`${name}`].length === 1) {
          const att = { ...attributeFilters };
          delete att[`${name}`];
          setAttributeFilters({
            ...att,
          });
        } else {
          setAttributeFilters({
            ...attributeFilters,
            [`${name}`]: attributeFilters[`${name}`].filter(
              item => item !== value
            ),
          });
        }
      } else {
        setAttributeFilters({
          ...attributeFilters,
          [`${name}`]: [...attributeFilters[`${name}`], value],
        });
      }
    } else {
      setAttributeFilters({ ...attributeFilters, [`${name}`]: [value] });
    }
  };

  const filters: IFilters = {
    attributes: attributeFilters,
    pageSize: PRODUCTS_PER_PAGE,
    priceGte: null,
    priceLte: null,
    sortBy: sort || null,
  };
  const variables = {
    ...filters,
    attributes: filters.attributes
      ? convertToAttributeScalar(filters.attributes)
      : {},
    id: getGraphqlIdFromDBId(currentQuery, "Category"),
    sortBy: convertSortByFromString(filters.sortBy),
  };

  const sortOptions = [
    {
      label: "Clear...",
      value: null,
    },
    {
      label: "Price Low-High",
      value: "price",
    },
    {
      label: "Price High-Low",
      value: "-price",
    },
    {
      label: "Name Increasing",
      value: "name",
    },
    {
      label: "Name Decreasing",
      value: "-name",
    },
    {
      label: "Last updated Ascending",
      value: "updated_at",
    },
    {
      label: "Last updated Descending",
      value: "-updated_at",
    },
  ];

  return (
    <>
      <TypedShopFabricQuery variables={variables} errorPolicy="all" loaderFull>
        {({ loading, data, loadMore }) => {
          const canDisplayFilters = maybe(
            () => !!data.attributes.edges && !!data.category.name,
            false
          );

          if (canDisplayFilters) {
            const handleLoadMore = () =>
              loadMore(
                (prev, next) => ({
                  ...prev,
                  products: {
                    ...prev.products,
                    edges: [...prev.products.edges, ...next.products.edges],
                    pageInfo: next.products.pageInfo,
                  },
                }),
                { after: data.products.pageInfo.endCursor }
              );
          
            return (
              <div className="shop-fabric w-1239 container">
                <ShopFabricPage
                  currentQuery={currentQuery}
                  setCurrentQuery={setCurrentQuery}
                  clearFilters={clearFilters}
                  attributes={data.products.edges.map((edge, index) =>
                    edge.node.attributes.map(attr => attr.attribute)
                  )}
                  category={data.category}
                  displayLoader={loading}
                  hasNextPage={maybe(
                    () => data.products.pageInfo.hasNextPage,
                    false
                  )}
                  sortOptions={sortOptions}
                  activeSortOption={filters.sortBy}
                  filters={filters}
                  products={data.products}
                  onAttributeFiltersChange={onFiltersChange}
                  onLoadMore={handleLoadMore}
                  activeFilters={
                    filters!.attributes
                      ? Object.keys(filters!.attributes).length
                      : 0
                  }
                  onOrder={value => {
                    setSort(value.value);
                  }}
                />
                <div>
                  <FabricPopUp />
                </div>
              </div>
            );
          }
        }}
      </TypedShopFabricQuery>
    </>
  );
};
