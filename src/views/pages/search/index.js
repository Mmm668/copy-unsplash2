import React, {useEffect, useImperativeHandle, useState} from 'react';
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import PageTitle from "../../../components/PageTitle";
import {useSelector} from "react-redux";
import {appCreators, photosCreators} from "../../../redux/actionCreators";
import NoData from "../../../components/Errors/NoData";
import CardWrapper from "../../../components/Card/CardWrapper";
import Loading from "../../../components/Loading/Loading";

const Search = (props) => {

    const urlPath = useHistory().location.pathname.split('/');
    const urlKeyword = urlPath[urlPath.length -1];
    const {keyword, searchResult, selectedSearchTab} = useSelector(state => state.photos);
    const [tabData, setTabData] = useState(null);
    useEffect(() => {
        appCreators.updateState({headerType: 'search'})
        // return () => {
        //     appCreators.updateState({headerType: 'none'})
        // }

        photosCreators.updateState({keyword: urlKeyword})
    }, [])
    
    useEffect(()=>{
        photosCreators.searchKeyword(urlKeyword)
    },[keyword])

    useEffect(()=>{
       if(searchResult && selectedSearchTab){
           switch(selectedSearchTab){
               case 'photos':
                   setTabData(searchResult.photos.results)
                   break;
               case 'collections':
                   setTabData(searchResult.collections.results)
                   break;
               case 'users':
                   setTabData(searchResult.users.results)
                   break;
           }
       }
    },[searchResult, selectedSearchTab])

    if(!searchResult && !tabData){
        return <Loading/>
    }

    return (
        <Wrapper>
            <Head>
                <PageTitle title={urlKeyword}/>
            </Head>
            {
                !tabData && <NoData/>
            }
            <CardWrapper list={tabData}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  padding: 60px 15px 72px;
`;
export default Search;