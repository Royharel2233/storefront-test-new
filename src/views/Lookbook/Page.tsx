import "./scss/index.scss";

// import "./scss/style.css";

import * as React from "react";

import {
  ProductsList_categories,
  ProductsList_shop,
  ProductsList_shop_homepageCollection_backgroundImage
} from "./types/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

// import noPhotoImg from "../../images/no-photo.svg";

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
  shop: ProductsList_shop;
}> = ({ loading, categories, backgroundImage, shop }) => (
  <>
    <script className="structured-data-list" type="application/ld+json">
      {structuredData(shop)}
    </script>

  </>
);

export default Page;
