import React from "react";
import howItWorks from "../../images/how-it-work.png";

import "./style/style.scss";

export const HowItWorks: React.FC<{}> = () => {
  return (
    <div className="how-it-works">
      <div className="content">
        <h1>How It Works</h1>
        <p>
          When you receive a quote, it will show you the estimated ship data.
          Depending on your order, you may receive multiple shipments. We will
          send you tracking information each time an item ships. Lead times are
          only estimates. While we make every effort to avoid delays in
          production, they do occasionally occur and are not considered grounds
          for cancellation.
        </p>
      </div>
      <img src={howItWorks} alt="how-it-work" />
    </div>
  );
};
