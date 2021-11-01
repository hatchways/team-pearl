export interface ICard {
  id: string;
  title: string;
  description: string;
  color: string;
  date: string;
}

export interface Column {
  id: string;
  title: string;
  cardIds: string[];
}

export interface Board {
  id: string;
  description: string;
  title: string;
  columnIds: string[];
}

export interface DataInterface {
  cards: {
    [key: string]: ICard;
  };
  columns: {
    [key: string]: Column;
  };
  columnOrder: string[];
}
