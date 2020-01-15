import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { getWordLetters } from '../word/selectors';

export const maxGuesses = 10;

export function getAllGuesses(state: RootState) {
  return state.guesses.guesses;
}

export const getCorrectGuesses = createSelector(
  getWordLetters,
  getAllGuesses,
  (word, allGuesses) => allGuesses.filter(letter => word.includes(letter)),
);

export const getIncorrectGuesses = createSelector(
  getWordLetters,
  getAllGuesses,
  (word, allGuesses) => allGuesses.filter(letter => !word.includes(letter)),
);

export const getHasGameEnded = createSelector(
  getIncorrectGuesses,
  getCorrectGuesses,
  getWordLetters,
  (incorrectGuesses, correctGuesses, word) =>
    incorrectGuesses.length >= maxGuesses ||
    word.every(letter => correctGuesses.includes(letter)),
);
