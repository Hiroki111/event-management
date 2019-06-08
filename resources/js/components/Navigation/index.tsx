import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EventIcon from '@material-ui/icons/Event';
import BusinessIcon from '@material-ui/icons/Business';
import MicIcon from '@material-ui/icons/Mic';
import PeopleIcon from '@material-ui/icons/People';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import LogOutIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import { callLogoutApi } from 'js/utiles';

interface UrlToIndexI {
    "/events": number;
    "/organizers": number;
    "/equipment": number;
    "/members": number;
    "/roles": number;
    [key: string]: number;
};

const mapUrlToIndex: UrlToIndexI = {
    "/events": 0,
    "/organizers": 1,
    "/equipment": 2,
    "/members": 3,
    "/roles": 4
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Navigation = () => {
    const classes = useStyles();

    const useTabIndex = (): number => {
        const { location } = useReactRouter();

        if (!mapUrlToIndex[location.pathname]) return 0;

        return mapUrlToIndex[location.pathname];
    }

    const onClickLogOut = () => callLogoutApi();

    return (
        <div className={classes.root} >
            <AppBar position="static">
                <Tabs
                    value={useTabIndex()}
                >
                    <Tab label="EVENTS" component={Link} to="/events" icon={<EventIcon />} />
                    <Tab label="ORGANIZERS" component={Link} to="/organizers" icon={<BusinessIcon />} />
                    <Tab label="EQUIPMENT" component={Link} to="/equipment" icon={<MicIcon />} />
                    <Tab label="MEMBERS" component={Link} to="/members" icon={<PeopleIcon />} />
                    <Tab label="ROLES" component={Link} to="/roles" icon={<PeopleOutlineIcon />} />
                    <Tab label="LOG OUT" onClick={onClickLogOut} icon={<LogOutIcon />} />
                </Tabs>
            </AppBar>
        </div>
    );
}

export default Navigation;