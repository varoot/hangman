import { LoadStatus, WordAction, WordActionType } from './types';

interface WordState {
  letters: string[];
  status: LoadStatus;
}

const initialState: WordState = {
  letters: [],
  status: LoadStatus.Loading,
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
