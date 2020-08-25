import React from 'react';
import styled from "styled-components";
import Button from "../Button";
import {AiOutlinePlus, BsHeartFill} from "react-icons/all";
import ButtonWrap from "../Button/ButtonWrap";
import UserBadge from "../UserBadge";
import HalfWrap from "../HalfWrap/HalfWrap";
import LeftWrap from "../HalfWrap/LeftWrap";
import RightWrap from "../HalfWrap/RightWrap";

const Card = (props) => {
    const {item} = props;

    return (
        <Wrapper className={'masonry-item'}>
            <Screen>
                <ButtonWrap gutter={6} align={'flex-end'}>
                    <Button color={'gray'} icon={<BsHeartFill/>}/>
                    <Button color={'gray'} icon={<AiOutlinePlus/>}/>
                </ButtonWrap>

              <HalfWrap>
                  <LeftWrap>
                      <UserBadge/>
                  </LeftWrap>
                  <RightWrap>
                      <ButtonWrap gutter={6} align={'flex-end'}>
                          <Button color={'gray'} icon={<BsHeartFill/>}/>
                      </ButtonWrap>
                  </RightWrap>
              </HalfWrap>
            </Screen>
            <Image src={item.urls.small}/>

        </Wrapper>
    )
};

const Wrapper = styled.div`
  position: relative;
  margin: 10px 0;
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 20px 20px;
  background: rgba(0,0,0, .15);
  background: radial-gradient(transparent 60%, rgba(0,0,0, .3));
  transition:0.2s ease-in-out;
  cursor:pointer;
  &:hover{
    opacity: 1;
  }
`;

const Image = styled.img`
`;

export default Card;