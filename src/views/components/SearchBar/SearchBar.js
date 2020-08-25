import React from 'react';
import styled, {css} from "styled-components";

const SearchBar = (props) => {

    const {
        rounded = false
    } = props;

    return (
        <Wrapper rounded={rounded}>
           SearchBar
        </Wrapper>
    )
};

const Wrapper = styled.div`
  
  ${props => props.rounded && css`

  `}
`;

export default SearchBar;