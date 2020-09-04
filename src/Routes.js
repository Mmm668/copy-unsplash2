import React from 'react';
import styled from "styled-components";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./views/pages/home";
import RandomPhotos from "./views/pages/randomPhotos";
import Collection from "./views/pages/collection";
import Search from "./views/pages/search";
import Page404 from "./views/pages/Erros/Page404";

const Routes = (props) => {

    const {
        style
    } = props;

    return (
        <Wrapper style={style}>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/random'} component={RandomPhotos}/>
                <Route path={'/collections/:id/photos'} component={Collection}/>
                <Route path={'/search/:type/:keyword'} component={Search}/>

                <Route path={'/404'} component={Page404}/>
                {/*<Redirect to={'/404'}></Redirect>*/}
            </Switch>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Routes;