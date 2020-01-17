import { setWord } from '../word/actions';
import { LoadStatus } from '../word/types';
import { addLetter } from './actions';
import guessesReducer, { initialState } from './index';

describe('guesses reducer', () => {
  it('should initialize', () => {
    const state = guessesReducer(undefined, {} as any);
    expect(state).toBe(initialState);
  });

  it('should add letter', () => {
    const oldState = { guesses: ['A', 'B'] };
    const action = addLetter('C');
    const newState = guessesReducer(oldState, action);
    expect(newState.guesses).toEqual(['A', 'B', 'C']);
  });

  it('should reset when loading new word', () => {
    const oldState = { guesses: ['A', 'B'] };
    const action = setWord(LoadStatus.Ok, 'new');
    const newState = guessesReducer(oldState, action);
    expect(newState.guesses).toEqual([]);
    expect(newState).not.toBe(oldState);
  });
});
