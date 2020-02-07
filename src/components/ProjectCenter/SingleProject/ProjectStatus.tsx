import React from "react";

import { ProjectCenterProps } from "../interface";

import "../style/style.scss";

export const ProjectStatus: React.FC<ProjectCenterProps> = ({ exportObj }) => {
  const { projectState } = exportObj;

  const ifComplete = (status: boolean) => {
    if (status) {
      const displayComplete = "status-button-complete";
      return displayComplete;
    } else {
      const displayIncomplete = "status-button";
      return displayIncomplete;
    }
  };

  const displayName = projectState.status ? "COMPLETE" : "INCOMPLETE";

  return (
    <div className="status">
      <p className="dark-grey bold">Status</p>
      <button
        type="button"
        className={ifComplete(projectState.status)}
        style={{ display: "block" }}
      >
        {displayName}
      </button>
      <hr />
      <button type="button" className="view-details">
        VIEW DETAILS
      </button>
      <button type="button" className="edit">
        EDIT PROJECT
      </button>
    </div>
  );
};
