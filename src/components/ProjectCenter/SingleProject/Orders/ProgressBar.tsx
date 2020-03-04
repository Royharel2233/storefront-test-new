import React from "react";

interface ProgressBarProps {
  currentProgress: {
    currentProgress: number;
    setCurrentProgress: React.Dispatch<React.SetStateAction<number>>;
    OrdersPageState: {
      orderNumber: string;
      orderedOn: string;
      currentStringState: string;
    };
    setOrdersPageState: React.Dispatch<
      React.SetStateAction<{
        orderNumber: string;
        orderedOn: string;
        currentStringState: string;
      }>
    >;
    currentStringState?: string;
    active?: string;
  };
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentProgress,
}) => {
  const progress = { width: `${currentProgress.currentProgress}%` };
  const [active, setActive] = React.useState("");

  const checkState = (stringParam: string) =>
    stringParam === active ? "active" : "";

  const checkProgress = () => {
    const states = {
      1: "order placed",
      2: "processing",
      3: "preparing to ship",
      4: "in transit",
      5: "delivered",
    };

    const progressByState = (stringState: string) => {
      if (stringState === states[1]) {
        return 20;
      } else if (stringState === states[2]) {
        return 35;
      } else if (stringState === states[3]) {
        return 58;
      } else if (stringState === states[4]) {
        return 80;
      } else if (stringState === states[5]) {
        return 100;
      }
    };

    for (const key in states) {
      if (states.hasOwnProperty(key)) {
        const element: string = states[key];
        if (
          element.toUpperCase() ===
          currentProgress.OrdersPageState.currentStringState
        ) {
          currentProgress.setCurrentProgress(progressByState(element));
          return setActive(element.toUpperCase());
        }
      }
    }
  };

  React.useEffect(() => {
    checkProgress();
    return () => {
      checkProgress();
    };
  }, []);

  return (
    <>
      <div className="">
        <div className="progress">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={progress}
            aria-valuenow={currentProgress.currentProgress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {/* {currentProgress.currentProgress}% */}
          </div>
        </div>
        <div className="current-order-status w-100 mt-2 ">
          <div className="row d-flex justify-content-between w-75 m-auto">
            <p className={checkState("ORDER PLACED")}>order placed</p>
            <p className={checkState("PROCESSING")}>processing</p>
            <p className={checkState("PREPARING TO SHIP")}>preparing to ship</p>
            <p className={checkState("IN TRANSIT")}>in transit</p>
            <p className={checkState("DELIVERED")}>delivered</p>
          </div>
        </div>
      </div>
    </>
  );
};
