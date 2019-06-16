import { combineReducers } from 'redux';
import eventReducer, { IEventState } from './eventReducer';

export interface IState {
    event: IEventState
}

export default combineReducers<IState>({
    event: eventReducer
});