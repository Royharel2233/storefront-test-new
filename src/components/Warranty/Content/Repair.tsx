import React from "react";
import "./style/style.scss";

export const Repair: React.FC<{}> = ({}) => {
  return (
    <div className="repair-replacement warranty-main-content">
      <div className="repair-content">
        <p className="repair-title">Repair Policies</p>
        <ol>
          <li>
            <span className="text-style-1">Shipping Damage:</span>{" "}
            <p>
              If damage occurred during shipping, immediately notify the shipper
              to report any and all damage or credit for the damaged product may
              be denied.
            </p>
          </li>
          <li>
            <span className="text-style-1">Repairs:</span>
            <p className="row">
              When necessary to send a window treatment back for repair, a
              repair order must be sent in writing via email. We will issue an
              RGA (Returned Goods Authorization) Number. Make sure the window
              treatment is properly packaged, and that the box and packing slip
              reference your company name and the RGA #. Upon receipt of the
              item to be repaired, we will make the requested repairs and ship
              the repaired window treatment back as soon as possible. If the
              reason for the repair is due to a defect in workmanship or
              materials, there will be no charge; otherwise there will be a
              charge for the repair.
            </p>
          </li>
          <li>
            <span>Replacements/Remakes:</span>
            <p>
              All requests for replacements/remakes must be made in writing,
              referencing the original Invoice #/side mark and order date, as
              well as the reason for the remake, and faxed or emailed to us. We
              will remake the window treatment per the replacement order as a
              new order that must be paid for as any new order. Use the original
              box to package the original window treatment. Once the replacement
              is shipped, the original window treatment (or damage portion, as
              requested) must be returned within 30 days for credit. If the
              original window treatment or damaged portion is not returned to us
              in 30 days, you will be charged for the remake. No credit will be
              issued on the account for the remake
            </p>
          </li>
        </ol>
      </div>
      <div className="repair-contact"></div>
    </div>
  );
};
