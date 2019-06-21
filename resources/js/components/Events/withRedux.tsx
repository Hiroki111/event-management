import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as operations from '../../redux/models/event/operations';
import { getEvents, getIsLoadingEvents } from '../../redux/models/event/selectors';

interface IReduxProps {
    eventsForCalendar: any[];
    isLoadingEvents: boolean;
}

interface IDispatch {
    fetchEventsForCalendar: () => void;
}

export interface IWithReduxProps extends IReduxProps, IDispatch { };

const WithRedux = (Component: React.ComponentType<IWithReduxProps>) => {
    class Events extends React.Component<IWithReduxProps> {
        render() {
            return <Component {...this.props} />;
        }

        componentDidMount() {
            this.props.fetchEventsForCalendar();
        }
    };

    const mapDispatchToProps = (dispatch: (action: any) => void): IDispatch => ({
        fetchEventsForCalendar: () => dispatch(operations.fetchEventsForCalendar()),
    })

    const mapStateToProps = createStructuredSelector({
        eventsForCalendar: getEvents,
        isLoadingEvents: getIsLoadingEvents,
    });

    return connect<IReduxProps, IDispatch>(
        mapStateToProps,
        mapDispatchToProps
    )(Events);
}

export default WithRedux;