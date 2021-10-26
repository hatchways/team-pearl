import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  accAside: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
  },
  link: { textDecoration: 'none' },
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',
    color: '#3a8dff',
    boxShadow: 'none',
  },
}));

export default useStyles;
