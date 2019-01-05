import {createActions} from 'redux-actions';

export const {ticketsRequest, ticketsSuccess, ticketsError} = createActions(
    'TICKETS_REQUEST',
    'TICKETS_SUCCESS',
    'TICKETS_ERROR'
);
