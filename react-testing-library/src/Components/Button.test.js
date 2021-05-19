import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { screen, prettyDOM } from '@testing-library/dom'
import Button from './Button'
import Statistics from './Statistics'

test('Open principal page', () => {
  const component = render(<Button />);
  const div = component.container.querySelector('div');
  console.log(prettyDOM(div));
});

test('Press the button', () => {
  render(<Button />)
  const button = screen.getByTestId('button-clic')
  fireEvent.click(button)
  render(<Statistics />)
  const statistics = screen.getByTestId('results')
  expect(statistics).toBeInTheDocument();
});

