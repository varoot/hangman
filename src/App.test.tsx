import React from 'react';
import App from './App';
import * as wordActions from './store/word/actions';
import { LoadStatus } from './store/word/types';
import { fireEvent, render } from './testUtils';

jest.mock('./utils/setHangmanIcon');

describe('App', () => {
  beforeEach(() => {
    jest.spyOn(wordActions, 'fetchWord').mockImplementation(() => {
      return dispatch => {
        dispatch(wordActions.setWord(LoadStatus.Ok, 'ABC'));
      };
    });
  });

  it('renders reset button', () => {
    const { getByText } = render(<App />);
    const button = getByText('Reset');
    expect(button).toBeInTheDocument();
  });

  it('renders 3 tiles', () => {
    const { getAllByTestId } = render(<App />);
    const tiles = getAllByTestId('Tile');
    expect(tiles).toHaveLength(3);
  });

  it('reveals tile after keypress', () => {
    const { getAllByTestId, baseElement } = render(<App />);

    fireEvent.keyPress(baseElement, { key: 'A', code: 65, charCode: 65 });

    const tiles = getAllByTestId('Tile');
    expect(tiles).toHaveLength(3);
    expect(tiles[0]).toHaveTextContent('A');
    expect(tiles[1]).toHaveTextContent('');
    expect(tiles[2]).toHaveTextContent('');
  });
});
