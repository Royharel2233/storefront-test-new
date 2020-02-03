import React from 'react'
import { ProjectDetails } from './ProjectDetails'
import { ProjectImages } from './ProjectImages'
import { ProjectStatus } from './ProjectStatus'

import '../style/style.scss'

export const SingleProject: React.FC<{}> = () => {

    return (
        <div className="single-project">
            <div>
                <ProjectDetails
                />
            </div>
            <div>
                <ProjectImages
                />
            </div>
            <div>
                <ProjectStatus
                />
            </div>
        </div>
    )
}
