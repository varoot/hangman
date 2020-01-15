import { GuessesActionType } from './types';

export function addCorrect(letter: string) {
  return {
    type: GuessesActionType.AddCorrect,
    payload: { letter },
  };
}

export function addIncorrect(letter: string) {
  return {
    type: GuessesActionType.AddIncorrect,
    payload: { letter },
  };
}
