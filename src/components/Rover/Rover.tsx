/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import RoverIcon from '../../assets/images/rover.svg';

interface RoverProps {
  direction: any;
  position: any;
  gridSize: any;
}

const Rover = (props: RoverProps) => {
  let rotation = '0deg';

  const gridHeight = props.gridSize.height;
  const gridWidth = props.gridSize.width;

  const position = {
    ...props.position,
    top: `${gridHeight * (props.position.y < 0 ? - props.position.y : props.position.y) }%`,
    left: `${gridWidth * props.position.x}%`,
  };

  switch (props.direction) {
    case "N":
      rotation = '0deg';
      break;
    case "E":
      rotation = '90deg';
      break;
    case "S":
      rotation = '180deg';
      break;
    case "W":
      rotation = '270deg';
      break;
  }

  return (
    <div className="rover-wrapper" style={position} data-testid="rover">
      <img src={RoverIcon} style={{rotate: rotation}} alt="rover"/>
    </div>
  );
};

export default Rover;