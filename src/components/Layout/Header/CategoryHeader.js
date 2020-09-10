import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {photosCreators} from "../../../redux/actionCreators";
import {navigate} from "../../../helpers/HistoryHelper";
import {useHistory} from "react-router-dom";

const CategoryHeader = (props) => {

    const {
        list
    } = props;

    const history = useHistory();
    const [id, setId] = useState(history.location.pathname.split('/')[2]);

    return (
        <Wrapper>
            <LinkerWrap className={'no-scroll'}>
                <Linker to={'/collection'}>
                    <LinkerText>collections</LinkerText>
                </Linker>
                <Bar/>
                {
                    list.map((item, index) => <Linker isActive={item.id === id}
                        onClick={() => {
                            setId(item.id)
                            photosCreators.updateState({selectedCollectionId: item.id})
                            navigate(`/collections/${item.id}/photos`)
                        }}
                        key={index}>
                        <LinkerText>{item.title}</LinkerText>
                    </Linker>)
                }
            </LinkerWrap>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  overflow:hidden;
  position: relative;
  &:before{
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    right: 50px;
    width: 50px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, #fff 95%, #fff);
  }
  &:after{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 50px;
    background:#fff;
  }
`;

const LinkerWrap = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
`;

const LinkerText = styled.div`
  line-height: 53px;
  border-bottom: 3px solid transparent;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  color:#111;
  cursor:pointer;
  &:hover{
    border-color:#000;
  }
`;

const Linker = styled.div`
  opacity: 0.6;
  display: inline-flex;
  align-items: center;
  padding: 0 15px;
  transition: 0.2s ease-in-out;
  ${props => props.isActive && css`
    opacity: 1;
    ${LinkerText} {
      border-color:#000;
    }
  `}
`;
const Bar = styled.div`
  display: inline-flex;
  width: 1px;
  height: 30px;
  border-right: 1px solid #ddd;
  transform: translateY(10px);
`;

export default CategoryHeader;