import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    height: '100vh',
  },
  appBar: {
    height: '60px',
  },
}));

export default useStyles;
