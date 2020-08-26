import React from 'react';
import styled from "styled-components";
import CategoryHeader from "./CategoryHeader";
import GadgetHeader from "./GadgetHeader";

const Header = (props) => {

    const {
        categoryList
    } = props;

    return (
        <Wrapper>
            <GadgetHeader/>
            {
                categoryList.length > 0 && <CategoryHeader list={categoryList}/>
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 10;
  background: #fff;
  box-shadow: 0 0 5px rgba(0,0,0, .2);
`;


export default Header;