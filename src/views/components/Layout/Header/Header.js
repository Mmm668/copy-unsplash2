import React from 'react';
import styled from "styled-components";
import CategoryHeader from "./CategoryHeader";
import TopHeader from "./TopHeader";
import {useSelector} from "react-redux";
import SearchHeader from "./SearchHeader";
import {mock} from "../../../../mock/mock";

const SubHeaders = {
    'search' : <SearchHeader/>,
    'category': <CategoryHeader list={mock.headerCategory}/>,
    'none' : false // ?
}

const Header = (props) => {

    const {headerType} = useSelector(state => state.app);

    return (
        <Wrapper>
            <TopHeader/>
            {
                SubHeaders[headerType]
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