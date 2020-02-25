import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";

import {
  basicProductFragment,
  productPricingFragment
} from "../../views/Product/queries";

import { Category, CategoryVariables } from "../../views/Category/types/Category";

export const categoryProductsQuery = gql`
  ${basicProductFragment}
  ${productPricingFragment}
  query Category(
    $id: ID!
    $attributes: [AttributeScalar]
    $after: String
    $pageSize: Int
    $sortBy: ProductOrder
    $priceLte: Float
    $priceGte: Float
  ) {
    products(
      after: $after
      attributes: $attributes
      first: $pageSize
      sortBy: $sortBy
      filter: {
        categories: [$id]
        minimalPrice: { gte: $priceGte, lte: $priceLte }
      }
    ) {
      totalCount
      edges {
        node {
          attributes {
                attribute {
                  id
                  name
                  slug
                  values {
                    id
                    name
                    slug
                  }
                }
              }
          name
          ...BasicProductFields
          ...ProductPricingField
          category {
            id
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
    category(id: $id) {
      seoDescription
      seoTitle
      id
      name
      backgroundImage {
        url
      }
      ancestors(last: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
    attributes(inCategory: $id, first: 100) {
      edges {
        node {
          id
          name
          slug
          values {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

export const TypedShopFabricQuery = TypedQuery<Category,CategoryVariables>(categoryProductsQuery);
