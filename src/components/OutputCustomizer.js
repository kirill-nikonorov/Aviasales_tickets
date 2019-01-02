import React from 'react';
import styled from 'styled-components';
import {StopsFilter, Currencies} from './';

const OutputCustomizerContainer = styled.div`
    border: 1px solid black;
    background-color: #e9e9e9;
    padding: 5px;
`;

class Aside extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {updateFilter, filterStopsCounts, currency, changeCurrency} = this.props;
        return (
            <OutputCustomizerContainer>
                <Currencies currency={currency} changeCurrency={changeCurrency} />
                <StopsFilter updateFilter={updateFilter} values={filterStopsCounts} />
            </OutputCustomizerContainer>
        );
    }
}

export default Aside;
