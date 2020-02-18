import React from "react";

import "../style/style.scss";

import fabricVariant1 from "../../../img/Placeholder.png";

import fabricVariant2 from "../../../img/Placeholder3.png";

import fabricVariant3 from "../../../img/Placeholder9.png";

import { SingleGallery } from "./SingleGallery";

export const FabricGallery: React.FC<{}> = () => {
  return (
    <div className="fubric-gallery">
      <h4 className="row">Fabric: Dixie (Milan)</h4>
      <div className="gallery d-flex justify-content-between flex-wrap">
        <div>
          <SingleGallery image={fabricVariant2} />
        </div>
        <div>
          <SingleGallery image={fabricVariant3} />
        </div>
        <div>
          <SingleGallery image={fabricVariant2} />
        </div>
        <div>
          <SingleGallery image={fabricVariant3} />
        </div>
        <div>
          <SingleGallery image={fabricVariant1} />
        </div>
        <div>
          <SingleGallery image={fabricVariant3} />
        </div>
        <div>
          <SingleGallery image={fabricVariant2} />
        </div>
        <div>
          <SingleGallery image={fabricVariant1} />
        </div>
      </div>
    </div>
  );
};
