import React from 'react';
import styled from "styled-components";
import {TiHeartHalfOutline} from "react-icons/all";

const NoData = (props) => {

    return (
        <Wrapper>
            <TiHeartHalfOutline size={50} color={'#999999'}/>
            <Text>데이터가 없습니다.</Text>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;  
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
`;
const Text = styled.div`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  color:#787878;
`;

export default NoData;