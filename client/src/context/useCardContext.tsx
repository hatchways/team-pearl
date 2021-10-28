import { useState, createContext, FunctionComponent } from 'react';
import mockBoard from '../mocks/mockData';
//Creating the context
export const CardContext = createContext<any>({} as any);

//Creating the provider
export const CardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [board, setBoard] = useState(mockBoard);
  const providerValue = { board, setBoard };
  return <CardContext.Provider value={providerValue}>{children}</CardContext.Provider>;
};
