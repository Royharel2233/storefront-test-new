import React, { createContext } from "react";

// import { ProjectCenterProps } from "../components/ProjectCenter/interface";

const exportFunctions = {
  RenderPage: (
    state: number,
    obj: any,
    Component: React.FC<any>,
    Component2: React.FC<any>
  ) => {
    switch (state) {
      //   case 2:
      //     return <Repair/>;
      //     break;
      case 1:
        return <Component2 exportObj={obj} />;
        break;
      case 0:
        return <Component exportObj={obj} />;
        break;
    }
  },
  checkPageState: (pageState: number, param: number) =>
    pageState === param ? "active" : "",
};

export const MiscFunctionsContext = createContext({
  funcStorage: exportFunctions,
});
