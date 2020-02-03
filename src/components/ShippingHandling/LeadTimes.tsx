import React from "react";
import './style/style.scss'


export const LeadTimes: React.FC<{}> = ({}) => {
  return (
    <div className="lead-times">
      <div className="title">
        <h1>Lead Times</h1>
        <p>All lead times are in business days.</p>
      </div>
      <div className="content">
        <div className="single-lead">
          <h3>Roller Shades</h3>
          <p>2 - 3 weeks</p>
        </div>
        <div className="single-lead">
          <h3>Double Roller Shades</h3>
          <p>2 - 3 weeks</p>
        </div>
        <div className="single-lead">
          <h3>Tailored Roman Shades</h3>
          <p>3 - 4 weeks</p>
        </div>
      </div>
    </div>
  );
};
