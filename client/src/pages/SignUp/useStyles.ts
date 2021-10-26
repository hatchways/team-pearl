import { makeStyles } from '@material-ui/core/styles';
import authImage from '../../Images/auth_page.png';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    display: 'flex',
  },
  authImage: {
    width: '100%',
    height: '100%',
  },
  authWrapper: {
    width: '200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
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
