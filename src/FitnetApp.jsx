import React from 'react'
import { AppRouter } from './components/routers/AppRouter'
import {Provider} from 'react-redux';
import {store} from "./store/store";
import {CssBaseline} from "@material-ui/core";

export const FitnetApp = () => {
    return (
        <Provider store={store}>
            <CssBaseline />
            <AppRouter />
        </Provider>

    )
}