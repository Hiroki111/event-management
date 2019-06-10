import * as React from 'react';
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
import './styles.scss';

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

const Navigation = () => {
    const { location } = useReactRouter();

    const useTabIndex = (): number => {
        if (!mapUrlToIndex[location.pathname]) return 0;

        return mapUrlToIndex[location.pathname];
    }

    const onClickLogOut = () => callLogoutApi();

    return (
        <AppBar position="static" className="app-bar">
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
    );
}

export default Navigation;