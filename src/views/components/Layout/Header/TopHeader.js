import React from 'react';
import styled from "styled-components";
import SearchBar from "../../SearchBar";
import BubbleDropdown from "../../BubbleDropdown";
import Button from "../../Button";
import {mock} from "../../../../mock/mock";
import {HISTORY} from "../../../../helpers/HistoryHelper";
import ButtonWrap from "../../Button/ButtonWrap";

const TopHeader = (props) => {

    return (
        <Wrapper>
            <LogoWrap onClick={() => HISTORY.push('/')}>
                <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
                     aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                </svg>
                <LogoDesc>
                    <h1>Unsplash</h1>
                    <h2>Photos for everyone</h2>
                </LogoDesc>
            </LogoWrap>

           <SearchBar style={{margin: '0 20px'}}/>

           <Etc>
               <div className={'f-link-wrap'}>
                   <div className="f-link">Topics</div>
                   <div className="f-link">Explore</div>
                   <BubbleDropdown list={mock.headerBubbleDropdown}/>
               </div>
               <Button>Submit a photo</Button>
               <Bar/>
               <ButtonWrap gutter={6}>
                   <div className="f-link">Login</div>
                   <Button filled={'#3cb46e'}>Join free</Button>
               </ButtonWrap>
           </Etc>

        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

const LogoWrap = styled.div`
  display: flex;
  cursor:pointer;
`;

const LogoDesc = styled.div`
  flex-direction: column;
  padding-left: 10px;
  line-height: 1;
  color:#111;
  h1{
    font-size: 17px;
    font-weight: 700;
  }
  h2{
    font-size: 14px;
    font-weight: 500;
  }
`;

const Etc = styled.div`
  display: flex;
  .f-link-wrap{
    display: flex;
    //align-items: center;
    margin: 0 20px 0 0;
  }
  .f-link{
    align-self: center;
    opacity: 0.6;
    padding: 0 10px;
    font-size: 15px;
    font-weight: 600;
    color:#111;
    cursor:pointer;
    transition: 0.2s ease-in-out;
    &:hover{
      opacity: 1;
    }
  }
`;

const Bar = styled.div`
  display: flex;
  width: 1px;
  //height: 100%; 있으면 안나옴
  margin: 2px 10px 2px 20px;
  border-left: 1px solid #ddd;
`;

export default TopHeader;