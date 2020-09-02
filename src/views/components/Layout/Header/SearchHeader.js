import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {FiLayers, HiPhotograph, IoMdPeople} from "react-icons/all";
import {navigate} from "../../../../helpers/HistoryHelper";
import {kComma} from "../../../../helpers/CommonHelper";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import SearchHeaderItem from "./SearchHeaderItem";

function printCount(v, history) {
    return
}

const SearchHeader = (props) => {

    const history = useHistory();
    const {searchResult} = useSelector(state => state.photos);
    const [counts, setCounts] = useState([]);
    const [urlPath, setUrlPath] = useState(history.location.pathname);

    useEffect(() => {
        setCounts([
            {
                icon: <HiPhotograph/>,
                text: 'photos',
                count: kComma(searchResult?.photos.total),
                onClick: () => {
                    navigate(`/search/photos/${searchResult?.meta.keyword}`);
                    setUrlPath(history.location.pathname);
                },
            },
            {
                icon: <FiLayers/>,
                text: 'collections',
                count: kComma(searchResult?.collections.total),
                onClick: () => {
                    navigate(`/search/collections/${searchResult?.meta.keyword}`);
                    setUrlPath(history.location.pathname);
                },
            },
            {
                icon: <IoMdPeople/>,
                text: 'users',
                count: kComma(searchResult?.users.total),
                onClick: () => {
                    navigate(`/search/users/${searchResult?.meta.keyword}`);
                    setUrlPath(history.location.pathname);
                },
            },
        ])
    }, [searchResult])

    return (
        <Wrapper>
            <Body className={'no-scroll'}>
                {
                    counts.map(item => <SearchHeaderItem item={item} isActive={urlPath.indexOf(item.text) > 0}/>)
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