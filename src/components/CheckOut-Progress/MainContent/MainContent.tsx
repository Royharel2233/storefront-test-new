import React from 'react'

import { ShippingAddress } from './ShippingAddress'
import { ShippingMethod } from './ShippingMethod'

import '../style/style.scss'

export const MainContent: React.FC<{}> = () => {
    return (
        <div className="right-side">
            <div>
                <ShippingAddress />
            </div>
            <div>
                <ShippingMethod />
            </div>
        </div>
    )
}
