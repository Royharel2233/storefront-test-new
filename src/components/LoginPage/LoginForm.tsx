import "./style/style.scss";

import * as React from "react";

import { useSignIn } from "@sdk/react";
import { maybe } from "@utils/misc";

import { Form } from "..";

import { LoginProps } from "./interface";

const LoginForm: React.FC<LoginProps> = ({ hide }) => {
  const [signIn, { loading, error }] = useSignIn();
  const [loginState, setLoginState] = React.useState({
    email: "",
    password: "",
  });
  const { email, password } = loginState;
  const handleChange = (input: string | number) => (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    evt.preventDefault();
    setLoginState({
      ...loginState,
      [input]: evt.target.value,
    });
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();
    const authenticated = await signIn({ email, password });
    if (authenticated && hide) {
      hide();
    }
  };

  return (
    <div className="login-form">
      <div className="d-flex justify-content-center">
        <Form
          errors={maybe(() => error.extraInfo.userInputErrors, [])}
          onSubmit={handleOnSubmit}
        >
          <div className="form-row">
            <label htmlFor="email">EMAIL</label>
            <input
              name="email"
              autoComplete="email"
              type="email"
              onChange={handleChange("email")}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">PASSWORD</label>
            <input
              name="password"
              autoComplete="password"
              type="password"
              onChange={handleChange("password")}
              required
            />
          </div>
          <div className="submit m-auto">
            <button type="submit" {...(loading && { disabled: true })}>
              {loading ? "Loading" : "Sign in"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
