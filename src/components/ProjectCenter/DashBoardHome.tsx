import React, { useContext, useState } from "react";

import { DashBoardNav } from "./DashBoardNav";

import { SingleProject } from "./SingleProject/SingleProject";

import { OrdersPage } from "./SingleProject/Orders/OrdersPage";

import { MiscFunctionsContext } from "../../context/MiscFunctions";

import "./style/style.scss";

export const DashBoardHome: React.FC<{}> = () => {
  const userName = "Guy";

  const [pageState, setPageState] = useState(0);

  const [currentStatus, setCurrentStatus] = useState(true);

  const [projectState, setProjectState] = useState({
    projectName: `Guy's room`,
    dateCreated: "20 December 2020",
    projectDescription: ` Next Friday should be done. Next Monday we should
        deliver the first iteration. Make sure, we have a good result to
        be delivered by the day.`,
    projectNotes: "This is a coupe of Demo Notes just for checking the props",
    status: currentStatus,
  });

  const exportObj = {
    currentStatus,
    setCurrentStatus,
    projectState,
    setProjectState,
    pageState,
    setPageState,
    functions: useContext(MiscFunctionsContext),
  };

  return (
    <div className="project-center container">
      <h2 className="normal">Welcome back, {userName}</h2>
      <DashBoardNav exportObj={exportObj} />
      <div className="projects-wrraper">
        <div>
          {exportObj.functions.funcStorage.RenderPage(
            pageState,
            exportObj,
            SingleProject,
            OrdersPage
          )}
        </div>
      </div>
    </div>
  );
};
