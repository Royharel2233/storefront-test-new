import React from "react";
import { ProjectDetails } from "./ProjectDetails";
import { ProjectImages } from "./ProjectImages/ProjectImages";
import { ProjectStatus } from "./ProjectStatus";

import "../style/style.scss";

import { ProjectCenterProps } from "../interface";

export const SingleProject: React.FC<ProjectCenterProps> = ({ exportObj }) => {
  return (
    <div className="single-project">
      <div>
        <ProjectDetails exportObj={exportObj} />
      </div>
      <div className="w-100 ml-3">
        <ProjectImages exportObj={exportObj} />
      </div>
      <div className="">
        <ProjectStatus exportObj={exportObj} />
      </div>
    </div>
  );
};
