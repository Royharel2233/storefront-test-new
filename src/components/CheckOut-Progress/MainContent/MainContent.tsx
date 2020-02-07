import React, { useEffect } from 'react'

import { CheckOutProps } from '../interfaces'

import { ShippingAddress } from './ShippingAddress'
import { ShippingMethod } from './ShippingMethod'

import '../style/style.scss'

export const MainContent: React.FC<CheckOutProps> = ({
    exportObj,
}) => {

    useEffect(() => {
        RenderPage(exportObj.formState, exportObj)
        return () => {
            RenderPage(0, exportObj)
        };
    }, [exportObj.formState])
    
    return (
        <div className="right-side">
            <div>
                {RenderPage(exportObj.formState, exportObj)}
            </div>
        </div>
    )
}

function RenderPage(param: number, exportObj) {
    switch (param) {
        case 1:
            return <div>
                <div>
                    <ShippingAddress exportObj={exportObj} />
                </div>
                <div>
                    <ShippingMethod exportObj={exportObj}/>
                </div>
            </div>;
            break;
        case 0:
            return <ShippingAddress exportObj={exportObj} />;
            break;
    }
}