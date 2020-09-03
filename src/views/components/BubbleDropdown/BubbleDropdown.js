import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {BsThreeDots} from "react-icons/all";

const BubbleDropdown = (props) => {

    const {
        list = [
            {
                text: '',
                onClick: () => {
                }
            }
        ]
    } = props;

    const dom = useRef(null);
    const [visible, setVisible] = useState(false);

    function handleClickOutside(e){
        const domNode = dom.current;

        // (!domNode || !domNode.contains(e.target)) ? setVisible(false) : setVisible(true)

        if(!domNode || !domNode.contains(e.target)) {
            console.log('@@ clicked outside');
            setVisible(false)
        } else{
            console.log('@@ right area?');
            setVisible(true)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    }, [])

    if (!list) {
        return false;
    }

    return (
        <Wrapper ref={dom}>
            <BsThreeDots style={{alignSelf: 'center'}}/>
            <Menu className={visible && 'is-active'}>
                {
                    list.map((item, index) => <MenuItem
                        onClick={item.onClick}
                        key={index}>
                        {item.text}
                    </MenuItem>)
                }
            </Menu>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  position: relative;
  cursor:pointer;
  display: flex;
`;

const Menu = styled.div`
  position: absolute;
  z-index: 5;
  top: calc(100% + 7px);
  right: -17px;
  width: 285px;
  padding: 10px 0;
  transform: scale(0);
  transform-origin: top right;
  transition: 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  border-radius: 3px;
  background:#101010;
  box-shadow: 0 0 5px rgba(0,0,0, .2);
  &:before{
    content: '';
    position: absolute;
    z-index: -1;
    top: -5px;
    right: 20px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background:#101010;
  }
  &.is-active{
    transform:scale(1);
  } 
`;

const MenuItem = styled.div`
  padding: 10px 15px;
  color:#a0a0a0;
  cursor:pointer;
  &:hover{
    opacity: 0.7;
  }
`;

export default BubbleDropdown;