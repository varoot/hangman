import React, { FC } from 'react';

const Slot: FC = props => {
  const { children } = props;
  return <div className="Slot">{children}</div>;
};

export default Slot;
