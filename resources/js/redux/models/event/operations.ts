import { Dispatch, AnyAction } from 'redux';
import * as actions from 'js/redux/models/event/actions';
import axios from 'axios';

export const fetchEvents = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        dispatch(actions.fetchEvents());
        try {
            const eventResult = await axios({ method: 'get', url: '/api/events' });
            dispatch(actions.fetchEventsFulfilled(eventResult.data));
        } catch (error) {
            dispatch(actions.fetchEventsRejected(error));
        }
    }
};