export interface ICard {
  id: string;
  title: string;
  color: string;
  start: Date | string;
  end: Date | string;
  attachement?: string;
  checkList?: string[];
  comment?: string;
  cover?: string;
  description?: string;
  tag?: string;
}

export interface IColumn {
  id: string;
  title: string;
  cardIds: string[];
}

export interface IBoard {
  id: string;
  description: string;
  title: string;
  columnIds: string[];
}

export interface IData {
  cards: {
    [key: string]: ICard;
  };
  columns: {
    [key: string]: IColumn;
  };
  columnOrder: string[];
}
