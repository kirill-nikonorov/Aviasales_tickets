import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Ticket} from '../components';

import DevTools from './DevTools';

const AppContainer = styled.div`
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
        const {tickets} = this.props;

        return (
            <AppContainer>
                {tickets.sort(({price: firstP}, {price: secondP}) => firstP - secondP)
                    .map((ticket, id) => {
                        return <Ticket ticket={ticket} key={id}/>;
                    })}
                <DevTools/>
            </AppContainer>
        );
    }
}

const mapStateToProps = state => {
    const {tickets = []} = state;
    console.log('tickets = ', state);

    return {
        tickets
    };
};

export default connect(
    mapStateToProps,
    {}
)(Root);
