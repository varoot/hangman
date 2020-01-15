export enum GuessesActionType {
  AddCorrect = 'Guesses/AddCorrect',
  AddIncorrect = 'Guesses/AddIncorrect',
}

export interface GuessesAddIncorrectAction {
  type: GuessesActionType.AddIncorrect;
  payload: {
    letter: string;
  };
}

export interface GuessesAddCorrectAction {
  type: GuessesActionType.AddCorrect;
  payload: {
    letter: string;
  };
}

export type GuessesAction = GuessesAddIncorrectAction | GuessesAddCorrectAction;
