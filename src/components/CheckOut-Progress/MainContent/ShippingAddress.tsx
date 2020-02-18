import React, { useState } from "react";
import "../style/style.scss";

import { CheckOutProps } from "../interfaces";

export const ShippingAddress: React.FC<CheckOutProps> = ({ exportObj }) => {
  const { userState, setUserState, setFormState } = exportObj;
  // defines the current display of the new address form
  const [displayState, setDisplayState] = useState({
    display: "",
  });

  // handles the change made by the inputs (input) variable is given as param to the onChange function
  const handleChange = (input: string | number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    // returns boolean
    e.preventDefault();
    // sets the user's new address object to the state
    setUserState({
      ...userState,
      [input]: value,
    });
  };

  const [newAddress, setNewAddress] = useState("Enter New Address");

  const handleSelectChange = (event: React.ChangeEvent<{ value: string }>) => {
    const value = event.target.value;
    // listening to events on the select element to determine whether to show the new address form or not
    if (newAddress === value) {
      setDisplayState({ display: "block" });
    } else {
      setDisplayState({ display: "none" });
    }
  };

  // handles submit by "ship to this address btn"
  const handleSubmit = () => {
    // checkes if the phone is correct
    if (userState.phone.length >= 9) {
      setNewAddress(userState.address);
      setFormState(1);
    } else {
      console.warn("phone number invalid");
    }
  };

  return (
    <div className="block-shipping-address">
      <h3 className="dark-grey">Shipping Address</h3>
      <form className="shipping-address-form">
        <select onChange={e => handleSelectChange(e)}>
          <option value={userState.address}>{userState.address}</option>
          <option value={newAddress}>{newAddress}</option>
        </select>
        <div className="new-shipping-address" style={displayState}>
          <div className="form-field">
            <label htmlFor="first_name">FIRST NAME</label>
            <input
              type="text"
              onChange={handleChange("firstName")}
              id="first_name"
            />
          </div>
          <div className="form-field">
            <label htmlFor="last_name">LAST NAME</label>
            <input
              onChange={handleChange("lastName")}
              type="text"
              id="last_name"
            />
          </div>
          <div className="form-field">
            <label htmlFor="address_one">ADDRESS 1</label>
            <input
              onChange={handleChange("address")}
              type="text"
              name="address"
              id="address_one"
            />
          </div>
          <div className="form-field">
            <label htmlFor="address_two">ADDRESS 2</label>
            <input
              onChange={handleChange("address_two")}
              type="text"
              id="address_two"
            />
          </div>
          <div className="form-field">
            <label htmlFor="city">CITY</label>
            <input onChange={handleChange("city")} type="text" id="city" />
          </div>
          <div className="form-field">
            <label htmlFor="zip">ZIP</label>
            <input onChange={handleChange("zip")} type="number" id="zip" />
          </div>
          <div className="form-field">
            <label htmlFor="state">STATE</label>
            <input onChange={handleChange("state")} type="text" id="state" />
          </div>
          <div className="form-field">
            <label htmlFor="country">COUNTRY</label>
            <input
              onChange={handleChange("country")}
              type="text"
              id="country"
            />
          </div>
          <div className="form-field">
            <label htmlFor="email_address">EMAIL ADDRESS</label>
            <input
              onChange={handleChange("email")}
              type="email"
              id="email_address"
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone_number">PHONE NUMBER</label>
            <input
              onChange={handleChange("phone")}
              type="tel"
              id="phone_number"
            />
          </div>
          <div className="form-field checkbox ">
            <label>
              <input
                type="checkbox"
                name="save_address"
                id="save_address"
                value="save_address"
              />
              SAVE ADDRESS FOR FUTURE USE
              {/* <span className="design-checkbox"></span> */}
            </label>
          </div>
        </div>
        <input
          className="checkout-page-button checkout-main-form-button"
          type="button"
          value="SHIP TO THIS ADDRESS"
          onClick={() => handleSubmit()}
        />
      </form>
    </div>
  );
};
