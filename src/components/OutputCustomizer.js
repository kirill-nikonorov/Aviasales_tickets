import React from 'react';
import styled from 'styled-components';
import {StopsFilter, Currencies} from '../components';

const OutputCustomizerContainer = styled.div`
    border-radius: 10px;
    background-color: #fff;
    padding: 15px;
    box-shadow: 1px 1px 3px 1px #ccc;
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
