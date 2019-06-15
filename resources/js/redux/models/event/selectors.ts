import { createSelector } from 'reselect'
import { StateI } from 'js/redux/reducers';

const eventsSelector = (state: StateI) => state.event

export const getEvents = createSelector(
    eventsSelector,
    (event) => event.events
)

export const getIsLoadingEvents = createSelector(
    eventsSelector,
    (event) => event.fetching
)