/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AttributesData
// ====================================================

export interface AttributesData_attributes_attribute_values {
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

export interface AttributesData_attributes_attribute {
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
  values: (AttributesData_attributes_attribute_values | null)[] | null;
}

export interface AttributesData_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: AttributesData_attributes_attribute;
}

export interface AttributesData {
  __typename: "Product";
  /**
   * List of attributes assigned to this product.
   */
  attributes: AttributesData_attributes[];
}
