import React, { useState } from "react";
import Select from 'react-select';
import "../style/style.scss";

const classNames = require('classnames');

export const PaymentMethod: React.FC<{}> = () => {

  const [selectedOption, setSelectOption] = useState(null);
  const [openMethod, setOpenMethod] = useState<boolean>(false);

  const onSelectMethodOpenHandler = () => {
    return setOpenMethod(!openMethod);
  };

  const onMethodSelect = selectedOption => {
    setSelectOption( selectedOption);
  };

  const btnClass = classNames('payment-method-title', openMethod, {
    'no-open': !openMethod,
  });

  const options = [
    { value: 'VISA X4444 - EXP 07/20', label: 'VISA X4444 - EXP 07/20' },
    { value: '354', label: '5t34' },
  ];

  return (
    <div className={"payment-method"}>
      <h4
        onClick={onSelectMethodOpenHandler}
        className={btnClass}>Payment Method</h4>

      {openMethod ?  <Select
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
      </Select> : null }
    </div>
  );
};
