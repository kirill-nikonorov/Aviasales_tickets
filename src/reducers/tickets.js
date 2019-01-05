import {ticketsRequest, ticketsSuccess, ticketsError} from '../lib/reduxActions/actions/tickets';

import {handleActions} from 'redux-actions';
import {isEqual} from 'lodash';

const extractUniqueItems = (obj1, obj2) => {
    return [
        ...obj1,
        ...obj2.filter(newItem => {
            return !obj1.some(oldItem => isEqual(oldItem, newItem));
        })
    ];
};

export const ticketsPagination = handleActions(
    {
        [ticketsRequest]: state => {
            return {...state, isFetching: true};
        },
        [ticketsSuccess]: ({tickets}, {payload}) => {
            return {
                tickets: extractUniqueItems(tickets, payload),
                isFetching: false,
                hasMore: false
            };
        },
        [ticketsError]: (state, {payload}) => {
            return {
                ...state,
                isFetching: false,
                hasMore: false,
                error: payload
            };
        }
    },
    {
        isFetching: false,
        hasMore: true,
        error: undefined,
        tickets: []
    }
);
