import React from 'react';
import styled from "styled-components";
import {appCreators} from "../../../redux/actionCreators";

const Search = (props) => {

    useEffect(() => {
        appCreators.updateState({headerType: 'search'})
        // return () => {
        //     appCreators.updateState({headerType: 'none'})
        // }
    }, [])

    return (
        <Wrapper>
           Search
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Search;