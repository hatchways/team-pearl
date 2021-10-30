import { useState, createContext, FunctionComponent, Dispatch, SetStateAction } from 'react';
import mockBoard from '../mocks/mockData';
import { DataInterface } from '../interface/Data';

//Creating the context
export const BoardContext = createContext({} as (DataInterface | Dispatch<SetStateAction<DataInterface>>)[]);

//Creating the provider
export const BoardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [board, setBoard] = useState(mockBoard);
  return <BoardContext.Provider value={[board, setBoard]}>{children}</BoardContext.Provider>;
};
