import {combineReducers} from 'redux';
import {filterStopsCounts} from './stopsFilter';
import {currency} from './currency';
import {tickets} from './tickets';

const rootReducer = combineReducers({
    tickets,
    filterStopsCounts,
    currency
});

export default rootReducer;
