import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Ticket, OutputCustomizer, Header} from '../components';
import {updateStopsFilter, changeCurrency, loadTickets} from '../actions';
import {pure} from 'recompose';
import DevTools from './DevTools';
import {
    TICKET_MIN_WIDTH,
    CUSTOMIZER_WITH_TICKET_MIN_WIDTH,
    GAP_BETWEEN_CUSTOMIZER_AND_TICKET
} from '../constants/Layuot';
import {func, string, array, object, bool} from 'prop-types';
import {Spin} from 'antd';

const AppContainer = styled.div`
    min-height: 100vh;
    background-color: #f2fcff;
    border: 1px solid #3e9ce8;
    max-width: 1000px;
    margin: 0 auto;
`;
const Content = styled.div`
    justify-content: center;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content min-content;
    grid-auto-rows: min-content;
    align-items: start;

    grid-gap: ${GAP_BETWEEN_CUSTOMIZER_AND_TICKET}px;

    @media (max-width: ${CUSTOMIZER_WITH_TICKET_MIN_WIDTH}px) {
        grid-auto-columns: 1fr;
        justify-items: center;

        grid-auto-flow: row;
    }
`;
const TicketsContainer = styled.div`
    width: ${TICKET_MIN_WIDTH}px;
    @media (max-width: ${TICKET_MIN_WIDTH}px) {
        width: 100%;
    }
`;

const TextCenteringBox = styled.div`
    text-align: center;
`;

class Root extends React.Component {
    static propTypes = {
        tickets: array.isRequired,
        filterStopsCounts: array.isRequired,
        currency: string.isRequired,
        isTicketsFetching: bool.isRequired,
        hasTicketsMore: bool.isRequired,
        updateStopsFilter: func.isRequired,
        changeCurrency: func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {
            tickets,
            isTicketsFetching,
            hasTicketsMore,
            updateStopsFilter,
            filterStopsCounts,
            currency,
            changeCurrency
        } = this.props;

        const ticketsStatus = isTicketsFetching ? (
            <TextCenteringBox>
                <Spin size="large" />
            </TextCenteringBox>
        ) : !hasTicketsMore && tickets.length === 0 ? (
            <TextCenteringBox>No tickets</TextCenteringBox>
        ) : (
            ''
        );

        return (
            <AppContainer>
                <Header />
                <Content>
                    <OutputCustomizer
                        updateFilter={updateStopsFilter}
                        filterStopsCounts={filterStopsCounts}
                        currency={currency}
                        changeCurrency={changeCurrency}
                    />
                    <TicketsContainer>
                        {ticketsStatus}
                        {tickets
                            .filter(({stops}) => filterStopsCounts.includes(stops))
                            .sort(({price: firstP}, {price: secondP}) => firstP - secondP)
                            .map((ticket, id) => {
                                return <Ticket ticket={ticket} currency={currency} key={id} />;
                            })}

                        <DevTools />
                    </TicketsContainer>
                </Content>
            </AppContainer>
        );
    }

    componentWillMount() {
        this.props.loadTickets();
    }
}

const mapStateToProps = ({
    pagination: {ticketsPagination = {}},
    filterStopsCounts = [],
    currency
}) => {
    const {isFetching: isTicketsFetching, hasMore: hasTicketsMore, tickets} = ticketsPagination;

    return {
        tickets,
        isTicketsFetching,
        hasTicketsMore,
        filterStopsCounts,
        currency
    };
};

export default connect(
    mapStateToProps,
    {updateStopsFilter, changeCurrency, loadTickets}
)(pure(Root));
