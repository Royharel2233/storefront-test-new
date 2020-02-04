import React from "react";
import { RouteComponentProps } from "react-router";

// import "../globalStyles/scss/index.scss";

import "../css/style.css";

import "../css/bootstrap.css";

import {MainMenu, MetaConsumer, OverlayManager } from "../components";

import FooterMain from "../components/FooterMain";

import { isPath } from "../core/utils";

import { orderConfirmationUrl, Routes } from "../routes";

const App: React.FC<RouteComponentProps> = ({
  history: {
    location: { pathname },
  },
}) => {
  const orderConfirmationPage = isPath(pathname, orderConfirmationUrl);
  return (
    <>
      <MetaConsumer />
      <header>
        <MainMenu />
        <br />
        <br/>
      </header>
      <Routes />
      <br/>
      <br/>
      <footer>
        {!orderConfirmationPage && <FooterMain />}
      </footer>
      <OverlayManager />
    </>
  );
};

export default App;
