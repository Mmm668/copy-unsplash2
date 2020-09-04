import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import CardWrapper from "../../../components/Card/CardWrapper";
import CardWrapper2 from "../../../components/Card/CardWrapper2";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {photosCreators} from "../../../redux/actionCreators";
import Loading from "../../../components/Loading/Loading";
import UserBadge from "../../../components/UserBadge";
import PageTitle from "../../../components/PageTitle";
import {navigate} from "../../../helpers/HistoryHelper";

const Collection = (props) => {

    const history = useHistory();
    const searchParams = new URLSearchParams(history.location.search)
    const {selectedCollectionId, collection, collectionPhotos} = useSelector(state => state.photos);

    useEffect(() => {
        if (selectedCollectionId) {
            photosCreators.fetchCollection(selectedCollectionId);
            photosCreators.fetchCollectionPhotos(selectedCollectionId, searchParams.get('page'));
        }

        // set init collectionId from url (prevent non-fetch, in case of type direct url, not click menu)
        let id = history.location.pathname.split('/')[2];
        photosCreators.updateState({selectedCollectionId: id})
    }, [selectedCollectionId])

    if (!collection && !collectionPhotos) {
        return <Loading/>
    }

    return (
        <Wrapper>
            <Head>
                <HeadBackground src={collection?.cover_photo.urls.regular}/>
                <PageTitle title={collection?.title}/>
                <Desc>
                    {collection?.description}
                </Desc>
                <UserBadge src={collection?.user.profile_image.small} name={collection?.user.name}
                           style={{marginBottom: '70px'}}
                           font={{fontSize: '18px', fontWeight: 500}}/>
                <Count>
                    {collection?.total_photos} photos
                </Count>
            </Head>
            <Body>
                <CardWrapper2 list={collectionPhotos}
                             fetchMore={() => {
                                 console.log('@@ fetcmore');
                                 navigate(`/collections/${selectedCollectionId}/photos?per_page=${searchParams.get('per_page')}&page=${parseInt(searchParams.get('page')) + 1}`)
                             }}
                             hasMore={collectionPhotos?.length < collection?.total_photos - 10}
                             style={{padding: '60px 0'}}
                />
            </Body>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 59px 30px 18px;
`;
const HeadBackground = styled.div`
  opacity: 0.7;
   filter: grayscale(50%);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-image:url(${props => props.src});
  background-position:50% 0;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-mask-image: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0));
  -webkit-mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
`;
const Body = styled.div`
  display: flex;
`;
const Desc = styled.div`
  margin-bottom: 10px;
  line-height: 1.5;
  font-size: 20px;
  font-weight: 500;
  color:#111;
`;

const Count = styled.div`
  font-size: 20px;
  font-weight: 500;
  color:#111;
`;
export default Collection;