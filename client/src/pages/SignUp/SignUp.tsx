import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import demoUserLogin from '../../helpers/APICalls/demoUserLogin';
import SignUpForm from './SignUpForm/SignUpForm';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
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
        // should not get here from backend but this catch is for an unknown issue
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
                Sign up to Kanban
              </Typography>
            </Grid>
          </Grid>
          <SignUpForm handleSubmit={handleSubmit} demoUserLogin={handleDemoUserSubmit} />
        </Box>
        <Box p={1} alignSelf="center" />
      </Box>
      <AuthHeader linkTo="/login" asideText="Already have an account?" btnText="Login" />
    </AuthWrapper>
  );
}
