import { Draggable } from 'react-beautiful-dnd';
import { Paper, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DefaultTheme } from '@material-ui/styles';

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
    margin: '14px 0',
    fontWeight: 'bold',
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
            <Typography variant="h5" className={classes.title}>
              {props.card.title}
            </Typography>
            <Typography variant="body1" className={classes.date}>
              {props.card.start}
            </Typography>
          </div>
        )}
      </Draggable>
    </Paper>
  );
}
