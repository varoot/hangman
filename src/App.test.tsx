import React from 'react';
import App from './App';
import { fetchWord } from './store/word/actions';
import { LoadStatus, WordActionType } from './store/word/types';
import { render } from './testUtils';

jest.mock('./store/word/actions');

describe('App', () => {
  beforeEach(() => {
    (fetchWord as any).mockReturnValue({
      type: WordActionType.SetWord,
      payload: {
        status: LoadStatus.Ok,
        letters: [65, 66, 67],
      },
    });
  });

  it('renders reset button', () => {
    const { getByText } = render(<App />);
    const button = getByText('Reset');
    expect(button).toBeInTheDocument();
  });
});
