import { Box, Button, CircularProgress, TextField } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    { password, oldPassword }: { password: string; oldPassword: string },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      password: string;
      oldPassword: string;
    }>,
  ) => void;
}

export default function ProfileForm({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        password: '',
        oldPassword: '',
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
        oldPassword: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            id="oldPassword"
            placeholder="Enter current password"
            fullWidth
            margin="normal"
            InputProps={{
              classes: { input: classes.inputs },
              disableUnderline: true,
            }}
            name="oldPassword"
            autoComplete="oldPassword"
            autoFocus
            helperText={touched.oldPassword ? errors.oldPassword : ''}
            error={touched.oldPassword && Boolean(errors.oldPassword)}
            value={values.oldPassword}
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
            autoComplete="password"
            autoFocus
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: '#759CFC' }} /> : 'Update Password'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
