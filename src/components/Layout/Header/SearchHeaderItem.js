import React from 'react';
import styled, {css} from "styled-components";

const SearchHeaderItem = ({item, tabType}) => {

    return (
        <Linker onClick={item.onClick} key={item.text} isActive={tabType === item.text}>
            <LinkerIcon>{item.icon}</LinkerIcon>
            <LinkerText>{item.text} <span className="count">{item.count}</span></LinkerText>
        </Linker>
    )
};


const LinkerIcon = styled.div`
  display: inline-flex;
  margin-right: 5px;
  position: relative;
  top: 2px;
`;

const LinkerText = styled.div`
  display: inline-flex;
  line-height: 53px;
  border-bottom: 2px solid transparent;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  color:#494949;
  cursor:pointer;
  .count{
    margin-left: 8px;
  }
`;

const Linker = styled.div`
  padding: 0 15px;
  border-bottom:2px solid transparent;
  &:hover{
    border-color:#000;
    ${LinkerText}, ${LinkerIcon} {
      color:#000;
    }
  }
  ${props => props.isActive && css`
      border-color:#000;
      ${LinkerText}, ${LinkerIcon} {
        color:#000;
      }
  `}
`;

export default SearchHeaderItem;