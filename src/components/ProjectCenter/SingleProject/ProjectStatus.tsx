import React from 'react'

import '../style/style.scss'

export const ProjectStatus: React.FC<{}> = () => {
    return (
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
    )
}
