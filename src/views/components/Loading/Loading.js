import React from 'react';
import styled from "styled-components";

const Loading = (props) => {

    return (
        <Wrapper>
           Loading...
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export default Loading;