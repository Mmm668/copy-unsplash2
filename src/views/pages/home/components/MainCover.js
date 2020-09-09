import React from 'react';
import styled from "styled-components";
import Images from "../../../../assets/image";
import SearchBar from "../../../../components/SearchBar";

const MainCover = (props) => {

    return (
        <Wrapper src={Images.mainCover}>
            <Screen>
                <Middle>
                    <div className="content-wrap">
                        <h1>Unsplash</h1>
                        <h2>
                            <p>The internet’s source of <span className="underline">freely-usable images.</span></p>
                            <p>Powered by creators everywhere.</p>
                        </h2>
                        <SearchBar type={'main'} style={{margin: '17px 0'}}/>
                        <h3>
                            <span className="bold">Trending : </span> flower, wallpapers, backgrounds, happy, love
                        </h3>
                    </div>
                </Middle>
                <Bottom>
                    <div className={'text-wrap'}>
                        Photo of the Day <span className="gray">by</span> Clay Kaufmann
                    </div>
                    <div className={'text-wrap'}>
                        <span className={'gray'}>Read more about the </span>Unsplash License
                    </div>
                    <div className={'text-wrap'}>
                        <img src={Images.mainCoverLogo1} alt={'main_cover'}/>
                        All you need to create a website.
                    </div>
                </Bottom>
            </Screen>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  position: relative;
  height: 593px;
  background-image:url(${props => props.src});
  background-position:50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 25px 15px;
  background:rgba(0,0,0,.3);
`;

const Middle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  .content-wrap{
    display: flex;
    flex-direction: column;
    width: 864px;
    letter-spacing: 1px;
    color:#fff;    
  }
  h1{
    margin-bottom: 17px;
    font-size: 46px;
    font-weight: 900;
  }
  h2{
    line-height: 1.4;
    font-size: 20px;
    font-weight: 800;
    .underline{
      font-weight: 300;
      text-decoration:underline;
    }
  }
  h3{
    font-size: 16px;
    .bold{
      font-weight: bolder;
    }  
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .text-wrap{
    font-size: 15px;
    color:hsla(0,0%,100%,.8);
    .gray{
      color:hsla(0,0%,67%,0.8);
    }
    &:last-child{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      img{
        height: 25px;
        margin-bottom: 5px;
      }
    }
  }
`;

export default MainCover;