import React from 'react';
import styled from 'styled-components';
import {CURRENCY_RUBBLES_EQUIVALENT, CURRENCIES_SYMBOLS} from '../constants/Currencies';
import {TICKET_MIN_WIDTH} from '../constants/Layuot';
import {string, object} from 'prop-types';
import {pure} from 'recompose';

const TicketContainer = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        'interactiveBlock flightInfo'
        'interactiveBlock flightInfo';

    border-radius: 10px;
    @media (max-width: ${TICKET_MIN_WIDTH}px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr min-content;

        grid-template-areas:
            'flightInfo'
            'interactiveBlock';
    }
    background-color: white;
    margin-bottom: 10px;
    box-shadow: 1px 1px 3px 1px #ccc;
`;

const InteractiveBlock = styled.div`
    grid-area: interactiveBlock;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-right: 1px solid #ccc;

    @media (max-width: ${TICKET_MIN_WIDTH}px) {
        border-right: 0;
        border-top: 1px solid #ccc;
    }
`;
const OrangeButton = styled.button`
    height: 60px;
    width: 160px;
    background-color: #ff6d00;
    color: white;
    text-align: center;
    line-height: 50px;

    border-radius: 10px;
    margin: 10px;
    box-shadow: 1px 1px 3px 1px #ccc;
`;

const TwoLineTextBox = styled.div`
    display: inline-block;
    line-height: 20px;
    vertical-align: middle;
`;
const LowImage = styled.img`
    height: 35px;
`;
const CompanyLogo = styled.img`
    height: 40px;
    margin: 10px;
`;
const AirportInfoContainer = styled.div`
    flex: auto;
    padding: 0 10px;
    text-align: ${({alignRight}) => (alignRight ? 'right' : 'left')};
`;
const FlightInfoContainer = styled.div`
    grid-area: flightInfo;
    padding: 5px 22px;
    display: flex;
    align-items: flex-start;
    @media (max-width: ${TICKET_MIN_WIDTH}px) {
        padding: 0 0 5px 0;
    }
`;
const ArrivingTimeLabel = styled.span`
    font-size: 30px;
`;
const TwelveFontSizeSpan = styled.span`
    font-size: 11px;
`;
const DateLabel = styled.span`
    font-size: 11px;
    color: grey;
`;

const StopsContainer = styled.div`
    text-align: center;
`;

const AirportInfo = ({time, airport, cityName, date, alignRight}) => {
    return (
        <AirportInfoContainer alignRight={alignRight}>
            <ArrivingTimeLabel>{time}</ArrivingTimeLabel>
            <br />
            <TwelveFontSizeSpan>
                {airport}, {cityName}
            </TwelveFontSizeSpan>
            <br />
            <DateLabel>{date}</DateLabel>
        </AirportInfoContainer>
    );
};

class Ticket extends React.Component {
    static propTypes = {
        currency: string.isRequired,
        ticket: object.isRequired
    };

    constructor(props) {
        super(props);
    }

    convertPriceAccordingToCurrencyCost = price => {
        const {currency} = this.props;
        const equivalent = CURRENCY_RUBBLES_EQUIVALENT[currency];
        return Math.ceil(price / equivalent);
    };

    render() {
        const {
            currency,
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

        const stopsText = `пересадок: ${stops}`;
        return (
            <TicketContainer>
                <InteractiveBlock>
                    <CompanyLogo src="/turkich_logo.png" />
                    <OrangeButton>
                        <TwoLineTextBox>
                            Купить за <br /> {this.convertPriceAccordingToCurrencyCost(price)}{' '}
                            {CURRENCIES_SYMBOLS[currency]}
                        </TwoLineTextBox>
                    </OrangeButton>
                </InteractiveBlock>
                <FlightInfoContainer>
                    <AirportInfo
                        time={departure_time}
                        airport={origin}
                        cityName={origin_name}
                        date={departure_date}
                    />
                    <StopsContainer>
                        <h5>{stopsText}</h5>
                        <LowImage src="/stops_img.png" />
                    </StopsContainer>
                    <AirportInfo
                        time={arrival_time}
                        airport={destination}
                        cityName={destination_name}
                        date={arrival_date}
                        alignRight
                    />
                </FlightInfoContainer>
            </TicketContainer>
        );
    }
}

export default pure(Ticket);
