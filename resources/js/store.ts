import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from "redux-promise-middleware";
import reducer from './redux/reducers';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(promiseMiddleware, thunk)
	)
);