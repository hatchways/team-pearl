import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '8px',
    border: '1px solid lightgrey',
    borderRadius: '6px',
    width: '100%',
    backgroundColor: '#F4F6FF',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
  },
  title: {
    padding: '8px',
    textAlign: 'left',
    paddingRight: '10px',
    marginLeft: '10px',
    fontWeight: 'bold',
  },
  cards: {
    padding: '8px',
    minHeight: '100px',
  },

  moreHorizontal: {
    fontSize: '30px',
    marginTop: '25px',
    marginRight: '10px',
    color: 'grey',
    display: 'flex',
  },
}));

export default useStyles;
