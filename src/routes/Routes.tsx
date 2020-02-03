import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { CheckoutLogin, NotFound } from "../components";
import UserAccount, {
  baseUrl as userAccountBaseUrl,
  userOrderDetailsUrl,
} from "../userAccount/routes";

import OrderConfirmation from "../views/OrderConfirmation/View";

import { Account } from "../views/Account";

import { ArticlePage } from "../views/Article";

import { BuildShadePage } from "../views/BuildShadePage";

import { Gallery } from "../views/Gallery";

import { Lookbook } from "../views/Lookbook";

import { CartPage } from "../views/Cart";

import { CategoryPage } from "../views/Category";

import { CollectionPage } from "../views/Collection";

import { HomePage } from "../views/Home";

// import {HomePage} from "../views/HomeCopy";

import { OrderDetails } from "../userAccount/views";

import { ProductPage } from "../views/Product";

import { SearchPage } from "../views/Search";

import { AboutUs } from "../components/AboutUs/AboutUs";

import { CheckOut } from "../components/CheckOut-Progress/CheckOut";

import { ContactUs } from "../components/ContactUs/ContactUs";

import { DashBoardHome } from "../../src/components/ProjectCenter/DashBoardHome";

import { ShippingHandling } from "../components/ShippingHandling/ShippingHandling";

import { ShopFabric } from "../components/ShopFabric/ShopFabric";

import { WarrantyPage } from "../components/Warranty/WarrantyPage";


const slugUrl = ":slug([a-z-0-9]+)/:id([0-9]+)/";
export const baseUrl = "/";
export const buildShadeUrl = `${baseUrl}build-shade/`;
export const galleryUrl = `${baseUrl}gallery/`;
export const lookBook = `${baseUrl}lookbook/`;
export const searchUrl = `${baseUrl}search/`;
export const categoryUrl = `${baseUrl}category/${slugUrl}`;
export const collectionUrl = `${baseUrl}collection/${slugUrl}`;
export const productUrl = `${baseUrl}product/${slugUrl}`;
export const cartUrl = `${baseUrl}cart/:token?/`;
export const checkoutLoginUrl = `${baseUrl}login/`;
export const pageUrl = `${baseUrl}page/:slug/`;
export const guestOrderDetailsUrl = `/order/:token/`;
export const orderConfirmationUrl = `${baseUrl}order-confirmation/`;
export const accountUrl = `${baseUrl}account/`;
export const orderHistoryUrl = `${baseUrl}order-history/`;
export const addressBookUrl = `${baseUrl}address-book/`;
export const paymentOptionsUrl = `${baseUrl}payment-options/`;
export const aboutUs = `${baseUrl}about-us/`;
export const checkOut = `${baseUrl}check-out/`;
export const projectCenter = `${baseUrl}project-center/`;
export const shopFabric = `${baseUrl}shop-fabric/`;
export const contactUs = `${baseUrl}contact-us/`;
export const shippingHandling = `${baseUrl}shipping-handling/`;
export const warrantyPage = `${baseUrl}warranty-page/`;

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path={baseUrl} component={HomePage} />
    <Route path={galleryUrl} component={Gallery} />
    <Route path={lookBook} component={Lookbook} />
    <Route path={searchUrl} component={SearchPage} />
    <Route path={categoryUrl} component={CategoryPage} />
    <Route path={collectionUrl} component={CollectionPage} />
    <Route path={productUrl} component={ProductPage} />
    <Route path={cartUrl} component={CartPage} />
    <Route path={checkoutLoginUrl} component={CheckoutLogin} />
    <Route path={pageUrl} component={ArticlePage} />
    <Route path={userAccountBaseUrl} component={UserAccount} />
    <Route path={userOrderDetailsUrl} component={OrderDetails} />
    <Route path={guestOrderDetailsUrl} component={OrderDetails} />
    <Route path={orderConfirmationUrl} component={OrderConfirmation} />
    <Route path={accountUrl} component={Account} />
    <Route path={orderHistoryUrl} component={Account} />
    <Route path={addressBookUrl} component={Account} />
    <Route path={paymentOptionsUrl} component={Account} />
    <Route path={buildShadeUrl} component={BuildShadePage} />
    <Route path={checkOut} component={CheckOut} />
    <Route path={projectCenter} component={DashBoardHome} />
    <Route path={shopFabric} component={ShopFabric} />
    <Route path={aboutUs} component={AboutUs} />
    <Route path={contactUs} component={ContactUs} />
    <Route path={shippingHandling} component={ShippingHandling} />
    <Route path={warrantyPage} component={WarrantyPage} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
