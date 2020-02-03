import React from 'react'
import './style/style.scss'

export const ProjectComplete: React.FC<{}> = () => {
    return (
        <div className="single-project complete">
            <div className="details">
                <div className="row one-row">
                    <p className="title dark-grey bold">Project Name: </p>
                    <p className="content dark-grey">Tiffany’s Room</p>
                </div>
                <div className="row one-row">
                    <p className="title dark-grey bold">Date Created: </p>
                    <p className="content dark-grey">20 December 2020</p>
                </div>
                <div className="row two-rows">
                    <p className="title dark-grey bold">Description</p>
                    <p className="content dark-grey">
                        Lorem Ipsum. Next Friday should be done. Next Monday we should
                        deliver the first iteration. Make sure, we have a good result to
                        be delivered by the day.
                            </p>
                </div>
                <div className="row two-rows">
                    <p className="title dark-grey bold">Notes</p>
                    <p className="content dark-grey">
                        Lorem Ipsum. Next Friday should be done. Next Monday we should
                        deliver the first iteration. Make sure, we have a good result to
                        be delivered by the day.
                    </p>
                </div>
            </div>
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
            <div className="status">
                <p className="dark-grey bold">Status</p>
                <button type="button" className="status-button">
                    INCOMPLETE
                </button>
                <button type="button" className="status-button-complete">
                    COMPLETE
                </button>
                <hr />
                <button type="button" className="view-details">
                    VIEW DETAILS
                </button>
                <button type="button" className="edit">
                    EDIT PROJECT
                </button>
            </div>
        </div>
    )
}
