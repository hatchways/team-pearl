import { FunctionComponent } from 'react';
import { updateProfile, updatePassword } from '../../helpers/APICalls/updateProfile';
import ProfileForm from './ProfileForm/ProfileForm';
import PasswordForm from './PasswordForm/PasswordForm';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import { FormikHelpers } from 'formik';
import { User } from '../../interface/User';
import { Container } from '@material-ui/core';

import useStyles from './useStyles';
import { updateProfilePicture } from '../../helpers/APICalls/uploadImage';
import { useAuth } from '../../context/useAuthContext';

const Profile: FunctionComponent = () => {
  const classes = useStyles();
  const { loggedInUser, updateLoginContext } = useAuth();

  const handleUserDataSubmit = ({ username, email }: User, { setSubmitting, resetForm }: FormikHelpers<User>) => {
    updateProfile(username, email).then((data) => {
      if (data.error) {
        setSubmitting(false);
        resetForm();
      } else if (data.success) {
        setSubmitting(false);
        resetForm();
      } else {
        // should not get here from backend but this catch is for an unknown
        console.error({ data });

        setSubmitting(false);
      }
    });
  };

  const handlePasswordSubmit = (
    { password, oldPassword }: { password: string; oldPassword: string },
    { setSubmitting, resetForm }: FormikHelpers<{ password: string; oldPassword: string }>,
  ) => {
    updatePassword(password, oldPassword).then((data) => {
      if (data.error) {
        setSubmitting(false);
        resetForm();
      } else if (data.success) {
        setSubmitting(false);
        resetForm();
      } else {
        // should not get here from backend but this catch is for an unknown
        console.error({ data });

        setSubmitting(false);
      }
    });
  };

  const handlePictureSubmit = (formData: FormData) => {
    updateProfilePicture(formData).then((data) => {
      if (data.error) {
        console.error(data.error);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        console.error({ data });
      }
    });
  };

  return (
    <Container maxWidth={'xs'} className={classes.container}>
      <ProfilePicture handleSubmit={handlePictureSubmit} avatar={loggedInUser?.avatar} />
      <ProfileForm handleSubmit={handleUserDataSubmit} />
      <PasswordForm handleSubmit={handlePasswordSubmit} />
    </Container>
  );
};

export default Profile;
