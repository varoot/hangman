import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import {
  LoadStatus,
  WordAction,
  WordActionType,
  WordSetWordAction,
} from './types';

// Get an API key from https://random-word-api.herokuapp.com/
const apiKey = '2K22E1EQ';

export function setWord(status: LoadStatus, word: string): WordSetWordAction {
  return {
    type: WordActionType.SetWord,
    payload: {
      status,
      letters: word
        .toLocaleUpperCase()
        .split('')
        .map(letter => letter.charCodeAt(0)),
    },
  };
}

export function fetchWord(): ThunkAction<void, RootState, void, WordAction> {
  return async dispatch => {
    console.log('fetching word...');
    dispatch(setWord(LoadStatus.Loading, ''));

    try {
      const res = await axios.get<string[]>(
        `https://random-word-api.herokuapp.com/word?key=${apiKey}&number=1`,
      );

      console.log('got ', res.data);
      if (Array.isArray(res.data) && typeof res.data[0] === 'string') {
        dispatch(setWord(LoadStatus.Ok, res.data[0]));
      } else {
        throw new Error('Invalid response');
      }
    } catch (err) {
      dispatch(setWord(LoadStatus.Error, ''));
    }
  };
}
