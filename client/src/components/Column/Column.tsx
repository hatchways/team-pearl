import React from 'react';
import useStyles from './useStyles';
import Card from '../Card/Card';
import { ICard } from '../../interface/Data';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Grid, Typography } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';

export default function Column(props: any): JSX.Element {
  const classes = useStyles();
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div className={classes.container} {...provided.draggableProps} ref={provided.innerRef}>
          <Grid container>
            <Grid item xs>
              <Typography variant="h5" className={classes.title} {...provided.dragHandleProps}>
                {props.column.title}
              </Typography>
            </Grid>
            <Grid item>
              <MoreHoriz fontSize="inherit" className={classes.moreHorizontal} />
            </Grid>
          </Grid>

          <Droppable droppableId={props.column.id} type="card">
            {(provided) => (
              <div className={classes.cards} ref={provided.innerRef} {...provided.droppableProps}>
                {props.cards.map((card: ICard, index: number) => (
                  <Card key={card.id} card={card} index={index} color={card.color} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
