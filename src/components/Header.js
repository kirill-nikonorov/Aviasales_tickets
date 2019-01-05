import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    text-align: center;
    padding: 40px;
`;

const Header = () => (
    <HeaderContainer>
        <img src="/logo.png" />
    </HeaderContainer>
);

export default Header;
