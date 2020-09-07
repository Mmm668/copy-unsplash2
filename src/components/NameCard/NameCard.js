import React from 'react';
import styled from "styled-components";
import Button from "../Button";
import Images from '../../assets/image';
import {TiUserAdd} from "react-icons/all";

const NameCard = ({item}) => {

    return (
        <Wrapper className={'masonry-item'}>
           <Profile>
               <Thumb src={ item.profile_image.large ?? Images.userIcon}/>
               <Desc>
                   <div className="name">{item.name}</div>
                   <div className="id">@{item.id}</div>
               </Desc>
           </Profile>
            <Button fullWidth filled={'#057ffe'} opacity={1}>
                <span style={{marginRight: '3px'}}><TiUserAdd/></span>
                Follow</Button>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 7px;
  border:1px solid #f1f1f1;
  cursor:pointer;
  &:hover{
    border-color:#a7a7a7;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

const Thumb = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border:1px solid #ddd;
  background-image:url(${props => props.src});
  background-size: cover;
  background-position:50% 50%;
  background-repeat: no-repeat;
`;

const Desc = styled.div`
  flex-grow: 1;
  padding-left: 14px;
  .name{
    font-size: 17px;
    font-weight: 700;
    color:#111;
  }
  .id{
     margin-top: 14px;
     font-size: 15px;
     color:#777;
  }
`;

export default NameCard;