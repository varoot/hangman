import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { getAllGuesses } from './selectors';
import {
  GuessesAction,
  GuessesActionType,
  GuessesAddLetterAction,
} from './types';

export function addLetter(letter: string): GuessesAddLetterAction {
  return {
    type: GuessesActionType.AddLetter,
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
    const upper = letter.toLocaleUpperCase();
    if (!getAllGuesses(getState()).includes(upper)) {
      dispatch(addLetter(upper));
    }
  };
}
