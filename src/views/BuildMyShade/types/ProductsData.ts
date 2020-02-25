/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductsData
// ====================================================

export interface ProductsData_products_edges_node_images {
  __typename: "ProductImage";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsData_products_edges_node_variants_images {
  __typename: "ProductImage";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsData_products_edges_node_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  /**
   * List of images for the product variant.
   */
  images: (ProductsData_products_edges_node_variants_images | null)[] | null;
}

export interface ProductsData_products_edges_node_attributes_attribute_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
}

export interface ProductsData_products_edges_node_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * List of attribute's values.
   */
  values: (ProductsData_products_edges_node_attributes_attribute_values | null)[] | null;
}

export interface ProductsData_products_edges_node_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: ProductsData_products_edges_node_attributes_attribute;
}

export interface ProductsData_products_edges_node {
  __typename: "Product";
  /**
   * List of images for the product.
   */
  images: (ProductsData_products_edges_node_images | null)[] | null;
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * List of variants for the product.
   */
  variants: (ProductsData_products_edges_node_variants | null)[] | null;
  /**
   * List of attributes assigned to this product.
   */
  attributes: ProductsData_products_edges_node_attributes[];
}

export interface ProductsData_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductsData_products_edges_node;
}

export interface ProductsData_products {
  __typename: "ProductCountableConnection";
  edges: ProductsData_products_edges[];
}

export interface ProductsData {
  __typename: "Category";
  /**
   * List of products in the category.
   */
  products: ProductsData_products | null;
}
