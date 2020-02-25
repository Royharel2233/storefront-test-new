import React from "react";

import { ProgressBar } from "./ProgressBar";

import { ProjectCenterProps } from "../../interface";

export const OrdersPage: React.FC<ProjectCenterProps> = ({ exportObj }) => {
  const [OrdersPageState] = React.useState({
    orderNumber: "#N12345",
    orderedOn: "14 December, 2019",
  });
  const [currentProgress, setCurrentProgress] = React.useState(25);
  
  const [currentStringState] = React.useState("ORDER PLACED");

  return (
    <div>
      <hr className="bg-dark" />
      <div>
        <div className="text-center row">
          <p>order number is ${OrdersPageState.orderNumber}</p>
          <p>||</p>
          <p>ordered on ${OrdersPageState.orderedOn}</p>
        </div>
      </div>
      <div className="w-100">
        <ProgressBar
          currentProgress={{
            currentProgress,
            setCurrentProgress,
            currentStringState,
        //     active,
          }}
        />
      </div>
    </div>
  );
};
