import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {BsSearch} from "react-icons/all";
import {navigate} from "../../helpers/HistoryHelper";
import {photosCreators} from "../../redux/actionCreators";
import {useSelector} from "react-redux";

const SearchBar = (props) => {

    const {
        type, // default || 'main' : 헤더  디폴트
        placeholder = 'Search free high-resolution photos',
        style,
    } = props;
    const {keyword} = useSelector(state => state.photos);
    const [value, setValue] = useState(keyword);

    function onSubmit() {
        photosCreators.updateState({keyword: value})
        photosCreators.searchKeyword(value)
        navigate(`/search/photos/${value}`)
    }

    return (
        <Wrapper type={type} style={style}>
            <Icon onClick={onSubmit}>
                <BsSearch size={19} color={'#999'}/>
            </Icon>
            <input type="text"
                   placeholder={placeholder}
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   onKeyPress={(e) => {
                       if(e.key === 'Enter') {
                           onSubmit()
                       }
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
  cursor:pointer;
`;

export default SearchBar;