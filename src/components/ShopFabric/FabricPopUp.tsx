import React from 'react'

import './style/style.scss'


export const FabricPopUp: React.FC<{}> = ({}) => {
        return <div className="shop-fabric-popup-dixie">
        <div className="image">
            <div className="plus-icon">
                <img src="../assets/images/Group 113.svg" />
            </div>
            <div className="gallery">
                <ul className="list_none">
                    <li>
                        <img src="../assets/images/bedroom.png" />
                    </li>
                </ul>
            </div>
        </div>
        <div className="content">
            <div className="header">
                <h1>Dixie (Milan)</h1>
                <h2>$137.00</h2>
                <p>min price</p>
                <span>
                    A beautiful basic light filtering solid that will help eliminate
                    glare, maintain natural light and provide full privacy.
                    Translucent with a subtle texture.
                </span>
            </div>
            <div className="inner-content">
                <div className="fabric-details">
                    <ul className="list_none">
                        <li>
                            <p className="title">Color</p>
                            <p className="p">Beige</p>
                        </li>
                        <li>
                            <p className="title">Fabric Number</p>
                            <p className="p">280.003</p>
                        </li>
                        <li>
                            <p className="title">Content</p>
                            <p className="p">100% Polyester</p>
                        </li>
                        <li>
                            <p className="title">Fabric Width</p>
                            <p className="p">96</p>
                        </li>
                        <li>
                            <p className="title">Max Shade Width</p>
                            <p className="p">96</p>
                        </li>
                        <li>
                            <p className="title">Products</p>
                            <p className="p">Double Roller Shades</p>
                        </li>
                    </ul>
                </div>
                <div className="available-color">
                    <p className="title">Available Colors</p>
                    <div className="colors">
                        <ul className="list_none">
                            <li>
                                <a href="#">
                                    <p className="light-grey"></p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="grey"></p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="more-details-block">
                    <div className="single-details">
                        <p className="title">Dimout Factor</p>
                        <p className="p">65</p>
                    </div>
                    <div className="single-details">
                        <p className="title">Energy Savings</p>
                        <p className="p">70</p>
                    </div>
                    <div className="single-details">
                        <p className="title">UV Blocking</p>
                        <p className="p">96</p>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="single-bottom-datails">
                        <span className="title">Care Instructions</span>
                        <span>Clean with a damp cloth, vacuum clean</span>
                    </div>
                    <div className="single-bottom-datails">
                        <span className="title">Composition</span>
                        <span>Lead + PVC Free</span>
                    </div>
                </div>
                <div className="bottom-buttons">
                    <div className="general-button">
                        <a href="#">
                            <span>ORDER SWATCH</span>
                        </a>
                        <hr />
                    </div>
                    <div className="general-button">
                        <a href="#">
                            <span>BUILD MY SHADE</span>
                        </a>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}