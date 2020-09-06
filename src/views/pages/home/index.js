import React, {useEffect} from 'react';
import styled from "styled-components";
import CardWrapper from "../../../components/Card/CardWrapper";
import MainCover from "./components/MainCover";
import {mock} from "../../../mock/mock";
import {appCreators, photosCreators} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";
import Loading from "../../../components/Loading/Loading";

const Home = (props) => {

    const {photos} = useSelector(state => state.photos);

    useEffect(() => {
        appCreators.updateState({headerType: 'category'})
        photosCreators.fetchPhotos();
        // return () => {
        //     appCreators.updateState({headerType: 'none'})
        // }
    }, [])

    if(!photos){
        return <Loading/>;
    }

    return (
        <Wrapper>
            <MainCover/>
            <CardWrapper list={photos} style={{padding: '60px 0'}}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Home;