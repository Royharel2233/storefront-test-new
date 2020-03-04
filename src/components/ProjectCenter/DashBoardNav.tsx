import React from "react";
import "./style/style.scss";

import { ProjectCenterProps } from "../ProjectCenter/interface";

import { NewProject } from "./SingleProject/NewProject";


export const DashBoardNav: React.FC<ProjectCenterProps> = ({ exportObj }) => {
  const { pageState, setPageState, functions } = exportObj;
  const [showPopUp, setShowPopUp] = React.useState(false);

  return (
    <div className="user-dashboard-nav">
      <div className="nav-items">
        <a className="nav-item" href="#">
          <span
            onClick={() => setPageState(0)}
            className={functions.funcStorage.checkPageState(pageState, 0)}
          >
            Project Center
          </span>
        </a>
        <a className="nav-item" href="#">
          <span
            onClick={() => setPageState(1)}
            className={functions.funcStorage.checkPageState(pageState, 1)}
          >
            Orders
          </span>
        </a>
      </div>
      <div className="create-new">
          <span className="triangular"></span>
          <span onClick={() => setShowPopUp(true)} className="dark-grey">CREATE A NEW PROJECT</span>
          <NewProject
            show={showPopUp}
            hide={() => setShowPopUp(!showPopUp)}
          />
        <hr />
      </div>
    </div>
  );
};
