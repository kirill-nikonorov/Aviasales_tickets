import {updateStopsFilter} from '../actions';
import {handleActions} from 'redux-actions';
import {VALUES} from '../constants/StepsFilterOptions';

export const filterStopsCounts = handleActions(
    {
        [updateStopsFilter]: (state, {payload}) => {
            return payload;
        }
    },
    VALUES
);
