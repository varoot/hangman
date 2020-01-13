import clsx from 'clsx';
import React, { FC, memo } from 'react';

interface HangmanProps {
  stage?: number;
}

const Hangman: FC<HangmanProps> = props => {
  const { stage = 0 } = props;
  return (
    <svg className="Hangman" height="200" width="200">
      {stage > 0 && <line x1="1" y1="199" x2="199" y2="199" />}
      {stage > 1 && <line x1="30" y1="199" x2="30" y2="1" />}
      {stage > 2 && <line x1="29" y1="2" x2="150" y2="2" />}
      <g className={clsx('Hangman-rope', { 'Hangman-rope-swing': stage > 9 })}>
        {stage > 3 && <line x1="130" y1="2" x2="130" y2="40" />}
        {stage > 4 && <circle cx="130" cy="60" r="20" />}
        {stage > 5 && <line x1="130" y1="80" x2="100" y2="110" />}
        {stage > 6 && <line x1="130" y1="80" x2="130" y2="130" />}
        {stage > 7 && <line x1="130" y1="80" x2="160" y2="110" />}
        {stage > 8 && <line x1="130" y1="130" x2="100" y2="160" />}
        {stage > 9 && <line x1="130" y1="130" x2="160" y2="160" />}
      </g>
    </svg>
  );
};

export default memo(Hangman);
