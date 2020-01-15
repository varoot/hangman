import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { getWordLetters } from '../word/selectors';
import { getIncorrectGuesses } from './selectors';
import {
  GuessesAction,
  GuessesActionType,
  GuessesAddCorrectAction,
  GuessesAddIncorrectAction,
} from './types';

export function addCorrect(letter: string): GuessesAddCorrectAction {
  return {
    type: GuessesActionType.AddCorrect,
    payload: { letter },
  };
}

export function addIncorrect(letter: string): GuessesAddIncorrectAction {
  return {
    type: GuessesActionType.AddIncorrect,
    payload: { letter },
  };
}

export function addGuess(
  letter: string,
): ThunkAction<void, RootState, void, GuessesAction> {
  return (dispatch, getState) => {
    if (!letter.match(/[a-z]/i)) {
      return;
    }

    console.log('addGuess', letter);
    const word = getWordLetters(getState());
    const upper = letter.toLocaleUpperCase();
    if (word.includes(upper)) {
      dispatch(addCorrect(upper));
    } else if (!getIncorrectGuesses(getState()).includes(upper)) {
      dispatch(addIncorrect(upper));
    }
  };
}
