import React, { useState } from "react";

import "../../style/style.scss";

import { ProjectCenterProps } from "../../interface";

import { Swatches } from "./Swatches";

import { Shades } from "./Shades";

export const ProjectImages: React.FC<ProjectCenterProps> = ({ exportObj }) => {
  const [projectImages, setProjectImages] = useState(0);

  return (
    <div className="images">
      <div className="img-nav">
        <a href="#" onClick={() => setProjectImages(0)}>
          <span
            className={exportObj.functions.funcStorage.checkPageState(
              projectImages,
              0
            )}
          >
            Swatches
          </span>
        </a>
        <a href="#" onClick={() => setProjectImages(1)}>
          <span
            className={exportObj.functions.funcStorage.checkPageState(
              projectImages,
              1
            )}
          >
            Shades
          </span>
        </a>
      </div>
      {exportObj.functions.funcStorage.RenderPage(
        projectImages,
        exportObj,
        Swatches,
        Shades,
        projectImages
      )}
    </div>
  );
};
