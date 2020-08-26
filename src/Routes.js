import React from 'react';
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import Home from "./views/pages/home";

const Routes = (props) => {

    const {
        style
    } = props;

    return (
        <Wrapper style={style}>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/random'} component={Home}/>
                <Route path={'/collections/:id/:title/'} component={Home}/>
                <Route path={'/collections'} component={Home}/>
                <Route path={'/search/:type/:keyword'} component={Home}/>

                <Route path={'/404'} component={Home}/>
            </Switch>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Routes;