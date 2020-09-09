import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Card from "./Card";
import Masonry from 'masonry-layout';
import {useSelector} from "react-redux";
import ModalDetail from "./ModalDetail";
import * as imagesloaded from "imagesloaded";
import ModalPortal from "../Modal/ModalPortal";
import Loading from "../Loading/Loading";
import Footer from "../Layout/Footer";
import {photosCreators} from "../../redux/actionCreators";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";

let grid;
let msnry;
let imgLoad;
const CardWrapper = (props) => {
    const {
        list,
        style,
        fetchMore,
        loader,
    } = props;

    const {selectedPhoto} = useSelector(state => state.photos);

    useEffect(() => {
        grid = document.querySelector('.masonry-grid');
    }, [])

    useEffect(() => {
        if (list) {
            window.onload = imagesloaded(grid, function () {
                msnry = new Masonry(grid, {
                    itemSelector: '.masonry-item',
                    columnWidth: 375,
                    gutter: 22,
                    fitWidth: true,
                    horizontalOrder: true,
                })
            });
        }
    }, [list])

    if (!list) {
        return <Loading/>
    }

    return (
        <Wrapper className={'masonry-grid'} style={style}>
            <InfiniteScroll
                fetchMore={fetchMore}
                loader={loader}
            >
                {
                    list.map((item, i) =>
                        <Card
                            list={list}
                            item={item}
                            index={i}
                            key={item.id}/>
                    )
                }
            </InfiniteScroll>
            {
                selectedPhoto &&
                <ModalPortal>
                    <ModalDetail item={selectedPhoto} list={list}/>
                </ModalPortal>
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
  width: 1240px;
  margin: -14px auto;
  //display: grid;
  //grid-template-columns: repeat(3, 1fr);
  //grid-template-rows: minmax(auto, auto);
  //grid-gap: 1em;
`;

export default CardWrapper;