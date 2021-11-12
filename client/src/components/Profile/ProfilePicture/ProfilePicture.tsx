import React, { FunctionComponent, useCallback } from 'react';
import { Avatar, IconButton, Box } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { useDropzone } from 'react-dropzone';

import useStyles from './useStyles';

interface Props {
  handleSubmit: (data: FormData) => void;
  avatar?: string;
}

const ProfilePicture: FunctionComponent<Props> = ({ handleSubmit, avatar }: Props) => {
  const classes = useStyles();

  const onDrop = useCallback(
    (acceptedFiles) => {
      const formData = new FormData();
      acceptedFiles.forEach((file: File) => {
        formData.append('image', file);
      });

      handleSubmit(formData);
    },
    [handleSubmit],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    // <div className={classes.root}>
    <Box {...getRootProps({ className: classes.imageContainer })}>
      <Avatar alt={'user profile picture'} src={avatar} className={classes.large} />
      <input
        {...getInputProps({
          accept: 'image/*',
          className: classes.input,
          id: 'icon-button-file',
          type: 'file',
          name: 'image',
        })}
      />
      <label htmlFor="icon-button-file" className={classes.label}>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Box>
    // </div>
  );
};

export default ProfilePicture;
