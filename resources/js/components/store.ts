import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from "redux-promise-middleware";

export default createStore(
	null,
	applyMiddleware(promiseMiddleware, thunk)
);