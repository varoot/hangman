export enum WordActionType {
  SetWord = 'Word/SetWord',
}

export interface WordSetWordAction {
  type: WordActionType.SetWord;
  payload: {
    word: string[];
  };
}

export type WordAction = WordSetWordAction;
