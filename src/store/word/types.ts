export enum WordActionType {
  SetWord = 'Word/SetWord',
}

export interface WordSetWordAction {
  type: WordActionType.SetWord;
  payload: {
    letters: string[];
  };
}

export type WordAction = WordSetWordAction;
