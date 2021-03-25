import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App'

test('the button has correct initial color', () => {
  render(<App/>);
  // find an element with a role of button and change text to blue
  const colorButton = screen.getByRole('button', {name: "Change to Midnight Blue"});
  // expect the background color to be render
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})
});

test('button turns blue when clicked', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: "Change to Midnight Blue"});
  fireEvent.click(colorButton);
  // expect bg color to be blue
  expect(colorButton).toHaveStyle({backgroundColor:'MidnightBlue'})
  // expect button text to be change to render
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
})

test('initial conditions', () => {
  render(<App/>)
  // check that button starts enabled 
  const colorButton = screen.getByRole('button', {name: "Change to Midnight Blue"});
  expect(colorButton).toBeEnabled();
  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('button should be disabled when checkbox is checked and enabled when unchecked', () => {
  render(<App/>)
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const colorButton = screen.getByRole('button', {name: "Change to Midnight Blue"});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(checkbox).toBeChecked();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'})
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled()
  expect(checkbox).not.toBeChecked();
})

describe('spaces before camel-case capital letters', () => {
  it('should work with no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })

  it('should work for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })

  it('should work for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})


//https://www.w3.org/TR/wai-aria/#role_definitions role definitions W3C
// https://testing-library.com/docs/queries/about/#priority which query RTL