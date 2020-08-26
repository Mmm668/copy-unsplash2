import React from 'react';
import styled from "styled-components";

const CategoryHeader = (props) => {

    const {
        list
    } = props;

    return (
        <Wrapper>
            {/*<Head></Head>*/}
            <Body>
                {
                    // `env.process.baseUrl/${item.id}` ....
                    list.map((item, index)=> <Linker to={item.id} key={index} className={'no-scroll'}>
                        <LinkerText>{item.title}</LinkerText>
                    </Linker>)
                }
            </Body>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  overflow:hidden;
  position: relative;
  &:before{
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    right: 0;
    width: 120px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, #fff 95%, #fff);
  }
`;

const Head = styled.div`
`;

const Body = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
`;

const Linker = styled.div`
  opacity: 0.6;
  display: inline-flex;
  align-items: center;
  padding: 0 15px;
  transition: 0.2s ease-in-out;
`;
const LinkerText = styled.div`
  line-height: 53px;
  border-bottom: 2px solid transparent;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  color:#111;
  cursor:pointer;
  &:hover, .is-active{
    border-color:#000;
  }
`;

export default CategoryHeader;