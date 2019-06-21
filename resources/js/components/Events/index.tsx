import * as React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import withRedux, { IWithReduxProps } from 'js/components/Events/withRedux';
import EventList from 'js/components/Events/EventList';
import './styles.scss';

const Events = ({ eventsForCalendar, isLoadingEvents }: IWithReduxProps) => {
    const renderCalender = () => {
        if (isLoadingEvents) {
            return <span>Loading...</span>;
        }

        return <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={eventsForCalendar}
        />;
    }

    return (
        <div id="event-wrapper">
            <div id="calendar-wrapper">
                {renderCalender()}
            </div>
            <div id="event-menu-wrapper">
                <EventList events={eventsForCalendar.filter(event => {
                    return (new Date()).getMonth() === (new Date(event.date)).getMonth();
                })} />
            </div>
        </div>
    );
}

const EventsWithRedux = withRedux(Events);

export { EventsWithRedux as Events, Events as DisconnectedEvents };