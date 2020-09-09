import React, {useEffect, useImperativeHandle, useState} from 'react';
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import PageTitle from "../../../components/PageTitle";
import {useSelector} from "react-redux";
import {appCreators, photosCreators} from "../../../redux/actionCreators";
import NoData from "../../../components/Errors/NoData";
import CardWrapper from "../../../components/Card/CardWrapper";
import Loading from "../../../components/Loading/Loading";
import CollectionWrapper from "../../../components/Collection/CollectionWrapper";
import NameCardWrapper from "../../../components/NameCard/NameCardWrapper";

const Search = (props) => {

    const history = useHistory();
    const {searchResult, selectedSearchTab, fetchLoader} = useSelector(state => state.photos);
    const [urlPath, setUrlPath] = useState('');
    const [urlKeyword, setUrlKeyword] = useState('');

    useEffect(()=>{
        appCreators.updateState({headerType: 'search'})
        // return () => {
        //     appCreators.updateState({headerType: 'none'})
        // }
    },[])

    useEffect(() => {
        setUrlPath(history.location.pathname.split('/'));
    }, [history.location.pathname])

    useEffect(()=>{
        setUrlKeyword(urlPath[urlPath.length -1]);
    },[urlPath])

    useEffect(()=>{
        photosCreators.updateState({keyword: urlKeyword})
        photosCreators.searchKeyword(urlKeyword)
    },[urlKeyword])

    if(!searchResult){
        // saga에서 loading 넣으면 싱크 안 맞을 일 없을 듯
        return <Loading/>
    }

    function renderTap(){
        switch(selectedSearchTab){
            case 'photos':
                return <CardWrapper list={searchResult.photos.results}/>
            case 'collections':
                return <CollectionWrapper list={searchResult.collections.results}/>
                break;
            case 'users':
                return <NameCardWrapper list={searchResult.users.results}/>
                break;
        }
    }

    return (
        <Wrapper>
            <Head>
                <PageTitle title={urlKeyword} style={{textTransform: 'capitalize'}}/>
            </Head>
            {
                !(searchResult.photos.results && searchResult.collections.results && searchResult.users.results) && <NoData/>
            }
            {
                renderTap()
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
`;

const Head = styled.div`
  padding: 60px 15px 72px;
`;
export default Search;