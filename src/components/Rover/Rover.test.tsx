import React from 'react';
import { render } from '@testing-library/react';
import Rover from './Rover';


test('rendering of Rover', () => {
  const { getByTestId } = render(
    <Rover 
      direction={"N"}
      position={{x:0, y:0}}
      gridSize={{width:10,height:10}}
    />
  );
  const rover = getByTestId("rover");
  expect(rover).toBeTruthy();
});