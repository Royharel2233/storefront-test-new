import React from 'react'
import '../style/style.scss'

export const ShippingAddress: React.FC<{}> = () => {
    return (
        <div className="block-shipping-address">
                <h3 className="dark-grey">Shipping Address</h3>
                <form className="shipping-address-form">
                    <select>
                        <option>
                            <span>
                                43 W 33rd Street NEW YORK, NY, usa - ship to “tony danza”
                                    </span>
                        </option>
                        <option>
                            <span>ADD A NEW SHIPPING ADDRESS</span>
                        </option>
                    </select>
                    <div className="new-shipping-address">
                        <div className="form-field">
                            <label htmlFor="first_name">FIRST NAME</label>
                            <input type="text" name="first_name" id="first_name" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="last_name">LAST NAME</label>
                            <input type="text" name="last_name" id="last_name" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="address_one">ADDRESS 1</label>
                            <input type="text" name="address_one" id="address_one" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="address_two">ADDRESS 2</label>
                            <input type="text" name="address_two" id="address_two" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="city">CITY</label>
                            <input type="text" name="city" id="city" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="zip">ZIP</label>
                            <input type="number" name="zip" id="zip" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="state">STATE</label>
                            <input type="text" name="state" id="state" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="country">COUNTRY</label>
                            <input type="text" name="country" id="country" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email_address">EMAIL ADDRESS</label>
                            <input type="email" name="email_address" id="email_address" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="phone_number">PHONE NUMBER</label>
                            <input type="tel" name="phone_number" id="phone_number" />
                        </div>
                        <div className="form-field checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name="save_address"
                                    id="save_address"
                                    value="save_address"
                                />
                                SAVE ADDRESS FOR FUTURE USE
                    <span className="design-checkbox"></span>
                            </label>
                        </div>
                    </div>
                    <input
                        className="checkout-page-button checkout-main-form-button"
                        type="button"
                        value="SHIP TO THIS ADDRESS"
                    />
                </form>
            </div>
    )
}
