import React from 'react';
import styled from "styled-components";

const ConfirmModal = (props) => {

    // createPortal
    const {
        children,
    } = props;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default ConfirmModal;