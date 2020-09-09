import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const InfiniteScroll = ({children, fetchMore=()=>{}, hasMore, loader, footer}) => {

    function infiniteScrollListener() {
        let docHeight = document.body.clientHeight;
        let scrollBottom = document.documentElement.scrollTop + window.innerHeight; // scrollTop is lack of full content height.
        let percentScroll = Math.floor(scrollBottom / docHeight * 100);

        if (window.oldScroll < window.scrollY) {
            if(percentScroll === 85){ // 85이상 시 1번만 발생하도록 => 일단 85때만 실행
                console.log('@@ scroll 85%----------');
                fetchMore();
            }
        }
        window.oldScroll = window.scrollY;
    }

    useEffect(()=>{
        document.addEventListener('scroll', infiniteScrollListener);

        return () => {
            document.removeEventListener('scroll', infiniteScrollListener);
        }
    },[])

    return (
        <Wrapper>
            {loader}
            {children}
            {footer}
        </Wrapper>

    )
};

const Wrapper = styled.div`
`;

export default InfiniteScroll;