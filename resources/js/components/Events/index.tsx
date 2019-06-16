import * as React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import withRedux, { IWithReduxProps } from 'js/components/Events/withRedux';
import './styles.scss';

const Events = ({ events, isLoadingEvents }: IWithReduxProps) => {
    const renderCalender = () => {
        if (isLoadingEvents) {
            return <span>Loading...</span>;
        }

        return <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={events} />;
    }

    return (
        <div id="event-wrapper">
            <div id="calendar-wrapper">
                {renderCalender()}
            </div>
            <div id="event-menu-wrapper"></div>
        </div>
    );
}

const EventsWithRedux = withRedux(Events);

export { EventsWithRedux as Events, Events as DisconnectedEvents };