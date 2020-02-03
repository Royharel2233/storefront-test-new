import React from 'react'
import './css/style.scss'

import AboutFooter from './AboutFooter'

import AboutHeader from './AboutHeader'

import { AboutMain } from './AboutMain'

export const AboutUs = () => {
    return (
        <div>
            <div className="about-us-page w-1239">
                <AboutHeader />
                <div>
                    <AboutMain />
                </div>
                <div>
                    <AboutFooter />
                </div>
            </div>
        </div>
    )
}
