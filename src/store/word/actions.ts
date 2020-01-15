import { WordActionType, WordSetWordAction } from './types';

export function setWord(word: string): WordSetWordAction {
  return {
    type: WordActionType.SetWord,
    payload: {
      word: word.toLocaleUpperCase().split(''),
    },
  };
}
