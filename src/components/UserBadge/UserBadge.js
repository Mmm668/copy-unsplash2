import React from 'react';
import styled, {css} from "styled-components";
import Images from "../../assets/image";

const UserBadge = (props) => {
    const {
        mode,
        src = Images.userIcon,
        name,
        sub,
        style,
        font,
    } = props;

    return (
        <Wrapper style={style}>
           <Thumb src={src}/>
            <Desc>
                <Name mode={mode} style={font}>{name}</Name>
                <Sub mode={mode}>{sub}</Sub>
            </Desc>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Thumb = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 9px;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  font-size: 15px;
  color:#e6e6e6;
  ${props => props.mode === 'light' && css`
    color:#797979;
  `}
`;

const Sub = styled.div`
  line-height: 1;
  font-size: 11px;
  color:#e6e6e6;
  ${props => props.mode === 'light' && css`
    color:#797979;
  `}
`;

export default UserBadge;