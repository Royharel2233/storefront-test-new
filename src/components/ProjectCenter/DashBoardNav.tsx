import React from 'react'
import './style/style.scss'

export const DashBoardNav: React.FC<{}> = () => {
    return (
        <div className="user-dashboard-nav">
            <div className="nav-items">
                <a className="nav-item" href="#">
                    <span className="active">Project Center</span>
                </a>
                <a className="nav-item" href="#">
                    <span>Orders</span>
                </a>
            </div>
            <div className="create-new">
                <a href="#">
                    <span className="triangular"></span>
                    <span className="dark-grey">CREATE A NEW PROJECT</span>
                </a>
                <hr />
            </div>
        </div>
    )
}