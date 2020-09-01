import React from 'react';
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import Home from "./views/pages/home";
import RandomPhotos from "./views/pages/randomPhotos";
import Collections from "./views/pages/collections";
import Search from "./views/pages/search";

const Routes = (props) => {

    const {
        style
    } = props;

    return (
        <Wrapper style={style}>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/random'} component={RandomPhotos}/>
                <Route path={'/collections'} component={Collections}/>
                <Route path={'/search/:type/:keyword'} component={Search}/>
                {/*<Route path={'/collections/:id/:title/'} component={Home}/>*/}

                {/*<Route path={'/404'} component={Home}/>*/}
            </Switch>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Routes;