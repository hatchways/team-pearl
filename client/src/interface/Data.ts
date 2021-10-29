export interface Card {
  id: string;
  title: string;
  description: string;
  color: string;
  date: string;
}

// Each column will contain references to their cards
export interface Column {
  id: string;
  title: string;
  cardIds: string[];
}

// Each Board will contain references to the columns
export interface Board {
  id: string;
  description: string;
  title: string;
  columnIds: string[];
}

// since we're only loading one board for now
export interface DataInterface {
  cards: {
    [key: string]: Card;
  };
  columns: {
    [key: string]: Column;
  };
  columnOrder: string[];
}
