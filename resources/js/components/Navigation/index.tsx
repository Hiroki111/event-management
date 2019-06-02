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
import LogOffIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Navigation = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="EVENT" icon={<EventIcon />} />
                    <Tab label="ORGANIZERS" icon={<BusinessIcon />} />
                    <Tab label="EQUIPMENT" icon={<MicIcon />} />
                    <Tab label="MEMBERS" icon={<PeopleIcon />} />
                    <Tab label="ROLES" icon={<PeopleOutlineIcon />} />
                    <Tab label="LOG OFF" icon={<LogOffIcon />} />
                </Tabs>
            </AppBar>
        </div>
    );
}

export default Navigation;