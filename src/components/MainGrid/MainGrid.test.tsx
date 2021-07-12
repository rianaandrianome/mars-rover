import React from 'react';
import { render } from '@testing-library/react';
import MainGrid from './MainGrid';


test('rendering of MainGrid', () => {
  const { getByTestId } = render(<MainGrid size={{width:10, height:10}} />);
  const maingrid = getByTestId("maingrid");
  expect(maingrid).toBeTruthy();
});