import React from "react";

interface ProgressBarProps {
  currentProgress: {
    currentProgress: number;
    setCurrentProgress: React.Dispatch<React.SetStateAction<number>>;
    currentStringState: string;
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
    for (const key in states) {
      if (states.hasOwnProperty(key)) {
        const element: string = states[key];
        if (element.toUpperCase() === currentProgress.currentStringState) {
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
            {currentProgress.currentProgress}%
          </div>
        </div>
        <div className="current-order-status w-75">
          <div className="row d-flex justify-content-between">
            <p className={checkState("ORDER PLACED")}>order placed</p>
            <p className={checkState("PROCESSING")}>processing</p>
            <p className={checkState("PREPARING TO SHIP")}>preparing to ship</p>
            <p className={checkState("IN TRANSIT")}>in transit</p>
            <p className={checkState("DELIVERED")}>delivered</p>
          </div>
        </div>
        <div>
          <span>Order Notes</span>
          <p>
            Lorem Ipsum dolor. Please call me and email. This is an urgent order
            please please pelase. ship as soon as possible.
          </p>
        </div>
      </div>
    </>
  );
};
