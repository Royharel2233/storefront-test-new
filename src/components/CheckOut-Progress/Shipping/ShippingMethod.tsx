import React, { useState } from "react";
import Select from 'react-select';
import "../style.scss";

const classNames = require('classnames');

export const ShippingMethod: React.FC<{}> = () => {

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
    { value: '43 W 33rd Street NEW YORK, NY 10001, usa - ship to “tony danza”',
      label: '43 W 33rd Street NEW YORK, NY 10001, usa - ship to “tony danza”',
    },
    { value: 'new address',
      label: 'new address',
    },
  ];

  return (
    <div className={"payment-method"}>
      <h4
        onClick={onSelectMethodOpenHandler}
        className={btnClass}>Shipping Method</h4>

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
