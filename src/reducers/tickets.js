import {fetchTickets} from '../actions';
import {handleActions} from 'redux-actions';
import {isEqual} from 'lodash';

const extractUnique = (obj1, obj2) => {
    return [
        ...obj1,
        ...obj2.filter(newItem => {
            return !obj1.some(oldItem => isEqual(oldItem, newItem));
        })
    ];
};

export const tickets = handleActions(
    {
        [fetchTickets]: (state, {payload}) => {
            return extractUnique(state, payload);
        }
    },
    []
);
