// import "./scss/index.scss";

import "../../components/ShopFabric/style/style.scss";

import * as React from "react";

import {IFilterAttributes, IFilters} from "./FabricFilter";

import {
  Breadcrumbs,
  extractBreadcrumbs,
  ProductsFeatured,
  ProductsList,
} from "../../components";

import { ProductListHeader } from "../../@next/components/molecules";
// import { FilterSidebar } from "../../@next/components/organisms/FilterSidebar";
import { maybe } from "../../core/utils";
import {
  Category_category,
  Category_products,
} from "../../views/Category/types/Category";

import { FabricFilter } from "@temp/components/ShopFabric/FabricFilter";

import { PageHeader } from "@temp/components/ShopFabric/PageHeader";

import { FabricMenu } from "@temp/components/ShopFabric/FabricMenu";

interface SortItem {
  label: string;
  value?: string;
}

interface SortOptions extends Array<SortItem> {}

interface PageProps {
  currentQuery: string;
  setCurrentQuery: React.Dispatch<React.SetStateAction<string>>;
  activeFilters: number;
  attributes: IFilterAttributes[][]
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

const ShopFabricPage: React.FC<PageProps> = ({
  currentQuery,
  setCurrentQuery,
  activeFilters,
  activeSortOption,
  attributes,
  category,
  displayLoader,
  hasNextPage,
  clearFilters,
  onLoadMore,
  products,
  filters,
  onOrder,
  sortOptions,
  onAttributeFiltersChange,
}) => {
  const canDisplayProducts = maybe(
    () => !!products.edges && products.totalCount !== undefined
  );
  const hasProducts = canDisplayProducts && !!products.totalCount;
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className="category">
      <div className="container">
        <Breadcrumbs breadcrumbs={extractBreadcrumbs(category)} />
        {/* <FilterSidebar
          show={showFilters}
          hide={() => setShowFilters(false)}
          onAttributeFiltersChange={onAttributeFiltersChange}
          attributes={attributes}
          filters={filters}
        /> */}
        <div>
          <PageHeader />
        </div>
        <div>
          <FabricMenu
            currentQuery={currentQuery}
            setCurrentQuery={setCurrentQuery}
          />
        </div>
        <div className="col-sm-12">
        <FabricFilter
          currentQuery={currentQuery}
          currentCategory={category}
          currentProducts={products}
          show={showFilters}
          onAttributeFiltersChange={onAttributeFiltersChange}
          attributes={attributes}
          filters={filters}
          filtersLimit={5}
          numberOfProducts={products ? products.totalCount : 0}
        />
        </div>
        <ProductListHeader
          activeSortOption={activeSortOption}
          openFiltersMenu={() => setShowFilters(true)}
          numberOfProducts={products ? products.totalCount : 0}
          activeFilters={activeFilters}
          clearFilters={clearFilters}
          sortOptions={sortOptions}
          onChange={onOrder}
        />
      </div>

      {canDisplayProducts && (
        <>
          <ProductsList
            displayLoader={displayLoader}
            hasNextPage={hasNextPage}
            onLoadMore={onLoadMore}
            products={products.edges.map(edge => edge.node)}
            totalCount={products.totalCount}
          />
        </>
      )}
      {!hasProducts && <ProductsFeatured title="You might like" />}
    </div>
  );
};

export default ShopFabricPage;
