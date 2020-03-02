import React, { useState } from "react";
import Select from 'react-select';
import "../style.scss";

export const ShippingAddress: React.FC = () => {

  const [displayState, setDisplayState] = useState({
    display: "",
  });

  const [selectedOption, setSelectOption] = useState(null);

  const newAddress = "Enter New Address";

  // handles submit by "ship to this address btn"

  const handleChangeTest = selectedOption => {
    setSelectOption( selectedOption);

    if (selectedOption.value === newAddress) {
      setDisplayState({ display: "none" });
    } else {
      setDisplayState({ display: "block" });
    }
  };

  const options = [
    { value: 'userState.address', label: 'userState.address' },
    { value: newAddress, label: newAddress },
  ];

  return (
    <div className="block-shipping-address">
      <div className="row">
        <div className="col-lg-12">
          <h3>Shipping Address</h3>

          <form className="shipping-address-form">

            <Select
              className={"shipping-address-form-select"}
              value={selectedOption}
              options={options}
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: '#fdcd4a',
                  primary: '#fdcd4a',
                },
              })}
              onChange={handleChangeTest}>
            </Select>

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
                  type="button">SHIP TO THIS ADDRESS</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
