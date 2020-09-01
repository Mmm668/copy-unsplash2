import React, {useEffect} from 'react';
import styled from "styled-components";
import PageTitle from "../../components/PageTitle";
import {useSelector} from "react-redux";
import {appCreators} from "../../../redux/actionCreators";
import NoData from "../../components/Errors/NoData";

const Search = (props) => {

    const {searchResult, keyword} = useSelector(state => state.photos);

    useEffect(() => {
        appCreators.updateState({headerType: 'search'})
        // return () => {
        //     appCreators.updateState({headerType: 'none'})
        // }
    }, [])

    return (
        <Wrapper>
            <Head>
                <PageTitle title={searchResult?.meta.keyword || '검색어 없음'}/>
            </Head>
            {
                keyword.length === 0 && <NoData/>
            }
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