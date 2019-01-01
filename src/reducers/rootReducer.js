import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {filterStopsCounts} from './stopsFilter';

export const tickets = handleActions({}, {});

const rootReducer = combineReducers({
    tickets,
    filterStopsCounts
});

export default rootReducer;
