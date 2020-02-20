/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductsListNew
// ====================================================

export interface ProductsListNew_categories_edges_node_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsListNew_categories_edges_node_products_edges_node_images {
  __typename: "ProductImage";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsListNew_categories_edges_node_products_edges_node_variants_images {
  __typename: "ProductImage";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsListNew_categories_edges_node_products_edges_node_variants {
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
  images: (ProductsListNew_categories_edges_node_products_edges_node_variants_images | null)[] | null;
}

export interface ProductsListNew_categories_edges_node_products_edges_node_attributes_attribute_values {
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

export interface ProductsListNew_categories_edges_node_products_edges_node_attributes_attribute {
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
  values: (ProductsListNew_categories_edges_node_products_edges_node_attributes_attribute_values | null)[] | null;
}

export interface ProductsListNew_categories_edges_node_products_edges_node_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: ProductsListNew_categories_edges_node_products_edges_node_attributes_attribute;
}

export interface ProductsListNew_categories_edges_node_products_edges_node {
  __typename: "Product";
  /**
   * List of images for the product.
   */
  images: (ProductsListNew_categories_edges_node_products_edges_node_images | null)[] | null;
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * List of variants for the product.
   */
  variants: (ProductsListNew_categories_edges_node_products_edges_node_variants | null)[] | null;
  /**
   * List of attributes assigned to this product.
   */
  attributes: ProductsListNew_categories_edges_node_products_edges_node_attributes[];
}

export interface ProductsListNew_categories_edges_node_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductsListNew_categories_edges_node_products_edges_node;
}

export interface ProductsListNew_categories_edges_node_products {
  __typename: "ProductCountableConnection";
  edges: ProductsListNew_categories_edges_node_products_edges[];
}

export interface ProductsListNew_categories_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  backgroundImage: ProductsListNew_categories_edges_node_backgroundImage | null;
  /**
   * List of products in the category.
   */
  products: ProductsListNew_categories_edges_node_products | null;
}

export interface ProductsListNew_categories_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductsListNew_categories_edges_node;
}

export interface ProductsListNew_categories {
  __typename: "CategoryCountableConnection";
  edges: ProductsListNew_categories_edges[];
}

export interface ProductsListNew {
  /**
   * List of the shop's categories.
   */
  categories: ProductsListNew_categories | null;
}
