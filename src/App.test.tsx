import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renderinf of App', () => {
  const { getByTestId } = render(<App />);
  const app = getByTestId("app");
  expect(app).toBeTruthy();
});
