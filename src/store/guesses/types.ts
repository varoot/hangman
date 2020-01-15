export enum GuessesActionType {
  AddLetter = 'Guesses/AddLetter',
}

export interface GuessesAddLetterAction {
  type: GuessesActionType.AddLetter;
  payload: {
    letter: string;
  };
}

export type GuessesAction = GuessesAddLetterAction;
