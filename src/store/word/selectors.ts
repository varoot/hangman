import { RootState } from '../../store';

export function getWordLetters(state: RootState) {
  return state.word.letters;
}

export function getWordStatus(state: RootState) {
  return state.word.status;
}
