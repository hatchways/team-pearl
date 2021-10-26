import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    minHeight: '20vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    borderTop: '1px solid rgba(0,0,0,0.1)',
  },
  accAside: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  link: { textDecoration: 'none' },
  accBtn: {
    width: 170,
    fontSize: 16,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',
    color: '#3a8dff',
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: '#3a8dff',
      color: '#ffffff',
    },
  },
}));

export default useStyles;
