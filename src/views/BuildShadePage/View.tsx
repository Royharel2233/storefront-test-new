import React from "react";
// import { RouteComponentProps } from "react-router";



import Page from "./Page";
// import { TypedCollectionProductsQuery } from "./queries";




import {ChooseFabricQuery} from "./queries"

export const View: React.FC = ({}) => (
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
);
export default View;
