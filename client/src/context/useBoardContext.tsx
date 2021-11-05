import { useState, createContext, FunctionComponent, Dispatch, SetStateAction } from 'react';
import mockBoard from '../mocks/mockData';
import { IData } from '../interface';

export const BoardContext = createContext({} as [IData, Dispatch<SetStateAction<IData>>]);

export const BoardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [board, setBoard] = useState(mockBoard);
  return <BoardContext.Provider value={[board, setBoard]}>{children}</BoardContext.Provider>;
};
