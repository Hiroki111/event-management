import { combineReducers } from 'redux';
import eventReducer, { EventStateI } from './eventReducer';

export interface StateI {
    event: EventStateI
}

export default combineReducers({
    event: eventReducer
});