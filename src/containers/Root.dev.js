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
import {func, string, array, object} from 'prop-types';

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
    width: 100%;
    max-width: ${TICKET_MIN_WIDTH}px;
`;

class Root extends React.Component {
    static propTypes = {
        tickets: array.isRequired,
        filterStopsCounts: array.isRequired,
        currency: string.isRequired,
        updateStopsFilter: func.isRequired,
        changeCurrency: func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {
            tickets,
            updateStopsFilter,
            filterStopsCounts,
            currency,
            changeCurrency
        } = this.props;

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
                        {Array.from(tickets)
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
        setTimeout(() => this.props.loadTickets(), 2000);
    }
}

const mapStateToProps = ({tickets = new Set([]), filterStopsCounts = [], currency}) => {
    return {
        tickets,
        filterStopsCounts,
        currency
    };
};

export default connect(
    mapStateToProps,
    {updateStopsFilter, changeCurrency, loadTickets}
)(pure(Root));
