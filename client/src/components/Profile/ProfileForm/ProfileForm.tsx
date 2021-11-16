import { Box, Button, CircularProgress, TextField } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';

import { User } from '../../../interface/User';
import { theme } from '../../../themes/theme';

interface Props {
  handleSubmit: (
    { username, email }: User,
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      username: string;
      email: string;
    }>,
  ) => void;
}

export default function ProfileForm({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Email is not valid'),
        username: Yup.string().max(100, 'username is too long').min(6, 'username too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            id="username"
            placeholder="Enter new username"
            fullWidth
            margin="normal"
            InputProps={{
              classes: { input: classes.inputs },
              disableUnderline: true,
            }}
            name="username"
            autoComplete="username"
            autoFocus
            helperText={touched.username ? errors.username : ''}
            error={touched.email && Boolean(errors.username)}
            value={values.username}
            onChange={handleChange}
          />
          <TextField
            id="email"
            placeholder="Enter new email"
            fullWidth
            margin="normal"
            InputProps={{
              classes: { input: classes.inputs },
              disableUnderline: true,
            }}
            name="email"
            autoComplete="email"
            autoFocus
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: theme.palette.primary.light }} /> : 'Submit'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
