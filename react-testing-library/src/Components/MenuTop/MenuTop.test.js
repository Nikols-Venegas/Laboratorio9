import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {prettyDOM} from '@testing-library/dom'
import { render, screen } from '@testing-library/react'
import MenuTop from './MenuTop'

test('Open principal page', () => {
    const component = render(<MenuTop />);
    const div = component.container.querySelector('div');
    console.log(prettyDOM(div));
  });

test('Looking for image', () => {
    render(<MenuTop />);
    const image = screen.getByTestId('image');
    expect(image).toBeInTheDocument();
  });
