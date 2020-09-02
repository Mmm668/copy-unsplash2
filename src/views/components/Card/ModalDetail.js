import React from 'react';
import styled, {css} from "styled-components";
import HalfWrap from "../HalfWrap/HalfWrap";
import LeftWrap from "../HalfWrap/LeftWrap";
import RightWrap from "../HalfWrap/RightWrap";
import {
    FiPlus,
    BsHeartFill,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    IoMdShareAlt,
    VscChromeClose
} from "react-icons/all";
import UserBadge from "../UserBadge";
import ButtonWrap from "../Button/ButtonWrap";
import Button from "../Button";
import {photosCreators} from "../../../redux/actionCreators";

const ModalDetail = (props) => {

    const {
        item
    } = props;


    return (
        <Wrapper>
            <WindowWrap>
                <ButtonClose onClick={() => photosCreators.updateState({selectedPhoto: undefined})}>
                    <VscChromeClose/>
                </ButtonClose>
                <ButtonTo side={'left'}>
                    <HiOutlineChevronLeft/>
                </ButtonTo>
                <ButtonTo side={'right'}>
                    <HiOutlineChevronRight/>
                </ButtonTo>

                <ContentWrap>
                    <HalfWrap>
                        <LeftWrap>
                            <UserBadge src={item.user.profile_image.small} name={item.user.name}
                                       sub={`@${item.user.id}`}/>
                        </LeftWrap>
                        <RightWrap>
                            <ButtonWrap gutter={8}>
                                <Button icon={<BsHeartFill/>}/>
                                <Button icon={<FiPlus/>}/>
                                <Button filled={'#3cb46e'}
                                        as={'a'}
                                        href={item.links.download}
                                        download>
                                    Download free
                                </Button>
                            </ButtonWrap>
                        </RightWrap>
                    </HalfWrap>
                    <ImageWrap>
                        <Image src={item.urls.regular}/>
                    </ImageWrap>
                    <HalfWrap>
                        {/*<LeftWrap></LeftWrap>*/}
                        <RightWrap>
                            <ButtonWrap gutter={8}>
                                <Button icon={<IoMdShareAlt/>}>Share</Button>
                            </ButtonWrap>
                        </RightWrap>
                    </HalfWrap>
                </ContentWrap>

            </WindowWrap>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background:rgba(0,0,0,.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WindowWrap = styled.div`
  position: absolute;
  top: 50px;
  bottom: 0;
  width: 90%;
  padding: 20px 20px;
  border-radius: 3px 3px 0 0;
  background: #fff;
`;

const ButtonClose = styled.div`
  position: absolute;
  z-index: 2;
  top: -27px;
  left: -41px;
  font-size: 30px;
  color:#f1f1f1;
  cursor:pointer;
`;

const ButtonTo = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50% + 50px);
  font-size: 30px;
  color:#f1f1f1;
  ${props => props.side === 'left' && css`
     left: -43px;
  `}
  ${props => props.side === 'right' && css`
     right: -43px;
  `}
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
const ImageWrap = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 25px 60px;
  background:pink;
`;
const Image = styled.img`
  //width: 100%;
  height: 100%;
`;

export default ModalDetail;