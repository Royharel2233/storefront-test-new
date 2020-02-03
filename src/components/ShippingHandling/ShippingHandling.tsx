import React from 'react'
import { DeliveryMethod } from './DeliveryMethod'
import { HowItWorks } from './HowItWorks'
import { LeadTimes } from './LeadTimes'

import './style/style.scss'

export const ShippingHandling: React.FC<{}> = () => {
    return (
        <div className="shipping-handling-page w-1239">
            <div className="shipping-handling-main-banner">
                <div className="content">
                    <h1 className="dark-grey">Shipping + Handling</h1>
                    <span className="dark-grey">$15 Fixed Freight on all regular UPS shippable orders. Read more below</span>
                </div>
            </div>
            <div>
                <DeliveryMethod/>
            </div>
            <div>
                <HowItWorks/>
            </div>
            <div>
               <LeadTimes/>
            </div>
        </div>
    )
}
