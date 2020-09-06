import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {navigate} from "../../../helpers/HistoryHelper";

const Tags = ({list}) => {

    const [resList, setResList] = useState(list);

    useEffect(()=>{
        setResList(list.filter(item => item.type === 'search'));
    },[])

    if(!list){
        return false;
    }

    return (
        <Wrapper>
            {
                resList.map(item => <Tag className={'text-ellipsis'} onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/search/photos/${item.title}`)
                }}>{item.title}</Tag>)
            }
        </Wrapper>
    )
};


const Tag = styled.div`
  padding: 5px 8px;
  border-radius: 3px;
  background:#eee;
  font-size: 14px;
  font-weight: 400;
  color:#777;
  cursor:pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > ${Tag}{
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;


export default Tags;