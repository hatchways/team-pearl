import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import demoUserLogin from '../../helpers/APICalls/demoUserLogin';
import LoginForm from './LoginForm/LoginForm';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown 
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  const handleDemoUserSubmit = () => {
    demoUserLogin().then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        console.error({ data });
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <AuthWrapper>
      <Box className={classes.authWrapper}>
        <Box width="100%" minWidth={375} p={3} alignSelf="center">
          <Grid container>
            <Grid item xs>
              <Typography className={classes.welcome} component="h1" variant="h5">
                Welcome back!
              </Typography>
            </Grid>
          </Grid>
          <LoginForm handleSubmit={handleSubmit} demoUserLogin={handleDemoUserSubmit} />
        </Box>
        <Box p={1} alignSelf="center" />
      </Box>
      <AuthHeader linkTo="/signup" asideText="Don't have an account?" btnText="Create" />
    </AuthWrapper>
  );
}
