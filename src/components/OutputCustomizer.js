import React from 'react';
import styled from 'styled-components';
import {StopsFilter} from './';

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
        const {updateFilter, filterStopsCounts} = this.props;
        return (
            <OutputCustomizerContainer>
                <StopsFilter updateFilter={updateFilter} values={filterStopsCounts} />
            </OutputCustomizerContainer>
        );
    }
}

export default Aside;
