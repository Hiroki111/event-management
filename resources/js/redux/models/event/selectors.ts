import { createSelector } from 'reselect'
import { IState } from 'js/redux/reducers';

const eventsSelector = (state: IState) => state.event;

export const getEvents = createSelector(
    eventsSelector,
    (event) => event.events
)

export const getIsLoadingEvents = createSelector(
    eventsSelector,
    (event) => event.fetching
)