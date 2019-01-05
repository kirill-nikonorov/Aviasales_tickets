import React from 'react';
import {Radio} from 'antd';
import {pure} from 'recompose';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import {CURRENCIES} from '../constants/Currencies';

const radioButtons = Object.entries(CURRENCIES).map(([cur, lable]) => (
    <RadioButton key={cur} value={cur}>
        {lable}
    </RadioButton>
));

const Currencies = pure(({currency, changeCurrency}) => {
    const onChange = ({target: {value}}) => {
        changeCurrency(value);
    };

    return (
        <div>
            <h3>Валюта :</h3>
            <RadioGroup onChange={onChange} buttonStyle="solid" value={currency}>
                {radioButtons}
            </RadioGroup>
        </div>
    );
});

export {Currencies};
