import { WordAction, WordActionType } from '../word/types';
import { GuessesAction, GuessesActionType, GuessesState } from './types';

export const initialState: GuessesState = {
  guesses: [],
};

function guessesReducer(
  state = initialState,
  action: GuessesAction | WordAction,
): GuessesState {
  switch (action.type) {
    case GuessesActionType.AddLetter: {
      return { ...state, guesses: [...state.guesses, action.payload.letter] };
    }
    case WordActionType.SetWord: {
      return initialState;
    }
    default:
      return state;
  }
}

export default guessesReducer;
