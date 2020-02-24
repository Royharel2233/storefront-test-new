import React, { useState } from "react";
import "../style/style.scss";

import { CheckOutProps } from "../interfaces";


export const ShippingAddress: React.FC<CheckOutProps> = ({ exportObj }) => {
  const { userState, setUserState, setFormState } = exportObj;
  // defines the current display of the new address form
  const [displayState, setDisplayState] = useState({
    display: "",
  });

  const [error, setError] = useState(false);

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
      <div className="row">
        <div className="col-lg-12">
          <h3>Shipping Address</h3>

          <form className="shipping-address-form">
            <select onChange={e => handleSelectChange(e)}>
              <option value={userState.address}>{userState.address}</option>
              <option value={newAddress}>{newAddress}</option>
            </select>

            <div className="new-shipping-address" style={displayState}>
              <div className="row">
                <div className="col-lg-6">

                  <div className="form-field error w-100">
                    <label
                      className={"form-field-text"}
                      htmlFor="first_name">
                      FIRST NAME
                    </label>

                    <input
                      value={"tony"}
                      type="text"
                      className={"form-field-input"}
                      onChange={handleChange("firstName")}
                      id="first_name"
                    />

                    <span className={"form-field-error"}>First name required</span>

                  </div>

                  <div className="form-field error w-100">
                    <label
                      className={"form-field-text"}
                      htmlFor="address">Address
                    </label>

                    <input
                      onChange={handleChange("address")}
                      type="text"
                      id="address"
                      value="212 W 33RD ST"
                      className={"form-field-input"}
                    />

                    <span className={"form-field-error"}>address required</span>

                  </div>

                  <div className="form-field error w-100">
                    <label
                      className={"form-field-text"}
                      htmlFor="city">CITY
                    </label>

                    <input
                      className={"form-field-input"}
                      onChange={handleChange("city")}
                      type="text"
                      value="new york"
                      id="city" />

                    <span className={"form-field-error"}>city required</span>

                  </div>

                  <div className="form-field error w-100">
                    <label
                      className={"form-field-text"}
                      htmlFor="state">STATE</label>

                    <input
                      className={"form-field-input"}
                      onChange={handleChange("state")}
                      type="text"
                      value="NY - NEW YORK"
                      id="state" />

                    <span className={"form-field-error"}>STATE MUST BE SELECTED</span>

                  </div>

                  <div className="form-field error w-100">
                    <label
                      className={"form-field-text"}
                      htmlFor="email_address">EMAIL ADDRESS</label>

                    <input
                      className={"form-field-input"}
                      onChange={handleChange("email")}
                      type="email"
                      value="email@email.com"
                      id="email_address"
                    />

                    <span className={"form-field-error"}>email required</span>

                  </div>

                  <div className="form-field w-100">
                    <div className="form-field-checkbox">
                      <input
                        type="checkbox"
                        name="save_address"
                        id="save_address"
                        value="save_address"
                      />

                      <label
                        className={"form-field-checkbox-label"}
                        htmlFor="save_address">Save address for future use
                      </label>
                    </div>
                  </div>

                </div>

                <div className="col-lg-6">

                  <div className="form-field error w-100">
                    <label
                      className={"form-field-text"}
                      htmlFor="first_name">
                      Last name
                    </label>

                    <input
                      value={"tony"}
                      type="text"
                      className={"form-field-input"}
                      onChange={handleChange("firstName")}
                      id="first_name"
                    />

                    <span className={"form-field-error"}>last name required</span>

                  </div>

                  <div className="form-field error w-100">
                    <label
                      className={"form-field-text"}
                      htmlFor="address_two">
                      ADDRESS 2
                    </label>

                    <input
                      onChange={handleChange("address_two")}
                      className={"form-field-input"}
                      type="text"
                      value="suite 12"
                      id="address_two"
                    />

                    <span className={"form-field-error"}>address2 required</span>

                  </div>

                  <div className="form-field error w-100">
                    <label
                      className={"form-field-text"}
                      htmlFor="city">ZIP CODE
                    </label>

                    <input
                      className={"form-field-input"}
                      onChange={handleChange("city")}
                      type="text"
                      value="new york"
                      id="city" />

                    <span className={"form-field-error"}>city required</span>

                  </div>

                  <div className="form-field error w-100">
                    <label
                      className={"form-field-text"}
                      htmlFor="country">COUNTRY</label>

                    <input
                      className={"form-field-input"}
                      onChange={handleChange("country")}
                      type="text"
                      value={"USA"}
                      id="country"
                    />

                    <span className={"form-field-error"}>Country required</span>

                  </div>

                  <div className="form-field error w-100">
                    <label
                      className={"form-field-text"}
                      htmlFor="phone_number">PHONE NUMBER</label>

                    <input
                      className={"form-field-input"}
                      onChange={handleChange("phone")}
                      type="tel"
                      value={"(212) - 232 - 2222"}
                      id="phone_number"
                    />

                    <span className={"form-field-error"}>INVALID PHONE NUMBER</span>

                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <button
                  className="checkout-page-button"
                  type="button"
                  onClick={() => handleSubmit()}
                >SHIP TO THIS ADDRESS</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
