import React from 'react';
import App from './App';
import { render } from './testUtils';

describe('App', () => {
  it('renders reset button', () => {
    const { getByText } = render(<App />);
    const button = getByText('Reset');
    expect(button).toBeInTheDocument();
  });
});
