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

  const btnClass = classNames('shipping-method-title', openMethod, {
    'no-open': !openMethod,
  });

  const options = [
    { value: 'post office',
      label: 'post office',
    },

    { value: 'tax',
      label: 'tax',
    },

    { value: 'other option',
      label: 'other option',
    },

  ];

  return (
    <div className={"shipping-method"}>
      <h4
        onClick={onSelectMethodOpenHandler}
        className={btnClass}>Shipping Method</h4>

      {openMethod ?  <Select
        className={"shipping-method-select"}
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
