import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Card from "./Card";
import Masonry from 'masonry-layout';
import {useSelector} from "react-redux";
import ModalDetail from "./ModalDetail";
import * as imagesloaded from "imagesloaded";
import ModalPortal from "../Modal/ModalPortal";
import Loading from "../Loading/Loading";
import InfiniteScroll from 'react-infinite-scroller';
import Footer from "../Layout/Footer";

let grid;
let msnry;
let imgLoad;
const CardWrapper = (props) => {
    const {
        list,
        fetchMore = () => {},
        hasMore,
        style,
    } = props;

    const {selectedPhoto} = useSelector(state => state.photos);

    useEffect(() => {
        grid = document.querySelector('.masonry-grid');
        if(list){
            imagesloaded(grid, function () {
                msnry = new Masonry(grid, {
                    itemSelector: '.masonry-item',
                    columnWidth: 375,
                    gutter: 20,
                    fitWidth: true,
                    horizontalOrder: true,
                })
            });
        }
    }, [])

    if(!list){
        return <Loading/>
    }

    let items = [];
    list.map((item, i) => {
        items.push(<Card item={item} key={i}/>);
    });

    return (
        <Wrapper className={'masonry-grid'} style={style}>
            {/*<div className={'masonry-grid-sizer'}/>*/}
            {/*<div className="masonry-gutter-sizer"/>*/}

            <InfiniteScroll
                loadMore={fetchMore}
                hasMore={hasMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                {items}
            </InfiniteScroll>

            {
                selectedPhoto &&
                <ModalPortal>
                    <ModalDetail item={selectedPhoto}/>
                </ModalPortal>
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