import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {photosCreators} from "../../../redux/actionCreators";
import {navigate} from "../../../helpers/HistoryHelper";

const CategoryHeader = (props) => {

    const {
        list
    } = props;

    return (
        <Wrapper>
            <LinkerWrap className={'no-scroll'}>
                <Linker to={'/random'}>
                    <LinkerText>Random</LinkerText>
                </Linker>
                <Linker to={'/collection'}>
                    <LinkerText>collections</LinkerText>
                </Linker>
                <Bar/>
                {
                    list.map((item, index) => <Linker
                        onClick={() => {
                            photosCreators.updateState({selectedCollectionId: item.id})
                            navigate(`/collection/${item.id}/`)
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
    right: 60px;
    width: 60px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, #fff 95%, #fff);
  }
  &:after{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 60px;
    background:#fff;
  }
`;

const LinkerWrap = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
`;

const Linker = styled.div`
  opacity: 0.6;
  display: inline-flex;
  align-items: center;
  padding: 0 15px;
  transition: 0.2s ease-in-out;
`;
const LinkerText = styled.div`
  line-height: 53px;
  border-bottom: 2px solid transparent;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  color:#111;
  cursor:pointer;
  &:hover, .is-active{
    border-color:#000;
  }
`;

const Bar = styled.div`
  display: inline-flex;
  width: 1px;
  height: 30px;
  border-right: 1px solid #ddd;
  transform: translateY(10px);
`;

export default CategoryHeader;