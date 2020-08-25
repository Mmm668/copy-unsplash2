import React from 'react';
import styled, {css} from "styled-components";

const Button = (props) => {
    const {
        icon,
        color,
        children,
        onClick,
    } = props;

    function renderIcon(v){
        return v;
    }

    return (
        <Wrapper color={color} onClick={onClick}>
            {icon && renderIcon(icon)}
            <Text>{children}</Text>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  opacity: 0.8;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 11px;
  border-radius: 3px;
  border:1px solid #767676;
  background:#fff;
  transition: 0.2s ease-in-out;
  cursor:pointer;
  &:hover{
    opacity: 1;
  }
  ${props => props.color === 'gray' && css`
    background: hsla(0,0%,100%,.9);
    color:#767676;
  `}
`;

const Text = styled.div`
  margin-left: 4px;
  font-size: 13px;
  font-weight: 400;
  color:#111;
`;

export default Button;