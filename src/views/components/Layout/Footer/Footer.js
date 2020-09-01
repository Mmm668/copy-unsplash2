import React from 'react';
import styled from "styled-components";

const Footer = (props) => {

    return (
        <Wrapper>
            <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
                 aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title>
                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
            <p>Make something awesome</p>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  p {
    margin-top: 25px; 
    font-size: 15px;
    font-weight: 500;
    color:#999;
  }
`;

export default Footer;