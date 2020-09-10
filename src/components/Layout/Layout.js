import React, {useState} from 'react';
import styled from "styled-components";
import Header from "./Header";
import Routes from "../../Routes";

const Layout = (props) => {

    const {children} = props;

    // store, header on/off
    const [something, setSomething] = useState(true);

    function getHeight(dom) {
        // return instead of 118px
        if (something) {
            return {paddingTop: '115px'};
        }
        return {paddingTop: '0px'};
    }

    return (
        <Wrapper>
            {children}
            {
                something && <Header/>
            }
            <Routes style={getHeight()}/>
            {/*<Footer/>*/}
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Layout;