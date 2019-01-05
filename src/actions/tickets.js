import {fetchTickets} from '../lib/reduxActions/actions/tickets';
import axios from 'axios';

export {fetchTickets};

export const loadTickets = () => dispatch => {
    axios('tickets.json')
        .then(({data: {tickets}}) => {
            dispatch(fetchTickets(tickets));
        })
        .catch(e => {
            console.log(e);
        });
};
