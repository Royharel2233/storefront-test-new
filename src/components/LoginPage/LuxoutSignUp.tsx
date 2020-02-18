import React from "react";

import { Form } from "..";

import { maybe } from "../../core/utils";

import { TypedCustomerRegisterMutation } from "../OverlayManager/Login/queries";

import { RegisterCutomer } from "../OverlayManager/Login/types/RegisterCutomer";

import { AlertManager, useAlert } from "react-alert";

import "./style/style.scss";

const showSuccessNotification = (
  data: RegisterCutomer,
  hide: () => void,
  alert: AlertManager
) => {
  const successful = maybe(() => !data.accountRegister.errors.length);

  if (successful) {
    hide();
    alert.show(
      {
        title: "New user has been created",
      },
      { type: "success" }
    );
  }
};

export const LuxoutSignUp: React.FC<{ hide: () => void }> = ({ hide }) => {
  const alert = useAlert();
  const [signUpState, setSignUpState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password } = signUpState;

  // const [buisnessInfo, setBuisnessInfo] = React.useState({
  //   companyName: "",
  //   website: "",
  //   address: "",
  //   addressTwo: "",
  //   city: "",
  //   zipCode: 0,
  //   state: "",
  //   country: "",
  //   tradeOrganization: "",
  // })

  const handleChange = (input: string | number) => (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    evt.preventDefault();
    setSignUpState({
      ...signUpState,
      [input]: evt.target.value,
    });
    // setBuisnessInfo({
    //   ...buisnessInfo,
    //   [input]: evt.target.value,
    // })
    console.log(signUpState);
  };

  return (
    <TypedCustomerRegisterMutation
      onCompleted={data => showSuccessNotification(data, hide, alert)}
    >
      {(registerCustomer, { loading, data }) => {
        return (
          <div className="login-form container w-50">
            <div className="col-sm-12 sign-up">
              <Form
                errors={maybe(() => data.accountRegister.errors, [])}
                onSubmit={event => {
                  event.preventDefault();
                  registerCustomer({
                    variables: {
                      firstName,
                      lastName,
                      email,
                      password,
                    },
                  });
                }}
              >
                <p>Account information</p>
                <div className="row">
                  <div className="form-row col-sm-6">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      onChange={handleChange("firstName")}
                      type="text"
                      name="first_name"
                      id="first_name"
                    />
                  </div>
                  <div className="form-row col-sm-6">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      onChange={handleChange("lastName")}
                      type="text"
                      name="last_name"
                      id="last_name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-row col-sm-6">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      onChange={handleChange("email")}
                      type="email"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="form-row col-sm-6">
                    <label htmlFor="phone_number">PHONE NUMBER</label>
                    <input
                      onChange={handleChange("phoneNumber")}
                      type="text"
                      name="phone_number"
                      id="phone_number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-row col-sm-6">
                    <label htmlFor="password">PASSWORD</label>
                    <input
                      onChange={handleChange("password")}
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                  <div className="side-guide col-sm-6 p-1">
                    <ul>
                      Your password must meet the following qualifications:
                      <li>8 characters long</li>
                      <li>at least 1 uppercase and 1 lowercase letter</li>
                      <li>a special character ( !@#$%&* )</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="form-row col-sm-6">
                    <label htmlFor="confirm_password">CONFIRM PASSWORD</label>
                    <input
                      onChange={handleChange("confirmPassword")}
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                    />
                  </div>
                  <div className="form-row col-sm-6"></div>
                </div>
                {/* <div className="business-information">
                  <br />
                  <p>Business information</p>
                  <br />
                  <div className="row">
                    <div className="form-row col-sm-6">
                      <label htmlFor="company_name">COMPANY NAME</label>
                      <input
                        onChange={handleChange("companyName")}
                        type="text"
                        name="company_name"
                        id="company_name"
                      />
                    </div>
                    <div className="form-row col-sm-6">
                      <label htmlFor="company_website">WEBSITE</label>
                      <input
                        onChange={handleChange("website")}
                        type="text"
                        name="company_website"
                        id="company_website"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-row col-sm-6">
                      <label htmlFor="company_address">ADDRERSS</label>
                      <input
                        onChange={handleChange("address")}
                        type="text"
                        name="company_address"
                        id="company_address"
                      />
                    </div>
                    <div className="form-row col-sm-6">
                      <label htmlFor="company_address_two">
                        ADDRERSS(OPTIONAL)
                      </label>
                      <input
                        onChange={handleChange("addressTwo")}
                        type="text"
                        name="company_address_two"
                        id="company_address_two"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-row col-sm-6">
                      <label htmlFor="company_city">CITY</label>
                      <input
                        onChange={handleChange("city")}
                        type="text"
                        name="company_city"
                        id="company_city"
                      />
                    </div>
                    <div className="form-row col-sm-6">
                      <label htmlFor="company_zip">ZIP CODE</label>
                      <input
                        onChange={handleChange("zipCode")}
                        type="text"
                        name="company_zip"
                        id="company_zip"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-row col-sm-6">
                      <label htmlFor="company_state">STATE</label>
                      <input
                        onChange={handleChange("state")}
                        type="text"
                        name="company_state"
                        id="company_state"
                      />
                    </div>
                    <div className="form-row col-sm-6">
                      <label htmlFor="company_country">COUNTRY</label>
                      <input
                        onChange={handleChange("country")}
                        type="text"
                        name="company_country"
                        id="company_country"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-row col-sm-6">
                      <label htmlFor="company_trade_org">
                        TRADE ORAGNIZATION
                      </label>
                      <input
                        onChange={handleChange("tradeOrganization")}
                        type="text"
                        name="company_trade_org"
                        id="company_trade_org"
                      />
                    </div>
                    <div className="form-row col-sm-6"></div>
                  </div>
                </div> */}
                <div className="submit m-auto p-2">
                  <input
                    className="m-auto"
                    type="submit"
                    value={loading ? "Loading" : "Register"}
                    {...(loading && { disabled: true })}
                  />
                </div>
                {/* <div className="login__content__button">
                  <button type="submit" {...(loading && { disabled: true })}>
                    {loading ? "Loading" : "Register"}
                  </button>
                </div> */}
              </Form>
            </div>
          </div>
        );
      }}
    </TypedCustomerRegisterMutation>
  );
};

{
  /* 
const RegisterForm: React.FC<{ hide: () => void }> = ({ hide }) => {
  const alert = useAlert();
  return (
    <TypedCustomerRegisterMutation
      onCompleted={data => showSuccessNotification(data, hide, alert)}
    >
      {(registerCustomer, { loading, data }) => {
        return (
          <Form
            errors={maybe(() => data.accountRegister.errors, [])}
            onSubmit={(event, { email, password }) => {
              event.preventDefault();
              registerCustomer({ variables: { email, password } });
            }}
          >
            <TextField
              name="email"
              autoComplete="email"
              label="Email Address"
              type="email"
              required
            />
            <TextField
              name="password"
              autoComplete="password"
              label="Password"
              type="password"
              required
            />
            <div className="login__content__button">
              <Button type="submit" {...(loading && { disabled: true })}>
                {loading ? "Loading" : "Register"}
              </Button>
            </div>
          </Form>
        );
      }}
    </TypedCustomerRegisterMutation>
  );
};

export default RegisterForm; */
}
