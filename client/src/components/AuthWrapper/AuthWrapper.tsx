import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import authImage from '../../Images/auth_page.png';

type props = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: props): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root} spacing={0}>
      <CssBaseline />
      <Hidden smDown>
        <Grid item md={6} lg={6} spacing={0} style={{ maxHeight: '100vh' }}>
          <img src={authImage} className={classes.authImage} alt="work on laptop" draggable="false" />
        </Grid>
      </Hidden>
      <Grid item xs={12} md={6} lg={6} component={Paper} square spacing={0}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthWrapper;
