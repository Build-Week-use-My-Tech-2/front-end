import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App without errors', () => {
  render(<App />);
  // const h1 = screen.getByText(/use my tech/i)
  // expect(h1).toBeDefined();
});
