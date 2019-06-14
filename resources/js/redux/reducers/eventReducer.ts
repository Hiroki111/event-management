import actions from "js/redux/actions";

interface Action {
    type: string, 
    payload: { results: any }
};

const { eventActions } = actions;
const defaults = {
    events: [] as any,
    error: false,
    fetching: false,
};

export default function (state = defaults, action: Action) {
    if (action.type === eventActions.get.pending)
        return { ...state, fetching: true, error: false };

    if (action.type === eventActions.get.fulfilled)
        return { ...state, fetching: false, error: false, data: action.payload.results };

    if (action.type === eventActions.get.rejected)
        return { ...state, fetching: false, error: true };

    return state;
}
