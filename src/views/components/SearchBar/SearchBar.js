import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {BsSearch} from "react-icons/all";

const SearchBar = (props) => {

    const {
        type, // default || 'main'
        placeholder = 'Search free high-resolution photos',
        onSubmit,
        style,
    } = props;


    const [keyword, setKeyword] = useState('');

    return (
        <Wrapper type={type} style={style}>
            <Icon onClick={onSubmit}>
                <BsSearch size={19} color={'#999'}/>
            </Icon>
            <input type="text"
                   placeholder={placeholder}
                   onKeyPress={(e) => {
                       console.log('@@ e', e);
                       // if(key === 'enter') {
                       //     onSubmit(keyword)
                       // }

                   }}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 38px;
  border-radius: 25px;
  background: #eee;
  input {
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
  ${props => props.type === 'main' && css`
     height: 54px;
     border-radius: 3px;
     background:#fff;
     input{
       font-size: 17px;
       &::-webkit-input-placeholder {
          font-size: 16px;
       }
     }
  `}
`;

const Icon = styled.div`
  padding: 3px 15px 0;
`;

export default SearchBar;