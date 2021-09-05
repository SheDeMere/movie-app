import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger/src";
import {getMovies, getMoviesInfo} from "./reducers";
import thunk from "redux-thunk";

const logger = createLogger({
    diff: true,
    collapsed: true
});

export const store = createStore(
    combineReducers({ getMovies, getMoviesInfo }),
    applyMiddleware(logger, thunk)
);