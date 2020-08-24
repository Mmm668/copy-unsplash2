import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "./views/pages/home";

function App(props) {

    const {} = props;

    return (
        <div className="App">

            <Switch>
                <Route exact path={'/'} component={Home}/>
            </Switch>

            {/*{*/}
            {/*    toastMessage &&*/}
            {/*    <Toast message={toastMessage}/>*/}
            {/*}*/}
        </div>
    );
}

export default App;