export function fetchEvents() {
    return {
        type: "FETCH_EVENTS",
    };
}

export function fetchEventsFulfilled(events: any[]) {
    return {
        type: "FETCH_EVENTS_FULFILLED",
        payload: events
    };
}

export function fetchEventsRejected(error: any) {
    return {
        type: "FETCH_EVENTS_REJECTED",
        payload: error
    };
}