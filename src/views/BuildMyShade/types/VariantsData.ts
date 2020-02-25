/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: VariantsData
// ====================================================

export interface VariantsData_variants_images {
  __typename: "ProductImage";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VariantsData_variants {
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
  images: (VariantsData_variants_images | null)[] | null;
}

export interface VariantsData {
  __typename: "Product";
  /**
   * List of variants for the product.
   */
  variants: (VariantsData_variants | null)[] | null;
}
