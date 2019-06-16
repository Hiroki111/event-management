import * as types from "js/redux/models/event/types";

export function fetchEvents() {
    return {
        type: types.FETCH_EVENTS,
    };
}

export function fetchEventsFulfilled(events: any[]) {
    return {
        type: types.FETCH_EVENTS_FULFILLED,
        payload: events
    };
}

export function fetchEventsRejected(error: any) {
    return {
        type: types.FETCH_EVENTS_REJECTED,
        payload: error
    };
}