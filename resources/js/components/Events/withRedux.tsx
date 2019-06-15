import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as operations from '../../redux/models/event/operations';
import { getEvents, getIsLoadingEvents } from '../../redux/models/event/selectors';

interface ReduxPropsI {
    events: any[];
    isLoadingEvents: boolean;
}

interface DispatchI {
    fetchEvents: () => void;
}

export interface WithReduxPropsI extends ReduxPropsI, DispatchI { };

const WithRedux = (Component: React.ComponentType<WithReduxPropsI>) => {
    class Events extends React.Component<WithReduxPropsI> {
        render() {
            return <Component {...this.props} />;
        }

        componentDidMount() {
            this.fetchEvents();
        }

        fetchEvents() {
            this.props.fetchEvents();
        }
    };

    const mapDispatchToProps = (dispatch: (action: any) => void): DispatchI => ({
        fetchEvents: () => dispatch(operations.fetchEvents()),
    })

    const mapStateToProps = createStructuredSelector({
        events: getEvents,
        isLoadingEvents: getIsLoadingEvents,
    });

    return connect<ReduxPropsI, DispatchI>(
        mapStateToProps, mapDispatchToProps
    )(Events);
}

export default WithRedux;