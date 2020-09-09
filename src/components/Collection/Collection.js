import React from 'react';
import styled from "styled-components";
import Tags from "./components/Tags";
import Thumbnail from "./components/Thumbnail";

const Collection = (props) => {

    const {
        item
    } = props;

    return (
        <Wrapper className={'masonry-item'} onClick={() => {}}>
           <Thumbnail list={item.preview_photos}/>
            <Desc>
                <Title>{item.title}</Title>
                <Sub className={'text-ellipsis'}>
                    {item.total_photos} photos • {item.user.name}
                </Sub>
                <Tags list={item.tags}/>
            </Desc>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  height: 375px;
  margin-bottom: 50px;
  overflow:hidden;
`;

const Desc = styled.div`
`;

const Title = styled.div`
    margin-top: 15px;
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
`;

const Sub = styled.div`
  flex-wrap: wrap;
    margin: 10px 0;
    font-size: 16px;
    color: #777;
`;

export default Collection;