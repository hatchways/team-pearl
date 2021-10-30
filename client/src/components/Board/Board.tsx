import { useContext } from 'react';
import { BoardContext } from '../../context/useBoardContext';
import Column from '../Column/Column';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import useStyles from './useStyles';

export interface result {
  draggableId: string;
  type: string;
  reason: string;
  source: {
    droppableId: string;
    index: number;
  };
  destination: {
    droppableId: string;
    index: number;
  };
}

export default function Board(): JSX.Element {
  const styles = useStyles();
  const [board, setBoard] = useContext(BoardContext);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(board.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...board,
        columnOrder: newColumnOrder,
      };
      setBoard(newState);
      return;
    }

    const start = board.columns[source.droppableId];
    const finish = board.columns[destination.droppableId];

    if (start === finish) {
      const column = board.columns[source.droppableId];
      const newCardIds = Array.from(column.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        cardIds: newCardIds,
      };
      const newState = {
        ...board,
        columns: {
          ...board.columns,
          [newColumn.id]: newColumn,
        },
      };
      setBoard(newState);
      return;
    }
    // list to list
    const startCardIds = Array.from(start.cardIds);
    startCardIds.splice(source.index, 1);
    const newStart = {
      ...start,
      cardIds: startCardIds,
    };
    const finishCardIds = Array.from(finish.cardIds);
    finishCardIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      cardIds: finishCardIds,
    };
    const newState = {
      ...board,
      columns: {
        ...board.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setBoard(newState);
    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div className={styles.container} {...provided.droppableProps} ref={provided.innerRef}>
            {board.columnOrder.map((columnId: string, index: number) => {
              const column = board.columns[columnId];
              const cards = column.cardIds.map((cardId: string) => board.cards[cardId]);
              return <Column key={column.id} column={column} cards={cards} index={index} />;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
