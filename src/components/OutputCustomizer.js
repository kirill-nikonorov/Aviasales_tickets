import React from 'react';
import styled from 'styled-components';
import {StopsFilter, Currencies} from '../components';
import {func, string, array} from 'prop-types';
import {pure} from 'recompose';

const OutputCustomizerContainer = styled.div`
    border-radius: 10px;
    background-color: #fff;
    padding: 15px;
    box-shadow: 1px 1px 3px 1px #ccc;
`;

class OutputCustomizer extends React.Component {
    static propTypes = {
        filterStopsCounts: array.isRequired,
        currency: string.isRequired,

        updateFilter: func.isRequired,
        changeCurrency: func.isRequired
    };
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

export default pure(OutputCustomizer);
