import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import StatusPanel from './StatusPanel';
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

const statusPanel = (
  <StatusPanel
    commands={["f", "l", "r"]}
    direction={"N"}
    position={{x:0, y:0}}
    gridSize={{width:10,height:10}}
    move={() => {}}
  />
);

test('rendering of StatusPanel', () => {
  const { getByTestId } = render(statusPanel);
  const statuspanel = getByTestId("statuspanel");
  expect(statuspanel).toBeTruthy();
});

test('command changing direction to East', () => {
  const { getByTestId } = render(statusPanel);
  const input = getByTestId('inputCommand');
  
  expect((input as HTMLInputElement).value).toBe('');
  
  fireEvent.change((input as HTMLInputElement), { target: { value: 'r' } });
  expect((input as HTMLInputElement).value).toBe('r');
  
  const history = (getByTestId('txtHistory') as HTMLInputElement).innerHTML;
  expect(history).toBe('R');

  const direction = getByTestId('direction').innerHTML;
  expect(direction).toBe("E");

  const coordinates = getByTestId('coordinates').innerHTML;
  expect(coordinates).toBe((`(0, 0)`));
  
});

test('command changing position to (1,0)', () => {
  const { getByTestId } = render(statusPanel);
  const input = getByTestId('inputCommand');
  
  expect((input as HTMLInputElement).value).toBe('');
  
  userEvent.type(screen.getByTestId('inputCommand'), 'rf');
  
  const history = (getByTestId('txtHistory') as HTMLInputElement).innerHTML;
  expect(history).toBe('RF');

  const direction = getByTestId('direction').innerHTML;
  expect(direction).toBe("E");

  const coordinates = getByTestId('coordinates').innerHTML;
  expect(coordinates).toBe((`(1, 0)`));
  
});

test('command rfflfflfrff', () => {
  const { getByTestId } = render(statusPanel);
  
  const input = getByTestId('inputCommand');
  expect((input as HTMLInputElement).value).toBe('');
  
  userEvent.type(screen.getByTestId('inputCommand'), 'rfflfflfrff');
  
  const history = (getByTestId('txtHistory') as HTMLInputElement).innerHTML;
  expect(history).toBe('RFFLFFLFRFF');

  const direction = getByTestId('direction').innerHTML;
  expect(direction).toBe("N");

  const coordinates = getByTestId('coordinates').innerHTML;
  expect(coordinates).toBe((`(1, 0)`));
  
});