import React from "react";


import { EachItem } from "./EachItem";

import "./style/style.scss";

export const NewsPage: React.FC<{}> = ({}) => {
  return (
    <section className="news-mail-block" id="news-page">
      <div className="container">
        <div className="title-block">
          <h1>Our News</h1>
        </div>
        <EachItem/>
      </div>
    </section>
  );
};
