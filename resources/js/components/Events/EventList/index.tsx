import * as React from "react";
import * as moment from 'moment'
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
    organizer: { name: string }
}

const EventList = ({ events }: IEventsList) => {
    return (
        <>
            <h2 id="event-list-heading">Events in This Month</h2>
            <div id="event-list">
                <div>
                    <Paper >
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell align="right">Event Name</TableCell>
                                    <TableCell align="right">Organizer</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {events.map((event: IEvent, i: number) => (
                                    <TableRow key={i}>
                                        <TableCell>{moment(event.date).format("Do / MMM")}</TableCell>
                                        <TableCell align="right" component="th" scope="row">
                                            {event.title}
                                        </TableCell>
                                        <TableCell align="right">{event.organizer.name}</TableCell>
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