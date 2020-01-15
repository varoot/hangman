import axios from 'axios';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Hangman from './components/Hangman';
import Slot from './components/Slot';
import Tile from './components/Tile';
import { RootState } from './store';
import { addCorrect, addIncorrect } from './store/guesses/actions';

// Get an API key from https://random-word-api.herokuapp.com/
const apiKey = '2K22E1EQ';

enum LoadStatus {
  Ok = 'ok',
  Loading = 'loading',
  Error = 'error',
}

const App: FC = () => {
  const maxGuesses = 10;
  const [loadStatus, setLoadStatus] = useState(LoadStatus.Loading);
  const [word, setWord] = useState<string[]>([]);
  const dispatch = useDispatch();
  const correctGuesses = useSelector(
    (state: RootState) => state.guesses.correct,
  );
  const incorrectGuesses = useSelector(
    (state: RootState) => state.guesses.incorrect,
  );

  const hasGameEnded = useMemo(() => {
    return (
      incorrectGuesses.length >= maxGuesses ||
      word.every(letter => correctGuesses.includes(letter))
    );
  }, [incorrectGuesses, correctGuesses, word]);

  async function fetchWord() {
    console.log('fetching word...');
    setLoadStatus(LoadStatus.Loading);

    try {
      const res = await axios.get<string[]>(
        `https://random-word-api.herokuapp.com/word?key=${apiKey}&number=1`,
      );

      console.log('got ', res.data);
      if (Array.isArray(res.data) && typeof res.data[0] === 'string') {
        setWord(res.data[0].toLocaleUpperCase().split(''));
        setLoadStatus(LoadStatus.Ok);
      } else {
        throw new Error('Invalid response');
      }
    } catch (err) {
      setLoadStatus(LoadStatus.Error);
    }
  }

  useEffect(() => {
    console.log('using effect for fetchWord');
    fetchWord();
  }, []);

  useEffect(() => {
    console.log('using effect');

    if (hasGameEnded) return;

    const listener = (event: KeyboardEvent) => {
      if (event.key.match(/[a-z]/i)) {
        console.log('keypress', event.key);
        const letter = event.key.toLocaleUpperCase();
        if (word.includes(letter)) {
          dispatch(addCorrect(letter));
        } else if (!incorrectGuesses.includes(letter)) {
          dispatch(addIncorrect(letter));
        }
      }
    };

    console.log('adding listener');
    document.body.addEventListener('keypress', listener);
    return () => {
      document.body.removeEventListener('keypress', listener);
    };
  });

  const clickHandler = useCallback(() => {
    console.log('button clicked');
    fetchWord();
  }, []);

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
