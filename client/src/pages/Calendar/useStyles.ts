import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      padding: theme.spacing(2, 4, 0, 4),
      fontFamily: theme.typography.fontFamily,
    },
  }),
);

export default useStyles;
