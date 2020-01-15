import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { getWordLetters } from '../word/selectors';

export const maxGuesses = 10;

export function getCorrectGuesses(state: RootState) {
  return state.guesses.correct;
}

export function getIncorrectGuesses(state: RootState) {
  return state.guesses.incorrect;
}

export const getHasGameEnded = createSelector(
  getIncorrectGuesses,
  getCorrectGuesses,
  getWordLetters,
  (incorrectGuesses, correctGuesses, word) =>
    incorrectGuesses.length >= maxGuesses ||
    word.every(letter => correctGuesses.includes(letter)),
);
