import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  container: {
    borderRadius: '10px',
    padding: '8px',
    marginBottom: '8px',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  description: {
    fontSize: '15px',
  },
  title: {
    marginTop: '10px',
    textAlign: 'left',
    paddingLeft: '10px',
  },
  tag: {
    backgroundColor: 'red',
    width: '20%',
    borderRadius: '10px',
    marginLeft: '10px',
    marginTop: '5px',
  },
});

export default useStyles;
