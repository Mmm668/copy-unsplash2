import React, {useEffect} from 'react';
import styled from "styled-components";
import Card from "./Card";
import Masonry from 'masonry-layout';
import {useSelector} from "react-redux";
import ModalDetail from "./ModalDetail";
import * as imagesloaded from "imagesloaded";

let msnry;
const CardWrapper = (props) => {
    const {
        list,
        style
    } = props;

    const {selectedPhoto} = useSelector(state => state.photos);

    useEffect(() => {
        imagesloaded('.masonry-grid', function () {
            msnry = new Masonry('.masonry-grid', {
                itemSelector: '.masonry-item',
                columnWidth: 375,
                gutter: 20,
                fitWidth: true,
                horizontalOrder: true,
            })
        })
    }, [])

    return (
        <Wrapper className={'masonry-grid'} style={style}>
            {/*<div className={'masonry-grid-sizer'}/>*/}
            {/*<div className="masonry-gutter-sizer"/>*/}
            {
                list?.map((item, index) => <Card item={item} key={index}/>)
            }
            {
                selectedPhoto && <ModalDetail item={selectedPhoto}/>
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
  width: 1240px;
  margin: -10px auto;
  //display: grid;
  //grid-template-columns: repeat(3, 1fr);
  //grid-template-rows: minmax(auto, auto);
  //grid-gap: 1em;
`;

export default CardWrapper;