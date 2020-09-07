import React, {useEffect} from 'react';
import styled from "styled-components";
import NameCard from "./NameCard";
import * as imagesloaded from "imagesloaded";
import Masonry from "masonry-layout";

let grid;
let msnry;
const NameCardWrapper = ({list}) => {

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
                list.map(item => <NameCard item={item} key={item.key}/>)
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

export default NameCardWrapper;