import React from 'react';
import styled from 'styled-components';
import {Checkbox} from 'antd';

import {
    OPTIONS,
    convertOptionsToValues,
    convertValuesToOptions
} from '../constants/stepsFilterOptions';

const {Group} = Checkbox;

const StyledCheckboxGroup = styled(Group)`
    display: flex !important;
    flex-direction: column;
`;

class StopsFilter extends React.Component {
    constructor(props) {
        super(props);
        const {values} = props;

        this.state = {
            checkAll: values.length === OPTIONS.length
        };
    }

    changeFilter = checkedList => {
        this.props.updateFilter(convertOptionsToValues(checkedList));
    };

    handleChange = checkedList => {
        this.setState({
            checkAll: checkedList.length === OPTIONS.length
        });
        this.changeFilter(checkedList);
    };
    handleClickAll = ({target: {checked}}) => {
        this.setState({
            checkAll: checked
        });
        this.changeFilter(checked ? OPTIONS : []);
    };

    render() {
        const {values} = this.props;
        const {checkAll} = this.state;

        return (
            <div>
                <Checkbox checked={checkAll} onChange={this.handleClickAll}>
                    Все
                </Checkbox>
                <StyledCheckboxGroup
                    options={OPTIONS}
                    value={convertValuesToOptions(values)}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default StopsFilter;
