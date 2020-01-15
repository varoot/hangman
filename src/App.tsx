import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Hangman from './components/Hangman';
import Slot from './components/Slot';
import Tile from './components/Tile';
import { addGuess } from './store/guesses/actions';
import {
  getCorrectGuesses,
  getHasGameEnded,
  getIncorrectGuesses,
  maxGuesses,
} from './store/guesses/selectors';
import { fetchWord } from './store/word/actions';
import { getWordLetters, getWordStatus } from './store/word/selectors';
import { LoadStatus } from './store/word/types';

const App: FC = () => {
  const loadStatus = useSelector(getWordStatus);
  const dispatch = useDispatch();
  const correctGuesses = useSelector(getCorrectGuesses);
  const incorrectGuesses = useSelector(getIncorrectGuesses);
  const word = useSelector(getWordLetters);
  const hasGameEnded = useSelector(getHasGameEnded);

  useEffect(() => {
    console.log('using effect for fetchWord');
    dispatch(fetchWord());
  }, [dispatch]);

  useEffect(() => {
    console.log('using effect');

    if (hasGameEnded) return;

    const listener = (event: KeyboardEvent) => {
      dispatch(addGuess(event.key));
    };

    console.log('adding listener');
    document.body.addEventListener('keypress', listener);
    return () => {
      document.body.removeEventListener('keypress', listener);
    };
  });

  const clickHandler = useCallback(() => {
    console.log('button clicked');
    dispatch(fetchWord());
  }, [dispatch]);

  console.log('render');
  return (
    <div className="App">
      <Hangman stage={incorrectGuesses.length} />
      {loadStatus === LoadStatus.Loading && (
        <div className="App-loading">Loading...</div>
      )}
      {loadStatus === LoadStatus.Error && (
        <div className="App-error">Error loading word</div>
      )}
      {loadStatus === LoadStatus.Ok && (
        <div className="App-tileContainer">
          {word.map((letter, index) => (
            <Tile
              key={index}
              error={!correctGuesses.includes(letter)}
              show={hasGameEnded || correctGuesses.includes(letter)}
              letter={letter}
            />
          ))}
        </div>
      )}
      <div className="App-slotContainer">
        {[...Array(maxGuesses)].map((value, index) => (
          <Slot key={index}>{incorrectGuesses[index]}</Slot>
        ))}
      </div>
      <button className="App-button" onClick={clickHandler}>
        {hasGameEnded ? 'Start Over' : 'Reset'}
      </button>
    </div>
  );
};

export default App;
