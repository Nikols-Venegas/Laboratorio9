import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import {prettyDOM} from '@testing-library/dom'
import Statistics from './Statistics'

test('Open principal page', () => {
  const component = render(<Statistics />);
  const div = component.container.querySelector('div');
  console.log(prettyDOM(div));
});

test('looking for existence of the title', () => {
  render(<Statistics />);
  const title = screen.getByText(/statistics/i);
  expect(title).toBeInTheDocument();
});


