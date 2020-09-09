import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import CardWrapper from "../../../components/Card/CardWrapper";
import MainCover from "./components/MainCover";
import {appCreators, photosCreators} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";
import Loading from "../../../components/Loading/Loading";
import InfiniteScroll from "../../../components/InfiniteScroll/InfiniteScroll";
import Footer from "../../../components/Layout/Footer";

const Home = (props) => {

    const {photos, fetchLoader} = useSelector(state => state.photos);

    useEffect(() => {
        appCreators.updateState({headerType: 'category'})

        // return () => {
        //     appCreators.updateState({headerType: 'none'})
        // }
    }, [])

    useEffect(()=>{
        photosCreators.fetchPhotos()
    },[])

    return (
        <Wrapper>
            <MainCover/>
                <CardWrapper list={photos} style={{padding: '60px 0'}}
                             fetchMore={() => photosCreators.fetchPhotos()}
                             loader={fetchLoader && <Loading/>}
                />
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Home;