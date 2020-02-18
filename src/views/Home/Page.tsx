import "./scss/index.scss";

// import "./scss/style.css";

import "./scss/bootstrap.css";

// import classNames from "classnames";

import * as React from "react";

// import { Link } from "react-router-dom";

// import {ProductsFeatured} from "../../components";

import SliderWrapper from "../../components/SliderWrapper";

import CollectionMain from "../../components/CollectionMain"

import CollectionOfShades from "../../components/CollectionOfShades";

// import SlideOne from "../../components/SlideOne";

// import SlideTwo from "../../components/SlideTwo";

import SoicalLinks from "../../components/SocialMediaMain";

import ProductSection from "../../components/ProductSection";

import PartnershipSectionMain from "../../components/PartnershipSectionMain";

import FollowOnInstegramMain from "../../components/FollowOnInstegramMain";

import NewsLetterSubscriptionMain from "../../components/NewsLetterSubscriptionMain";

// import { generateCategoryUrl } from "../../core/utils";

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
      <section id="slider">
        <div className="container">
          <SoicalLinks />
          <SliderWrapper />
          {/* <CarouselTest>
          </CarouselTest> */}
        </div>
      </section>
      <section id="collection2020">
        <CollectionMain />
      </section>
      <section id="shades_collection">
        <CollectionOfShades />
      </section>
      <section id="products"> 
        <ProductSection />
      </section>
      <section id="partnership">
        <PartnershipSectionMain />
      </section>
      {/* Follow on Instagram   */}
      <section id="follow_instagram">
        <FollowOnInstegramMain />
      </section>
        
      {/* Newsletter Subscription   */}
      <section id="newsletter">
        <NewsLetterSubscriptionMain />
      </section>
      {/* <ProductsFeatured /> */}
      {/* <div className="home-page__categories">
        <div className="container">
          <h3>Shop by category</h3>
          <div className="home-page__categories__list">
            {categories.edges.map(({ node: category }) => (
              <div key={category.id}>
                <Link
                  to={generateCategoryUrl(category.id, category.name)}
                  key={category.id}
                >
                  <div
                    className={classNames("home-page__categories__list__image", {
                      "home-page__categories__list__image--no-photo": !category.backgroundImage,
                    })}
                    style={{
                      backgroundImage: `url(${
                        category.backgroundImage
                          ? category.backgroundImage.url
                          : noPhotoImg
                      })`,
                    }}
                  />
                  <h3>{category.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div> */}
  </>
);

export default Page;
