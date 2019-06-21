import * as React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './styles.scss';

interface IEventsList {
    events: any[]
}

interface IEvent {
    title: string
    date: string
    start_time: string
    end_time: string
}

const EventList = ({ events }: IEventsList) => {
    return (
        <>
            <h2 id="event-list-heading">Events in this month</h2>
            <div id="event-list">
                <div>
                    <Paper >
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Event Name</TableCell>
                                    <TableCell align="right">Organizer</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {events.map((event: IEvent, i: number) => (
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row">
                                            {event.title}
                                        </TableCell>
                                        <TableCell align="right">event.organizer</TableCell>
                                        <TableCell align="right">{event.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        </>
    );
}

export default EventList;