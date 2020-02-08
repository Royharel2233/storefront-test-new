import React from "react";
import "./style/style.scss";

interface Props {
  currentState: number;
  setPageState: React.Dispatch<React.SetStateAction<number>>;
}

export const InnerNavBar: React.FC<Props> = ({
  currentState,
  setPageState,
}) => {
  const checkPageState = (param: number) =>
    currentState === param ? "active" : "";

  return (
    <div className="warranty-inner-navbar">
      <ul className="list_none">
        <li className={checkPageState(0)}>
          <a onClick={() => setPageState(0)}>WARRANTY</a>
        </li>
        <li className={checkPageState(1)}>
          <a onClick={() => setPageState(1)}>SATISFACTION GUARANTEED</a>
        </li>
        <li className={checkPageState(2)}>
          <a onClick={() => setPageState(2)}>REPAIR + REPLACEMENT</a>
        </li>
      </ul>
    </div>
  );
};
