import {combineReducers} from 'redux';
import {filterStopsCounts} from './stopsFilter';
import {currency} from './currency';
import {ticketsPagination} from './tickets';

const pagination = combineReducers({
    ticketsPagination
});

const rootReducer = combineReducers({
    pagination,
    filterStopsCounts,
    currency
});

export default rootReducer;
