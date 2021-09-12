import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger/src";
import {getMoviesInfo, getSearchMovie} from "./reducers";
import thunk from "redux-thunk";

const logger = createLogger({
    diff: true,
    collapsed: true
});

export const store = createStore(
    combineReducers({
        getMoviesInfo,
        getSearchMovie
    }),
    applyMiddleware(logger, thunk)
);