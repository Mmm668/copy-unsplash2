import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {FiLayers, HiPhotograph, IoMdPeople} from "react-icons/all";
import {kComma} from "../../../helpers/CommonHelper";
import {useSelector} from "react-redux";
import SearchHeaderItem from "./SearchHeaderItem";
import {photosCreators} from "../../../redux/actionCreators";

const SearchHeader = (props) => {

    const {searchResult,selectedSearchTab} = useSelector(state => state.photos);
    const [counts, setCounts] = useState([]);

    useEffect(() => {
        setCounts([
            {
                icon: <HiPhotograph/>,
                text: 'photos',
                count: kComma(searchResult?.photos.total),
                onClick: () => {
                    photosCreators.updateState({selectedSearchTab: 'photos'})
                },
            },
            {
                icon: <FiLayers/>,
                text: 'collections',
                count: kComma(searchResult?.collections.total),
                onClick: () => {
                    photosCreators.updateState({selectedSearchTab: 'collections'})
                },
            },
            {
                icon: <IoMdPeople/>,
                text: 'users',
                count: kComma(searchResult?.users.total),
                onClick: () => {
                    photosCreators.updateState({selectedSearchTab: 'users'})
                },
            },
        ])
    }, [searchResult])

    return (
        <Wrapper>
            <Body className={'no-scroll'}>
                {
                    counts.map(item => <SearchHeaderItem item={item} tabType={selectedSearchTab}/>)
                }
            </Body>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  overflow:hidden;
  position: relative;
  border-bottom:1px solid #ddd;
`;

const Body = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

export default SearchHeader;