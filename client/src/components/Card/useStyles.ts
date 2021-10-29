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
    textAlign: 'left',
    paddingLeft: '10px',
  },
  tag: {
    backgroundColor: 'red',
    width: '20%',
    borderRadius: '10px',
    marginLeft: '10px',
    marginTop: '5px',
    //color: (props) => `${props.card.color}`,
  },
});

export default useStyles;
