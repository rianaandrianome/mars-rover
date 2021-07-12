import React from 'react';

interface GridProps {
  size: any;
}

const MainGrid = (props: GridProps) => {
  return (
    <div
      className="mainGrid"
      style={{ backgroundSize: `${props.size.width}% ${props.size.height}%` }}
      data-testid="maingrid"
    />
  );
};

export default MainGrid;