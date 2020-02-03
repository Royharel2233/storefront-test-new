import React from 'react'

import './style/style.scss'


export const FabricFilter: React.FC<{}> = ({}) => {
        return <div className="fabric-filter">
        <div className="filter">
            <span className="title">FILTER BY:</span>
            <a href="#" className="single-filter">
                <span>TYPE</span>
            </a>
            <a href="#" className="single-filter">
                <span>COLOR</span>
            </a>
            <a href="#" className="single-filter">
                <span>WIDTH</span>
            </a>
        </div>
        <div className="products-number">
            <span>150 PRODUCT(S) AVAILABLE</span>
        </div>
    </div>;
}