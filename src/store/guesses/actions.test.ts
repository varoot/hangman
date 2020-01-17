import { addGuess, addLetter } from './actions';

describe('guesses actions', () => {
  describe('addGuess', () => {
    let dispatch: jest.Mock<any, any>;
    let getState: jest.Mock<any, any>;

    beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn().mockReturnValue({
        guesses: {
          guesses: [],
        },
      });
    });

    it('should do nothing if letter is not A-Z', () => {
      const thunk = addGuess('1');
      thunk(dispatch, getState);
      expect(dispatch).toHaveBeenCalledTimes(0);
    });

    it('should dispatch addLetter', () => {
      const thunk = addGuess('A');
      thunk(dispatch, getState);
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toBeCalledWith(addLetter('A'));
    });

    it('should dispatch uppercase letter', () => {
      const thunk = addGuess('a');
      thunk(dispatch, getState);
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toBeCalledWith(addLetter('A'));
    });
  });
});
