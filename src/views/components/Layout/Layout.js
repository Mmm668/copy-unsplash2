import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {headerCategory} from "../../../mock/mock";
import Header from "./Header";
import Routes from "../../../Routes";

const Layout = (props) => {

    // store, header on/off
    const [something, setSomething] = useState(true);

    function getHeight(dom) {
        // return instead of 118px
        if(something){
            return {paddingTop: '116px'};
        }
        return {paddingTop: '0px'};
    }

    return (
        <Wrapper>
            {
                something && <Header categoryList={headerCategory}/>
            }
            <Routes style={getHeight()}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Layout;