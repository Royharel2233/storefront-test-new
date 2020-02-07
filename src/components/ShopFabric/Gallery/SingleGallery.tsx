import React from "react";

interface SingleGalleryProps {
  className?: string;
  image: string;
  productName?: string;
}

export const SingleGallery: React.FC<SingleGalleryProps> = ({
  image,
  productName,
}) => {
  return (
    <div className="single-gallery">
      <a href="#">
        <img src={image} />
      </a>
      <div className="content">
        <h3>Inky</h3>
        <div className="button">
          <a href="#">
            <span>ORDER SWATCH</span>
          </a>
          <hr />
        </div>
        <div className="button">
          <a href="#">
            <span>BUILD MY SHADE</span>
          </a>
          <hr />
        </div>
      </div>
    </div>
  );
};
