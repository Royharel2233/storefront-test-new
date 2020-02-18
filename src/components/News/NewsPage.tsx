import React from 'react'

import {EachItem} from './EachItem'

import './style/style.scss'

export const NewsPage: React.FC<{}> = ({}) => {
        return <div className="main-container container">
            <div className="main-banner">
                <div className="content">
                <h1 className="">Our News</h1>
                </div>
            </div>
            <div>
                <EachItem/>
            </div>
        </div>;
}