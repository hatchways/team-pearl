import { DataInterface } from '../interface/Data';
const mockBoard: DataInterface = {
  cards: {
    'card-1': {
      id: 'card-1',
      title: 'Garbage',
      description: 'Take out Garbage',
      color: 'red',
    },
    'card-2': {
      id: 'card-2',
      title: 'Homework',
      description: 'Do Homework',
      color: 'red',
    },
    'card-3': {
      id: 'card-3',
      title: 'Laundry',
      description: 'Do Laundry',
      color: 'red',
    },
    'card-4': {
      id: 'card-4',
      title: 'Lights',
      description: 'Fix Lights',
      color: 'red',
    },
    'card-5': {
      id: 'card-5',
      title: 'Computer',
      description: 'Fix Computer',
      color: 'red',
    },
    'card-6': {
      id: 'card-6',
      title: 'Lawn',
      description: 'Mow Lawn',
      color: 'red',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      cardIds: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      cardIds: ['card-6'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      cardIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};
export default mockBoard;
