export interface WordState {
  letters: string[];
  status: LoadStatus;
}

export enum LoadStatus {
  Ok = 'ok',
  Loading = 'loading',
  Error = 'error',
}

export enum WordActionType {
  SetWord = 'Word/SetWord',
}

export interface WordSetWordAction {
  type: WordActionType.SetWord;
  payload: WordState;
}

export type WordAction = WordSetWordAction;
