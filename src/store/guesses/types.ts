export interface GuessesAddIncorrectAction {
  type: 'Guesses/AddIncorrect';
  payload: {
    letter: string;
  };
}

export interface GuessesAddCorrectAction {
  type: 'Guesses/AddCorrect';
  payload: {
    letter: string;
  };
}

export type GuessesAction = GuessesAddIncorrectAction | GuessesAddCorrectAction;
