import React, {useEffect} from 'react';
import styled from "styled-components";
import Card from "./Card";
import Masonry from 'masonry-layout'
import {useSelector} from "react-redux";
import ModalDetail from "./ModalDetail";

const CardWrapper = (props) => {
    const {
        list,
        style
    } = props;

    const {selected} = useSelector(state => state.photos);

    useEffect(() => {
        new Masonry( '.masonry-grid', {
            itemSelector: '.masonry-item',
            horizontalOrder : true,
            gutter: 20
        })
    }, [])

    return (
        <Wrapper className={'masonry-grid'} style={style}>
            <ModalDetail item={selected}/>
            {
                list.map((item, index) => <Card item={item} key={index}/>)
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
  max-width: 1240px;
  margin: -10px auto;
  //display: grid;
  //grid-template-columns: repeat(3, 1fr);
  //grid-template-rows: minmax(auto, auto);
  //grid-gap: 1em;
`;

export default CardWrapper;