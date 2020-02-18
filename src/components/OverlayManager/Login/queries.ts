import gql from "graphql-tag";

import { TypedMutation } from "../../../core/mutations";
import {
  RegisterCutomer,
  RegisterCutomerVariables,
} from "./types/RegisterCutomer";

const customerRegisterMutation = gql`
  mutation RegisterCutomer(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    accountRegister(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      errors {
        field
        message
      }
    }
  }
`;

export const TypedCustomerRegisterMutation = TypedMutation<
  RegisterCutomer,
  RegisterCutomerVariables
>(customerRegisterMutation);
