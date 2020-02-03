import React from 'react'
import './style/style.scss'

export const MainBanner: React.FC<{}> = ({ }) => {
    return <div className="main-banner">
        <div className="content">
            <h1 className="white">
                Warranty +<br /> Satisfaction Guaranteed
          </h1>
            <span className="off-white">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          </span>
        </div>
    </div>;
}