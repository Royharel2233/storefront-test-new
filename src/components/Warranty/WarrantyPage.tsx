import React from "react";

import {InnerNavBar} from './InnerNavBar'
import {MainBanner} from './MainBanner'
import { MainContent } from "./MainContent";

import './style/style.scss'

export const WarrantyPage: React.FC<{}> = () => {
  return (
    <div className="warranty-page w-1239">
      <div>
        <MainBanner/>
      </div>
      <div>
        <InnerNavBar/>
      </div>
      <div>
        <MainContent/>
      </div>
    </div>
  );
};
