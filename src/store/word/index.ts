import { WordAction, WordActionType } from './types';

interface WordState {
  letters: string[];
}

const initialState: WordState = {
  letters: [],
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
