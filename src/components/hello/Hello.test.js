// src/components/Hello.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hello from './Hello';

test('renders Hello component with name', () => {
  const { getByText } = render(<Hello name="World" />);
  expect(getByText('Hello, World!')).toBeInTheDocument();
});

test('matches snapshot', () => {
    const { asFragment } = render(<Hello name="World" />);
    expect(asFragment()).toMatchSnapshot();
  });
