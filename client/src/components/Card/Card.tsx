//import useStyles from './useStyles';
import { Draggable } from 'react-beautiful-dnd';
import { Paper } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DefaultTheme } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

interface Props {
  color: string;
  date: string;
}

const useStyles = makeStyles<DefaultTheme, Props>({
  container: {
    borderRadius: '10px',
    padding: '5px',
    marginBottom: '10px',
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
  tag: (props) => {
    return {
      backgroundColor: `${props.color}`,
      width: '15%',
      borderRadius: '10px',
      marginLeft: '10px',
      marginTop: '8px',
      height: '12px',
    };
  },
  date: {
    textAlign: 'left',
    paddingLeft: '10px',
    color: 'grey',
  },
});

export default function Card(props: any): JSX.Element {
  //const color = props.card.color;
  const classes = useStyles(props.card);
  return (
    <Paper>
      <Draggable draggableId={props.card.id} index={props.index}>
        {(provided, snapshot) => (
          <div
            className={classes.container}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            data-isDragging={snapshot.isDragging}
          >
            <Box className={classes.tag}></Box>
            <h2 className={classes.title}>{props.card.title}</h2>
            <p className={classes.date}>{props.card.date}</p>
          </div>
        )}
      </Draggable>
    </Paper>
  );
}
