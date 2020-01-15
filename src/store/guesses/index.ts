import { GuessesAction } from './types';

interface GuessesState {
  correct: string[];
  incorrect: string[];
}

const initialState: GuessesState = {
  correct: [],
  incorrect: [],
};

function guessesReducer(
  state = initialState,
  action: GuessesAction,
): GuessesState {
  switch (action.type) {
    case 'Guesses/AddCorrect': {
      return { ...state, correct: [...state.correct, action.payload.letter] };
    }
    case 'Guesses/AddIncorrect': {
      return {
        ...state,
        incorrect: [...state.incorrect, action.payload.letter],
      };
    }
    default:
      return state;
  }
}

export default guessesReducer;
