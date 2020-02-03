import React from 'react'

import '../style/style.scss'

export const ProjectImages: React.FC<{}> = () => {
    return (
        <div className="images">
                <div className="img-nav">
                    <a href="#">
                        <span>Swatches</span>
                    </a>
                    <a href="#">
                        <span className="active">Shades</span>
                    </a>
                </div>
                <div className="img-content">
                    <div className="single-img">
                        <img />
                        <div className="details">
                            <p className="name charcoal-black">double roller</p>
                            <p className="type light-grey">fabric detail here</p>
                            <p className="quantity grey">quantity: 01</p>
                        </div>
                    </div>
                    <div className="single-img">
                        <img />
                        <div className="details">
                            <p className="name charcoal-black">double roller</p>
                            <p className="type light-grey">fabric detail here</p>
                            <p className="quantity grey">quantity: 01</p>
                        </div>
                    </div>
                    <div className="single-img">
                        <img />
                        <div className="details">
                            <p className="name charcoal-black">double roller</p>
                            <p className="type light-grey">fabric detail here</p>
                            <p className="quantity grey">quantity: 01</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
