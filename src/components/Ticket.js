import React from 'react';
import styled from 'styled-components';
import {CURRENCY_RUBBLES_EQUIVALENT} from '../constants/Currencies';

const TicketContainer = styled.div`
    border: 1px solid black;
`;

class Ticket extends React.Component {
    constructor(props) {
        super(props);
    }

    convertPriceAccordingToCurrency = price => {
        const {currency} = this.props;
        const equivalent = CURRENCY_RUBBLES_EQUIVALENT[currency];
        return Math.ceil(price / equivalent);
    };

    render() {
        const {
            ticket: {
                arrival_date,
                arrival_time,
                departure_date,
                departure_time,
                destination,
                destination_name,
                origin,
                origin_name,
                price,
                stops
            }
        } = this.props;
        return (
            <TicketContainer>
                <h6>arrival_date = {arrival_date}</h6>
                <h6>arrival_time = {arrival_time}</h6>
                <h6>departure_date = {departure_date}</h6>
                <h6>departure_time = {departure_time}</h6>
                <h6>destination = {destination}</h6>
                <h6>destination_name = {destination_name}</h6>
                <h6>origin = {origin}</h6>
                <h6>origin_name = {origin_name}</h6>
                <h6>price = {this.convertPriceAccordingToCurrency(price)}</h6>
                <h6>stops = {stops}</h6>
            </TicketContainer>
        );
    }
}

export default Ticket;
