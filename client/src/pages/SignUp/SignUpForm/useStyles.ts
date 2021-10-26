import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: '5px',
  },
  inputs: {
    fontSize: 16,
    fontWeight: 'bold',
    height: '3rem',
    padding: '5px',
    boxShadow: '0px 0px 12px 0px rgba(0,51,255,0.1)',
    textAlign: 'center',

    '&:last-child': {
      marginTop: '-10px',
    },

    '&::placeholder': {
      color: '#000000',
      opacity: 1,
    },
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: '#3a8dff',
    fontWeight: 'bold',
  },
}));

export default useStyles;
