import React from 'react';
import styled from "styled-components";
import SearchBar from "../../SearchBar";
import BubbleDropdown from "../../BubbleDropdown";
import {headerBubbleDropdown} from "../../../../mock/mock";
import Button, {ButtonText} from "../../Button";
import ConfirmModal from "../../Modal/ConfirmModal";

const MainHeader = (props) => {

    const {
        categoryList
    } = props;

    return (
        <Wrapper>
            <LogoWrap>
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
                   <BubbleDropdown list={headerBubbleDropdown}/>
               </div>
               <HeaderButton onClick={() => <ConfirmModal>adsf</ConfirmModal>}>Submit a photo</HeaderButton>
               <Bar/>
               <HeaderButton filled={'#3cb46e'}>Join free</HeaderButton>
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
  //flex: 1;
  //flex-direction: row;
  .f-link-wrap{
    //flex: 1;
    margin: 0 20px 0 10px;
  }
  .f-link{
    //flex: 1;
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
  height: 100%;
  margin: 0 20px;
  border-left: 1px solid #ddd;
`;

const HeaderButton = styled(Button)`
  ${ButtonText} {
    font-size: 16px;
    font-weight: 500;
    color:#fff;
  }
`;

export default MainHeader;