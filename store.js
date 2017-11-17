import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger'


export default (initialState) => {
    return createStore(reducer, initialState, compose(applyMiddleware(thunk, promiseMiddleware(), logger)))
}