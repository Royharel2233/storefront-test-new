import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";


import { ProductsListNew } from "./types/ProductsListNew";

<<<<<<< Updated upstream
// import {
//   ProductDetails,
//   ProductDetailsVariables
// } from "./types/ProductDetails";

// import { VariantList, VariantListVariables } from "./types/VariantList";



=======
>>>>>>> Stashed changes
export const fabricsQuery = gql`
query ProductsListNew {
  categories(first: 10) {
    edges {
      node {
        id
        name
        backgroundImage {
          url
        }
        ...ProductsData
      }
    }
  }
}
fragment ProductsData on Category {
  products(first: 10){
    edges{
      node{
        images{
          url
        }
        id
        name
        ...VariantsData
        ...AttributesData
      }
    }
  }
}
fragment VariantsData on Product{
    variants{
      id
      name
      sku
      images{
        url
      }
    }
}
fragment AttributesData on Product{
  attributes{
          attribute{
            id
            name
            values{
              id
              name
            }
          }
        }
}
`;

export const ChooseFabricQuery = TypedQuery<ProductsListNew, {}>(fabricsQuery);





// export const priceFragment = gql`
//   fragment Price on TaxedMoney {
//     gross {
//       amount
//       currency
//       localized
//     }
//     net {
//       amount
//       currency
//       localized
//     }
//   }
// `;

// export const basicProductFragment = gql`
//   fragment BasicProductFields on Product {
//     id
//     name
//     thumbnail {
//       url
//       alt
//     }
//     thumbnail2x: thumbnail(size: 510) {
//       url
//     }
//   }
// `;

// export const productPricingFragment = gql`
//   ${priceFragment}
//   fragment ProductPricingField on Product {
//     pricing {
//       onSale
//       priceRangeUndiscounted {
//         start {
//           ...Price
//         }
//         stop {
//           ...Price
//         }
//       }
//       priceRange {
//         start {
//           ...Price
//         }
//         stop {
//           ...Price
//         }
//       }
//     }
//   }
// `;

// export const selectedAttributeFragment = gql`
//   fragment SelectedAttributeFields on SelectedAttribute {
//     attribute {
//       name
//     }
//     values {
//       name
//     }
//   }
// `;

// export const productVariantFragment = gql`
//   ${priceFragment}
//   fragment ProductVariantFields on ProductVariant {
//     id
//     sku
//     name
//     stockQuantity
//     isAvailable
//     pricing {
//       onSale
//       priceUndiscounted {
//         ...Price
//       }
//       price {
//         ...Price
//       }
//     }
//     attributes {
//       attribute {
//         id
//         name
//       }
//       value {
//         id
//         name
//         value: name
//       }
//     }
//   }
// `;

// export const productDetailsQuery = gql`
//   ${basicProductFragment}
//   ${selectedAttributeFragment}
//   ${productVariantFragment}
//   ${productPricingFragment}
//   query ProductDetails($id: ID!) {
//     product(id: $id) {
//       ...BasicProductFields
//       ...ProductPricingField
//       descriptionJson
//       category {
//         id
//         name
//         products(first: 4) {
//           edges {
//             node {
//               ...BasicProductFields
//               ...ProductPricingField
//               category {
//                 id
//                 name
//               }
//             }
//           }
//         }
//       }
//       images {
//         id
//         url
//       }
//       attributes {
//         ...SelectedAttributeFields
//       }
//       variants {
//         ...ProductVariantFields
//       }
//       seoDescription
//       seoTitle
//       availability {
//         available
//       }
//     }
//   }
// `;

// // FIXME: Check how to handle pagination of `productVariants` in the UI.
// // We need allow the user view  all cart items regardless of pagination.
// export const productVariantsQuery = gql`
//   ${basicProductFragment}
//   ${productVariantFragment}
//   query VariantList($ids: [ID!]) {
//     productVariants(ids: $ids, first: 100) {
//       edges {
//         node {
//           ...ProductVariantFields
//           stockQuantity
//           product {
//             ...BasicProductFields
//           }
//         }
//       }
//     }
//   }
// `;

// export const TypedProductDetailsQuery = TypedQuery<
//   ProductDetails,
//   ProductDetailsVariables
// >(productDetailsQuery);

// export const TypedProductVariantsQuery = TypedQuery<
//   VariantList,
//   VariantListVariables
// >(productVariantsQuery);

