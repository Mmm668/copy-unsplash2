import React from 'react';
import styled, {css} from "styled-components";

const BigTags = (props) => {

    const {
        list = [{
            text: '',
            onClick: () => {
            }
        }],
        gutter = 8
    } = props;

    return (
        <Wrapper className={'no-scroll'}
                 gutter={gutter}>
            {
                list.map(item => <Tag onClick={item.onClick}>{item.text}</Tag>)
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  > * {
    ${props => props.gutter && css`
        margin-left: ${props.gutter}px;
        &:nth-child(1){
          margin-left: 0;
        }  
    `}
  }
`;

const Tag = styled.div`
  opacity: 0.7;
  border:1px solid #111;
  border-radius: 4px;
  line-height: 40px;
  text-transform:uppercase;
  font-size: 17px;
  font-weight: 500;
  color: #767676;
  transition: opacity 0.2s ease-in-out;
  cursor:pointer;
  &:hover{
    opacity: 1;
  }
`;

export default BigTags;