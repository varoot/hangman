import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { fetchWord, getApiUrl, setWord } from './actions';
import { LoadStatus } from './types';

describe('word actions', () => {
  describe('fetchWord', () => {
    let mock: AxiosMockAdapter;
    let dispatch: jest.Mock<any, any>;
    let getState: jest.Mock<any, any>;

    beforeEach(() => {
      mock = new AxiosMockAdapter(axios);
      dispatch = jest.fn();
      getState = jest.fn();
    });

    it('should make API call', async () => {
      mock.onGet(getApiUrl()).reply(200, ['test']);

      const thunk = fetchWord();
      await thunk(dispatch, getState);

      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toHaveBeenLastCalledWith(setWord(LoadStatus.Ok, 'test'));
    });

    it('should set error if API returns error', async () => {
      mock.onGet(getApiUrl()).reply(200, 'Invalid API key');

      const thunk = fetchWord();
      await thunk(dispatch, getState);

      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toHaveBeenLastCalledWith(setWord(LoadStatus.Error, ''));
    });

    it('should call the API with correct parameters', async () => {
      const replyFn = jest.fn();
      mock.onGet().reply(replyFn);

      const thunk = fetchWord();
      await thunk(dispatch, getState);

      expect(replyFn).toBeCalledWith(
        expect.objectContaining({
          url: getApiUrl(),
        }),
      );
    });
  });
});
