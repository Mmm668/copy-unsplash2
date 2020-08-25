import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./views/pages/home";

function App(props) {

    return (
        <div className="App">

                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/random'} component={Home}/>
                    <Route path={'/collections/:id/:title/'} component={Home}/>
                    <Route path={'/collections'} component={Home}/>
                    <Route path={'/search/:type/:keyword'} component={Home}/>

                    <Route path={'/404'} component={Home}/>
                </Switch>

                {/*{*/}
                {/*    toastMessage &&*/}
                {/*    <Toast message={toastMessage}/>*/}
            {/*}*/}
        </div>
    );
}

export default App;