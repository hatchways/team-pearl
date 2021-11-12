import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      margin: theme.spacing(6, 'auto', 3, 'auto'),
    },
    large: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
    header: {
      alignSelf: 'start',
      marginLeft: theme.spacing(2),
    },
    input: {
      display: 'none',
    },
    label: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
    },
  }),
);

export default useStyles;
