import React from "react";
import { RouteComponentProps } from "react-router";

// import "../globalStyles/scss/index.scss";

import "../css/style.scss";

import {MainMenu, MetaConsumer, OverlayManager } from "../components";

import FooterMain from "../components/FooterMain";

import { isPath } from "../core/utils";

import { orderConfirmationUrl, Routes } from "../routes";

// import {useAuth} from "@sdk/react";


const App: React.FC<RouteComponentProps> = ({
  history: {
    location: { pathname },
  },
}) => {
  const orderConfirmationPage = isPath(pathname, orderConfirmationUrl);
  // const [isAuthticated, setIsAuthticated] = useState(useAuth())

  // useAuth((authenticated: boolean) => {
  //   if (authenticated) {
  //       setIsAuthticated()
  //   } else {
  //       setIsAuthticated()
  //   }
  //   });
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
