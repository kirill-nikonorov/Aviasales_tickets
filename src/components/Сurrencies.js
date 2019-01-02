import React from 'react';
import {Radio} from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import {CURRENCIES} from '../constants/Currencies';
const radioButtons = Object.entries(CURRENCIES).map(([cur, lable]) => (
    <RadioButton key={cur} value={cur}>
        {lable}
    </RadioButton>
));

const Currencies = ({currency, changeCurrency}) => {
    const onChange = ({target: {value}}) => {
        changeCurrency(value);
    };

    return (
        <RadioGroup onChange={onChange} buttonStyle="solid" value={currency}>
            {radioButtons}
        </RadioGroup>
    );
};

export {Currencies};
