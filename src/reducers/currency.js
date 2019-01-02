import {changeCurrency} from '../actions';
import {handleActions} from 'redux-actions';
import {DEFAULT_CURRENCY} from '../constants/Currencies';

export const currency = handleActions(
    {
        [changeCurrency]: (state, {payload}) => {
            return payload;
        }
    },
    DEFAULT_CURRENCY
);
