import React, {useEffect, useRef, useState} from 'react';
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
import {photosCreators} from "../../redux/actionCreators";

const ModalDetail = ({item}) => {

    const image = useRef(null);
    const [imageStyle, setImageStyle] = useState(null);

    useEffect(()=>{
        const width = image.current.clientWidth;
        const height = image.current.clientHeight;
        if(width / height > 1){ // horizontal
            setImageStyle({maxWidth: 'calc((100vh - 175px)*1.5)'})
        } else  {
            setImageStyle({maxWidth: 'calc((100vh - 175px)*0.7)'})
        }
    },[])

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
                        <Image src={item.urls.regular} ref={image} style={imageStyle}/>
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
  overflow:scroll;
  top: 0;
  bottom: 0;
  //height: 100%;
  left: 0;
  right: 0;
  z-index: 20;
  background:rgba(0,0,0,.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 70px 100px;
`;

const WindowWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  border-radius: 3px 3px 0 0;
  background: #fff;
`;

const ButtonClose = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  margin: 16px;
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
  justify-content: center;
  padding: 25px 60px;
  background:pink;
`;
const Image = styled.img`
  //max-width: calc((100vh - 175px)*0.6);
  // mixin으로 계산해야함 
  // ${props => props.style}
`;

export default ModalDetail;