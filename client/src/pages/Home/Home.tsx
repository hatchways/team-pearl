import React from 'react';
import { Tabs, Tab, AppBar, Grid } from '@material-ui/core';
import { useParams, useHistory } from 'react-router';
import Dashboard from '../Dashboard/Dashboard';
import Calendar from '../Calendar/Calendar';
import useStyles from './useStyles';

const Home = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const { page } = useParams<{ page: string }>();

  const tabNameToIndex: { [key: number]: string } = {
    0: 'dashboard',
    1: 'calendar',
  };

  const indexToTabName: { [key: string]: number } = {
    dashboard: 0,
    calendar: 1,
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <Grid container className={classes.layout}>
      <Grid item>
        <AppBar position="static" className={classes.appBar}>
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab label="Dashboard" />
            <Tab label="Calendar" />
          </Tabs>
        </AppBar>
      </Grid>
      {selectedTab === 0 && <Dashboard />}
      {selectedTab === 1 && <Calendar />}
    </Grid>
  );
};

export default Home;
