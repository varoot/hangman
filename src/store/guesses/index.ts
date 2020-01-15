import { AnyAction } from 'redux';

interface GuessesState {
  correct: string[];
  incorrect: string[];
}

const initialState: GuessesState = {
  correct: [],
  incorrect: [],
};

function guessesReducer(state = initialState, action: AnyAction): GuessesState {
  return state;
}

export default guessesReducer;
