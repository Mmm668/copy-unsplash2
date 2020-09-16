import React from 'react';
import styled, {css} from "styled-components";
import Images from "../../../assets/image";

const Thumbnail = ({style, list}) => {

    return (
        <Wrapper style={style}>
            {/*urls.small*/}
            <MainWrap>
                <Item src={list[0]?.urls.small || Images.defaultImage}/>
            </MainWrap>
            <SubWrap>
                <Item src={list[1]?.urls.small || Images.defaultImage}/>
                <Item src={list[2]?.urls.small || Images.defaultImage}/>
            </SubWrap>
            <div style={{display: 'flex', flexDirection: 'column'}}>

            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 325px;
  height: 230px;
  border-radius: 8px;
  overflow:hidden;
`;

const Item = styled.div`
  display: inline-flex;
  ${props => props.src && css`
     background-image:url(${props.src} );
  `};
  background-size: cover;
  background-repeat: no-repeat;
`;

const MainWrap = styled.div`
  display: flex;
  width: 69.5%;
  ${Item} {
    width: 110%;
    background-position:50% 40%;
    background-color: pink;
  }
`;

const SubWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 30.5%;
  ${Item} {
    width: 100%;
    height: 50%;
    background-position:50% 50%;
    border-left:2px solid #fff;
    &:nth-child(2){
       border-top:2px solid #fff;
  
    }

  }
`;

export default Thumbnail;