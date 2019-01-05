import {ticketsRequest, ticketsSuccess, ticketsError} from '../lib/reduxActions/actions/tickets';
import axios from 'axios';

export {ticketsRequest, ticketsSuccess, ticketsError};

export const loadTickets = () => dispatch => {
    dispatch(ticketsRequest());
    setTimeout(() => {
        axios('tickets.json')
            .then(({data: {tickets}}) => {
                dispatch(ticketsSuccess(tickets));
            })
            .catch(e => {
                dispatch(ticketsError(e));
            });
    }, 2000);
};
