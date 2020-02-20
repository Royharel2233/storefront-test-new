import React from "react";
// import { RouteComponentProps } from "react-router";


// import NetworkStatus from "../../components/NetworkStatus";

// cosnt some = 
import Page from "./Page";
// import { TypedCollectionProductsQuery } from "./queries";

// import { getGraphqlIdFromDBId } from "../../core/utils";

// import {
//   Online,
// } from "../../components";

import { ChooseFabricQuery } from "./queries"

export const View: React.FC = () => (
  <div className="home-page">
    <ChooseFabricQuery
    // variables={{
    //   id: getGraphqlIdFromDBId(match.params.id, "Product"),
    //   }}
    //   key={match.params.id}
    >
      {({ data }) => {
        return (
          <Page
            categories={data.categories}
          />
        );
      }}
    </ChooseFabricQuery>
  </div>
);
export default View;
