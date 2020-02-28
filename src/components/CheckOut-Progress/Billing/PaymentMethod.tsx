import React, { useState } from "react";
import Select from 'react-select';
import "../style.scss";

export const PaymentMethod: React.FC<{}> = () => {

  const [selectedOption, setSelectOption] = useState(null);

  const onMethodSelect = selectedOption => {
    setSelectOption(selectedOption);
  };

  const options = [
    { value: 'post office',
      label: 'post office',
    },

    { value: 'new payment method',
      label: 'new payment method',
    },

  ];

  return (
    <div className={"payment-method"}>
      <h4 className={"payment-method-title"}>Payment Method</h4>
    <Select
        className={"payment-method-select"}
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
        onChange={onMethodSelect}>
      </Select>

      <button className={"checkout-page-button"}>
        Review order
      </button>
    </div>
  )
};
