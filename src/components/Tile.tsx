import clsx from 'clsx';
import React, { FC } from 'react';

interface TileProps {
  error?: boolean;
  letter: string;
  show?: boolean;
}

const Tile: FC<TileProps> = props => {
  const { error, letter, show } = props;
  return (
    <div className={clsx('Tile', { 'Tile-error': error })} data-testid="Tile">
      {show ? letter : ''}
    </div>
  );
};

export default Tile;
