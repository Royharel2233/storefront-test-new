import React from 'react'
import './css/style.scss'

const AboutHeader: React.FC<{}> = () => {
    return (
        <div className="static-page-header about-us-header">
        <div className="static-page-header-text">
            <h1 className="white">About Us</h1>
            <span className="off-white">Locally owned and operated in Richmond, VA</span>
        </div>
    </div>
    )
}

export default AboutHeader