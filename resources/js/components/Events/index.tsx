import * as React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './styles.scss';

const Events = () => {
    return (
        <div id="event-wrapper">
            <div id="calendar-wrapper">
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin]}
                    events={[
                        { title: 'event 1', date: '2019-06-01' },
                        { title: 'event 2', date: '2019-06-02' }
                    ]} />
            </div>
            <div id="event-menu-wrapper"></div>
        </div>
    );
}

export default Events;