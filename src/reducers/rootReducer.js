import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {filterStopsCounts} from './stopsFilter';
import {currency} from './currency';

export const tickets = handleActions({}, {});

const rootReducer = combineReducers({
    tickets,
    filterStopsCounts,
    currency
});

export default rootReducer;
