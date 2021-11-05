import { IData } from '../interface';
const mockBoard: IData = {
  cards: {
    'card-1': {
      id: 'card-1',
      title: 'Take out the Garbage',
      description: 'Take out Garbage Tonight',
      color: '#FF5D48',
      start: '2021-11-12',
      end: '2021-11-20',
    },
    'card-2': {
      id: 'card-2',
      title: 'Do English Homework',
      description: 'Do Homework',
      color: '#5ACD76',
      start: '2021-11-29',
      end: '2021-11-30',
    },
    'card-3': {
      id: 'card-3',
      title: 'Laundry Load for Tonight',
      description: 'Do Laundry',
      color: '#EDAB1D',
      start: '2021-11-12',
      end: '2021-11-13',
    },
    'card-4': {
      id: 'card-4',
      title: 'Fix the Pot Lights',
      description: 'Fix Lights',
      color: '#59B0FF',
      start: '2021-11-01',
      end: '2021-11-02',
    },
    'card-5': {
      id: 'card-5',
      title: 'Bring Computer to the Apple Store',
      description: 'Fix Computer',
      color: '#D460F7',
      start: '2021-11-04',
      end: '2021-11-05',
    },
    'card-6': {
      id: 'card-6',
      title: 'Mown the Lawn trim the bush',
      description: 'Mow Lawn',
      color: '#D460F7',
      start: '2021-02-04',
      end: '2021-02-05',
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
