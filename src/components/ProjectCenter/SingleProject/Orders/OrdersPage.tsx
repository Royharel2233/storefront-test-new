import React from "react";

import { ProgressBar } from "./ProgressBar";

import { ProjectCenterProps } from "../../interface";

export const OrdersPage: React.FC<ProjectCenterProps> = ({ exportObj }) => {
  const [OrdersPageState, setOrdersPageState] = React.useState({
    orderNumber: "#N12345",
    orderedOn: "14 December, 2019",
    currentStringState: 'PROCESSING',
  });
  // const [currentStringState] = React.useState("ORDER PLACED");
  const [currentProgress, setCurrentProgress] = React.useState(0);
  
  
  return (
    <div>
      <hr className="bg-dark" />
      <div className="d-flex justify-content-center">
        <div className="text-center row current-order-status p-1 " >
          <p className="ordered-on">Order Number {OrdersPageState.orderNumber}</p>
          <p className="p-1">|</p>
          <p className="ordered-on">Ordered On {OrdersPageState.orderedOn}</p>
        </div>
      </div>
      <div className="w-100">
        <ProgressBar
          currentProgress={{
            OrdersPageState,
            setOrdersPageState,
            currentProgress,
            setCurrentProgress,
            // currentStringState,
        //     active,
          }}
        />
      </div>
      <div className="current-order-status">
          <p className="ordered-on text-center">Order Notes</p>
          <p className="text-center">
            Lorem Ipsum dolor. Please call me and email. This is an urgent order
            please please pelase. ship as soon as possible.
          </p>
        </div>
    </div>
  );
};
