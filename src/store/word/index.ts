import { WordAction, WordActionType } from './types';

interface WordState {
  word: string[];
}

const initialState: WordState = {
  word: [],
};

function wordReducer(state = initialState, action: WordAction): WordState {
  switch (action.type) {
    case WordActionType.SetWord:
      return action.payload;
    default:
      return state;
  }
}

export default wordReducer;
