import React, {useEffect} from 'react';
import styled from "styled-components";
import CardWrapper from "../../components/Card/CardWrapper";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {photosCreators} from "../../../redux/actionCreators";
import Loading from "../../components/Loading/Loading";
import UserBadge from "../../components/UserBadge";
import PageTitle from "../../components/PageTitle";

const Collection = (props) => {

    const history = useHistory();
    const {selectedCollectionId, collection, collectionPhotos} = useSelector(state => state.photos);

    useEffect(() => {
        if (!selectedCollectionId) {
            let id = history.location.pathname.split('/')[2];
            photosCreators.updateState({selectedCollectionId: id})
        }
    }, [])

    useEffect(() => {
        photosCreators.fetchCollection(selectedCollectionId);
        photosCreators.fetchCollectionPhotos(selectedCollectionId);
    }, [selectedCollectionId])

    if(!collection && !collectionPhotos) {
        return <Loading/>
    }

    return (
        <Wrapper>
            <Head src={collection?.cover_photo.urls.regular}>
                <PageTitle title={collection?.title}/>
                <Desc>
                    {collection?.description}
                </Desc>
                <UserBadge src={collection?.user.profile_image.small} name={collection?.user.name}
                           style={{marginBottom: '25px'}}
                />

                <Count>
                    {collection?.total_photos} photos
                </Count>
            </Head>
            <Body>
                <CardWrapper list={collectionPhotos} style={{padding: '60px 0'}}/>
            </Body>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px 30px 67px;
  background-image:url(${props => props.src});
  background-position:50% 0;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-mask-image: linear-gradient(rgba(0,0,0,1) 80%, rgba(0,0,0,0));
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