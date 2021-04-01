import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import {HomeScreen} from "../home/HomeScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter}/>
                    <Route exact path={"/"} component={HomeScreen} />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    )
}
