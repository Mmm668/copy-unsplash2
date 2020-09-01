import React, {useEffect} from 'react';
import styled from "styled-components";
import CardWrapper from "../../components/Card/CardWrapper";
import MainCover from "./components/MainCover";
import {mock} from "../../../mock/mock";
import {appCreators} from "../../../redux/actionCreators";

const list = mock.cardPhotoList;

const Home = (props) => {

    useEffect(() => {
        appCreators.updateState({headerType: 'category'})
        // return () => {
        //     appCreators.updateState({headerType: 'none'})
        // }
    }, [])

    return (
        <Wrapper>
            <MainCover/>
            <CardWrapper list={list} style={{padding: '60px 0'}}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Home;