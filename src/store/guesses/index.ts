import { WordAction, WordActionType } from '../word/types';
import { GuessesAction, GuessesActionType } from './types';

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
  action: GuessesAction | WordAction,
): GuessesState {
  switch (action.type) {
    case GuessesActionType.AddCorrect: {
      return { ...state, correct: [...state.correct, action.payload.letter] };
    }
    case GuessesActionType.AddIncorrect: {
      return {
        ...state,
        incorrect: [...state.incorrect, action.payload.letter],
      };
    }
    case WordActionType.SetWord: {
      return initialState;
    }
    default:
      return state;
  }
}

export default guessesReducer;
