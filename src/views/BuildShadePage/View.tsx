import React from "react";
// import { RouteComponentProps } from "react-router";



import Page from "./Page";
// import { TypedCollectionProductsQuery } from "./queries";


<<<<<<< HEAD
// import {
//   Online,
// } from "../../components";

=======
>>>>>>> 8dd861e25a49388e8a863aa72404a7f1abcbbccb

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
