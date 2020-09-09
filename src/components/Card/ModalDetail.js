import React, {useEffect, useState} from 'react';
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

function getNextItem(list, item, pivot) {
    let index = list.findIndex(photo => photo.id === item.id)
    let isInnerRange = index > 0 && index < list.length - 1;
    let nextIndex = isInnerRange ? index + 1 * pivot : index;
    let res;
    res = {
        indexPosition: isInnerRange? '' : index - 1 < 0 ? 'start' : 'last',
        ...list[nextIndex]
    }
    return res;
}

const ModalDetail = ({list, item}) => {

    const [modalContent, setModalContent] = useState(item);

    useEffect(() => {
        document.body.classList.add("prevent-double-scroll");

        document.addEventListener('keyup', modalKeyListener);

        function modalKeyListener(e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                photosCreators.updateState({selectedPhoto: undefined})
            }
            // if (e.keyCode === 37) { // left 37
            //     // console.log('@@ 왼쪽');
            //     // photosCreators.selectPhoto(list, item, -1);
            //     setModalContent(getNextItem(list, modalContent, -1))
            //
            // }
            // if(e.keyCode === 39){ // right 39
            //     // console.log('@@ 오른족');
            //     // photosCreators.selectPhoto(list, item, +1);
            //     setModalContent(getNextItem(list, modalContent, 1))
            // }
        }

        return () => {
            document.body.classList.remove("prevent-double-scroll");
            document.removeEventListener('keyup', modalKeyListener);
        }
    }, [])


    return (
        <Wrapper>
            <WindowWrap>
                <ButtonClose onClick={() => photosCreators.updateState({selectedPhoto: undefined})}>
                    <VscChromeClose/>
                </ButtonClose>
                {/*<ButtonTo side={'left'} disabled={item.indexPosition === 'first'}>*/}
                {/*    <HiOutlineChevronLeft/>*/}
                {/*</ButtonTo>*/}
                {/*<ButtonTo side={'right'} disabled={item.indexPosition === 'last'}>*/}
                {/*    <HiOutlineChevronRight/>*/}
                {/*</ButtonTo>*/}

                <ContentWrap>
                    <HalfWrap>
                        <LeftWrap>
                            <UserBadge src={modalContent.user.profile_image.small} name={modalContent.user.name}
                                       sub={`@${modalContent.user.id}`}/>
                        </LeftWrap>
                        <RightWrap>
                            <ButtonWrap gutter={8}>
                                <Button icon={<BsHeartFill/>}/>
                                <Button icon={<FiPlus/>}/>
                                <Button filled={'#3cb46e'}
                                        opacity={1}
                                        as={'a'}
                                        href={modalContent.links.download}
                                        download>
                                    Download free
                                </Button>
                            </ButtonWrap>
                        </RightWrap>
                    </HalfWrap>
                    <ImageWrap>
                        <Image src={modalContent.urls.regular}/>
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
  height: 100%;
  left: 0;
  right: 0;
  z-index: 20;
  background:rgba(0,0,0,.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 7% 0; // 100px
`;

const WindowWrap = styled.div`
  width: 100%;
  padding: 20px 20px;
  border-radius: 3px 3px 0 0;
  background: #fff;
`;

const ButtonClose = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  margin: 16px 3%;
  font-size: 30px;
  color:#f1f1f1;
  cursor:pointer;
`;

const ButtonTo = styled.div`
  position: fixed;
  z-index: 2;
  top: 50%;
  transform: translateY(-50% + 50px);
  font-size: 30px;
  color:#f1f1f1;
  cursor:pointer;
  ${props => props.side === 'left' && css`
     left: calc(2% + 4px);
  `}
  ${props => props.side === 'right' && css`
     right: calc(2% + 4px);
  `}
  ${props => props.disabled && css`
     opacity: 0.4;
     cursor:initial;
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
  align-items: center;
  padding: 20px 0 23px;
`;
const Image = styled.img`
  max-height: calc(100vh - 180px);
  @media only screen and (max-width: 500px) {
  width: 100%;
}
`;

export default ModalDetail;