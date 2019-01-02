import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Ticket, OutputCustomizer} from '../components';
import {updateStopsFilter, changeCurrency} from '../actions';

import DevTools from './DevTools';

const AppContainer = styled.div`
    display: flex;
    align-items: flex-start;
    min-height: 100vh;
    background-color: #b5b5b5;
    max-width: 900px;
    margin: 0 auto;
`;

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            tickets,
            updateStopsFilter,
            state,
            filterStopsCounts,
            currency,
            changeCurrency
        } = this.props;

        return (
            <AppContainer>
                <button onClick={() => console.log(state)}>State</button>
                <OutputCustomizer
                    updateFilter={updateStopsFilter}
                    filterStopsCounts={filterStopsCounts}
                    currency={currency}
                    changeCurrency={changeCurrency}
                />
                <div>
                    {tickets
                        .filter(({stops}) => filterStopsCounts.includes(stops))
                        .sort(({price: firstP}, {price: secondP}) => firstP - secondP)
                        .map((ticket, id) => {
                            return <Ticket ticket={ticket} currency={currency} key={id} />;
                        })}
                    <DevTools />
                </div>
            </AppContainer>
        );
    }
}

const mapStateToProps = state => {
    const {tickets, filterStopsCounts, currency} = state;

    return {
        tickets,
        filterStopsCounts,
        currency,
        state
    };
};

export default connect(
    mapStateToProps,
    {updateStopsFilter, changeCurrency}
)(Root);
