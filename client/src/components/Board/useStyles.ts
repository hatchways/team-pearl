import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 'auto',
    borderRadius: '2px',
    display: 'flex',
    height: 'auto',
    marginTop: '20px',
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
    },
  },
}));

export default useStyles;
