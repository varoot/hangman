import { render } from '@testing-library/react';
import React from 'react';
import Slot from './Slot';

describe('Slot', () => {
  it('should render children', () => {
    const { getByText } = render(<Slot>T</Slot>);
    expect(getByText('T')).toBeInTheDocument();
  });
});
