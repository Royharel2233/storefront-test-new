import * as React from "react";
// import { RouteComponentProps } from "react-router";


import Page from "./Page";
// import { TypedCollectionProductsQuery } from "./queries";


import {
  Online,
} from "../../components";

import {ChooseFabricQuery} from "./queries"

export const View: React.FC = ({}) => (
  <Online>
    <div className="home-page">
      <ChooseFabricQuery>
        {({data, loading}) => {
            return (
                <Page
                  categories={data.categories}
                />
            );
        }}
      </ChooseFabricQuery>
    </div>
  </Online>
);
export default View;
