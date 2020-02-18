export interface LoginProps {
  exportObj?: {
    // currentStatus: boolean;
    // setCurrentStatus: React.Dispatch<React.SetStateAction<boolean>>;
    pageState?: number;
    setPageState?: React.Dispatch<React.SetStateAction<number>>;
    loginState?: {
      email: string;
      password: string;
    };
    setLoginState?: React.Dispatch<
      React.SetStateAction<{
        email: string;
        password: string;
      }>
    >;
    functions?: {
      funcStorage: {
        checkPageState: (pageState: number, param: number) => "active" | "";
        RenderPage: (
          param: number,
          obj: any,
          Component: React.FC<LoginProps>,
          Component2: React.FC<LoginProps>,
          pageState: number
        ) => JSX.Element;
      };
    };
  };
  hide?: () => void;
}
