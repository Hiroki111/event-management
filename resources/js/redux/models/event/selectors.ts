import { createSelector } from 'reselect'

const eventsSelector = state => state.event

export const getEvents = createSelector(
    eventsSelector,
    (event) => event.events
)

export const getIsLoadingEvents = createSelector(
    eventsSelector,
    (event) => event.fetching
)