import React from 'react';
import styled from "styled-components";

const ModalDetail = (props) => {

    const { item } = props;

    // close when item(store - selected) is cleared
    if(!item){
        return false;
    }

    return (
        <Wrapper>

        </Wrapper>
    )
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

export default ModalDetail;