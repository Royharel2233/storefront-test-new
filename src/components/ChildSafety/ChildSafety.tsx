import React from "react";

import sidepic1 from "../../img/child_safety_warning.png";

import sidepic2 from "../../img/child_safety_us.png";

import sidepic3 from "../../img/child_safety_wcma.png";

import "./style/style.scss";

// import background from '../../img/child_safety_background.svg'

export const ChildSafety: React.FC<{}> = ({}) => {
  return (
    <div className="child-safety container">
      <div className="header">
        <div className="content">
          <h1 className="">Child Safety</h1>
          <p>
            Every product we send out is in accordance with the latest safety
            standards as set forth by the Consumer Product Safety Council and
            the Window Covering Manufacturers Association.
            <br />
            <br />
            For enhanced safety, we also offer cordless and motorized window
            treatments.
          </p>
        </div>
      </div>
      <div className="main-content row col-sm-12">
        <div className="main  col-sm-8">
          <h1>REMEMBER THESE SAFETY RULES</h1>
          <br />
          <p>
            • Install only cordless window coverings in young children’s
            bedrooms and sleeping areas
            <br />
            • Replace window blinds, corded shades and draperies manufactured
            before 2001 with today’s safer products
            <br />
            • Move all cribs, beds, furniture and toys away from windows and
            window cords.
            <br />
            • Keep all window pull cords and inner lift cords out of the reach
            of children. Make sure that tasseled pull cords are secured out of
            the reach of children. Make sure that tasseled pull cords are
            secured out of reach with a cord cleat, and continuous-loop cords
            are permanently anchored to the floor or wall. Make sure cord stops
            are properly installed and adjusted to limit movement of inner lift
            cords
            <br />
            • Lock cords into position whenever horizontal blinds or shades are
            lowered, including when they come to rest on a window still
            <br />
            • Never mount products with accessible back cords, such as Roman or
            Woven Wood Shades, within reach of children.
            <br />
            <br />
            <span className="font-weight-bold"> To order:</span>
            <br />
            Visit www.windowcoverings.org and click on “order free retro kit” or
            Call the Window Covering Safety Council directly at 800-506-4636.
            All products that are delivered come with the appropriate safety and
            warning labels. The warning label (to the right) are an example of
            this - as it is important for parents to understand the potential
            risks associated with corded shades and blinds. If you have any
            questions or concerns - please do not hesitate to contact us
            directly. Or feel free to reach out to the safety agencies below.
            Your children’s safety is our number one priority
          </p>
        </div>
        <div className="side-pics col-sm-4">
          <img className="m-auto" src={sidepic1} alt="" />
          <div className=" d-flex ">
            <img className="m-auto w-25" src={sidepic2} alt="" />
            <img className="m-auto w-25" src={sidepic3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
