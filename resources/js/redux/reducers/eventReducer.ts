import * as types from "js/redux/models/event/types";

interface Action {
    type: string,
    payload: any
};

export interface EventStateI {
    events: any[],
    error: boolean,
    fetching: boolean
}

const defaults = {
    events: [] as any,
    error: false,
    fetching: false,
};

export default function (state: EventStateI = defaults, action: Action) {
    switch (action.type) {
        case `${types.FETCH_EVENTS}`: {
            return { ...state, fetching: true, error: false };
        }

        case `${types.FETCH_EVENTS_FULFILLED}`: {
            return { ...state, fetching: false, error: false, events: action.payload };
        }

        case `${types.FETCH_EVENTS_REJECTED}`: {
            return { ...state, fetching: false, error: true };
        }
    }

    return state;
}
