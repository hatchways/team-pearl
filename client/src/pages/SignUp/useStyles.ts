import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  authWrapper: {
    width: '200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '80vh',
  },
  welcome: {
    fontSize: 32,
    paddingBottom: 20,
    marginBottom: 50,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
    textAlign: 'center',
  },
}));

export default useStyles;
