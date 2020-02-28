import { CSSProperties } from "react";

export interface CheckOutProps {
  exportObj: {
    formState: number;
    setFormState: React.Dispatch<React.SetStateAction<number>>;
    pageState: number;
    setPageState: React.Dispatch<React.SetStateAction<number>>;
    userState: {
      firstName: string;
      lastName: string;
      address: string;
      city: string;
      zip: number;
      state: string;
      country: string;
      email: string;
      phone: string;
    };

    setUserState: React.Dispatch<
      React.SetStateAction<{
        firstName: string;
        lastName: string;
        address: string;
        city: string;
        zip: number;
        state: string;
        country: string;
        email: string;
        phone: string;
      }>
    >;
  };
  display?: CSSProperties;
}
