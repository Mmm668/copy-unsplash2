import React, {useEffect} from 'react';
import styled from "styled-components";
import Collection from "./Collection";
import * as imagesloaded from "imagesloaded";
import Masonry from "masonry-layout";


let grid;
let msnry;
const CollectionWrapper = ({list}) => {

    useEffect(()=>{
        grid = document.querySelector('.masonry-grid');
    },[])

    useEffect(()=>{
        imagesloaded(grid, function () {
            msnry = new Masonry(grid, {
                itemSelector: '.masonry-item',
                columnWidth: 325,
                gutter: 20,
                fitWidth: true,
                horizontalOrder: true,
            })
        });
    },[])

    return (
        <Wrapper className={'masonry-grid'}>
            {
                list.map((item, index) => <Collection item={item} keys={index}/>)
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

export default CollectionWrapper;