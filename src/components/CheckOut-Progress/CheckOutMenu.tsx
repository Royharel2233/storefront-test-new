import React from 'react'
import './style/style.scss'

export const CheckOutMenu: React.FC<{}> = () => {
    return (
        <ul className="checkout-menu list_none">
            <li className="selected-menu-item">
                <p className="grey">Shipping</p>
                <span className="title-devideer"></span>
            </li>
            <li>
                <p className="grey">Billing</p>
            </li>
            <li>
                <p className="grey">Review</p>
            </li>
        </ul>
    )
}