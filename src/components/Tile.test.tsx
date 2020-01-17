import { render } from '@testing-library/react';
import React from 'react';
import Tile from './Tile';

describe('Tile', () => {
  it('should render letter if show is true', () => {
    const { container } = render(<Tile show letter="A" />);
    expect(container).toHaveTextContent('A');
  });

  it('should NOT render letter if show is false', () => {
    const { container } = render(<Tile letter="A" />);
    expect(container).toHaveTextContent('');
  });
});
