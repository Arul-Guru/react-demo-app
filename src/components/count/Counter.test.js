// src/components/Counter.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

test('increments count', () => {
  const { getByText } = render(<Counter />);
    
  const button = getByText('Increment');
  fireEvent.click(button);
  fireEvent.click(button);

  expect(getByText('Count: 2')).toBeInTheDocument();
});
