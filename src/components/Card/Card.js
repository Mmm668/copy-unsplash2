import React from 'react';
import styled from "styled-components";
import Button from "../Button";
import {AiOutlineArrowDown, FiPlus, BsHeartFill} from "react-icons/all";
import ButtonWrap from "../Button/ButtonWrap";
import UserBadge from "../UserBadge";
import HalfWrap from "../HalfWrap/HalfWrap";
import LeftWrap from "../HalfWrap/LeftWrap";
import RightWrap from "../HalfWrap/RightWrap";
import {photosCreators} from "../../redux/actionCreators";

const Card = ({list, item, index}) => {

    return (
        <Wrapper className={'masonry-item'} onClick={() => photosCreators.updateState({selectedPhoto: item})}>
            <Image src={item.urls.small}/>

            <Screen>
                <ButtonWrap gutter={6} align={'flex-end'}>
                    <Button color={'gray'}
                            icon={<BsHeartFill/>}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                    />
                    <Button color={'gray'}
                            icon={<FiPlus/>}
                            onClick={(e) => {
                                e.stopPropagation();
                                console.log('@@ clickInnerButton')
                            }}
                    />
                </ButtonWrap>

                <HalfWrap>
                    <LeftWrap>
                        <UserBadge src={item.user.profile_image.small} name={item.user.name} light/>
                    </LeftWrap>
                    <RightWrap>
                        <ButtonWrap gutter={6} align={'flex-end'}>
                            <Button color={'gray'}
                                    icon={<AiOutlineArrowDown/>}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        console.log('@@ clickInnerButton')
                                    }}
                            />
                        </ButtonWrap>
                    </RightWrap>
                </HalfWrap>
            </Screen>
        </Wrapper>
    )
};

const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 20px 20px;
  background: rgba(0,0,0, .15);
  //background: radial-gradient(transparent 60%, rgba(0,0,0, .3));
  transition:0.2s ease-in-out;
  cursor:pointer;
`;

const Wrapper = styled.div`
  position: relative;
  width: 375px;
  margin: 12px 0;
  cursor:pointer;
  &:hover{
    ${Screen} {
      opacity: 1;
    }
  }
`;
const Image = styled.img`
  width: 100%;
`;

export default Card;