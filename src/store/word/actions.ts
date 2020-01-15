import { WordActionType, WordSetWordAction } from './types';

export function setWord(word: string): WordSetWordAction {
  return {
    type: WordActionType.SetWord,
    payload: {
      letters: word.toLocaleUpperCase().split(''),
    },
  };
}
