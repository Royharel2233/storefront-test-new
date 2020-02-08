import React, { useState } from "react";

import { InnerNavBar } from "./InnerNavBar";

import { MainBanner } from "./MainBanner";

import { MainContent } from "./Content/MainContent";

import { Repair } from "./Content/Repair";

import { Satisfaction } from "./Content/Satisfaction";

import "./style/style.scss";

export const WarrantyPage: React.FC<{}> = () => {
  const [pageState, setPageState] = useState(0);

  return (
    <div className="warranty-page w-1239">
      <div>
        <MainBanner />
      </div>
      <div>
        <InnerNavBar currentState={pageState} setPageState={setPageState} />
      </div>
      <div>{RenderPage(pageState)}</div>
    </div>
  );
};

function RenderPage(param: number) {
  switch (param) {
    case 2:
      return <Repair />;
      break;
    case 1:
      return <Satisfaction />;
      break;
    case 0:
      return <MainContent />;
      break;
  }
}
