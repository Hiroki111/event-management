import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from "redux-promise-middleware";
import reducer from './redux/reducers';

export default createStore(
	reducer,
	applyMiddleware(promiseMiddleware, thunk)
);