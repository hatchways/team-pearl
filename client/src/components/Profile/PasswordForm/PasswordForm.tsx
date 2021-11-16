import { Box, Button, CircularProgress, TextField } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { theme } from '../../../themes/theme';
import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    { password, currentPassword }: { password: string; currentPassword: string },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      password: string;
      currentPassword: string;
    }>,
  ) => void;
}

export default function ProfileForm({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        password: '',
        currentPassword: '',
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
        currentPassword: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            id="currentPassword"
            placeholder="Enter current password"
            fullWidth
            margin="normal"
            InputProps={{
              classes: { input: classes.inputs },
              disableUnderline: true,
            }}
            name="currentPassword"
            autoComplete="current-password"
            autoFocus
            helperText={touched.currentPassword ? errors.currentPassword : ''}
            error={touched.currentPassword && Boolean(errors.currentPassword)}
            value={values.currentPassword}
            onChange={handleChange}
          />
          <TextField
            id="password"
            placeholder="Enter new password"
            fullWidth
            margin="normal"
            InputProps={{
              classes: { input: classes.inputs },
              disableUnderline: true,
            }}
            name="password"
            autoComplete="new-password"
            autoFocus
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: theme.palette.primary.light }} /> : 'Update Password'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
