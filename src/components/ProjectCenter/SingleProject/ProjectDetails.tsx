import React from 'react'

import '../style/style.scss'

export const ProjectDetails: React.FC<{}> = ({}) => {
    return (
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
    )
}
