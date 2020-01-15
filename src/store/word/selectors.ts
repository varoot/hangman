import { createSelector } from 'reselect';
import { RootState } from '../../store';

export const getWordLetters = createSelector(
  (state: RootState) => state.word.letters,
  numbers => numbers.map(charCode => String.fromCharCode(charCode)),
);

export function getWordStatus(state: RootState) {
  return state.word.status;
}
