export interface ProjectCenterProps {
  exportObj: {
    currentStatus: boolean;
    setCurrentStatus: React.Dispatch<React.SetStateAction<boolean>>;
    pageState: number;
    setPageState: React.Dispatch<React.SetStateAction<number>>;
    projectState: {
      projectName: string;
      dateCreated: string;
      projectDescription: string;
      projectNotes: string;
      status: boolean;
    };
    setProjectState: React.Dispatch<
      React.SetStateAction<{
        projectName: string;
        dateCreated: string;
        projectDescription: string;
        projectNotes: string;
        status: boolean;
      }>
    >;
    functions?: {
      funcStorage: {
        checkPageState: (pageState: number, param: number) => "active" | "";
        RenderPage: (
          param: number,
          obj: any,
          Component: React.FC<ProjectCenterProps>,
          Component2: React.FC<ProjectCenterProps>,
          pageState: number
        ) => JSX.Element;
      };
    };
  };
  // display?: CSSProperties
}
