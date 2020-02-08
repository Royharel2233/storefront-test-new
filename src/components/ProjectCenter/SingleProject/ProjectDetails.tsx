import React from "react";

import { ProjectCenterProps } from "../interface";

import "../style/style.scss";

export const ProjectDetails: React.FC<ProjectCenterProps> = ({ exportObj }) => {
  const { projectState } = exportObj;

  return (
    <div className="details container">
      <div className="row one-row">
        <p className="title dark-grey bold">Project Name: </p>
        <p className="content dark-grey">{projectState.projectName}</p>
      </div>
      <div className="row one-row">
        <p className="title dark-grey bold">Date Created: </p>
        <p className="content dark-grey">{projectState.dateCreated}</p>
      </div>
      <div className="row two-rows">
        <p className="title dark-grey bold">Description</p>
        <p className="content dark-grey">{projectState.projectDescription}</p>
      </div>
      <div className="row two-rows">
        <p className="title dark-grey bold">Notes</p>
        <p className="content dark-grey">{projectState.projectNotes}</p>
      </div>
    </div>
  );
};
