import React, { useState } from "react";
import Select from 'react-select';
import "../style/style.scss";

export const PaymentMethod: React.FC<{}> = () => {

  const [selectedOption, setSelectOption] = useState(null);

  const handleChangeTest = selectedOption => {
    setSelectOption( selectedOption);
  };

  const options = [
    { value: 'VISA X4444 - EXP 07/20', label: 'VISA X4444 - EXP 07/20' },
    { value: '354', label: '5t34' },
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
        onChange={handleChangeTest}>
      </Select>
    </div>
  );
};
