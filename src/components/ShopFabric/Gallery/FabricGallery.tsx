import React from "react";

import "../style/style.scss";

import placeholder from "../../../img/Placeholder.png";

import placeholder3 from "../../../img/Placeholder3.png";

import placeholder9 from "../../../img/Placeholder9.png";

import { SingleGallery } from "./SingleGallery";

export const FabricGallery: React.FC<{}> = () => {
  return (
    <div className="fubric-gallery">
      <h4 className="row">Fabric: Dixie (Milan)</h4>
      <div className="gallery d-flex justify-content-between flex-wrap">
        <div>
          <SingleGallery image={placeholder3} />
        </div>
        <div>
          <SingleGallery image={placeholder9} />
        </div>
        <div>
          <SingleGallery image={placeholder3} />
        </div>
        <div>
          <SingleGallery image={placeholder9} />
        </div>
        <div>
          <SingleGallery image={placeholder} />
        </div>
        <div>
          <SingleGallery image={placeholder9} />
        </div>
        <div>
          <SingleGallery image={placeholder3} />
        </div>
        <div>
          <SingleGallery image={placeholder} />
        </div>
      </div>
    </div>
  );
};
