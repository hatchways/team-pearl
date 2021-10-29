import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 'auto',
    //border: '1px solid lightgray',
    borderRadius: '2px',
    display: 'flex',
    height: '100%',
    marginTop: '20px',
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '75%',
    },
    [theme.breakpoints.down('md')]: {
      display: 'inline',
    },
  },
}));

export default useStyles;
