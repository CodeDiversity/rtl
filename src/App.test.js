import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('the button has correct initial color', () => {
  render(<App/>);
  // find an element with a role of button and change text to blue
  const colorButton = screen.getByRole('button', {name: "Change to blue"});
  // expect the background color to be render
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
});

test('button turns blue when clicked', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: "Change to blue"});
  fireEvent.click(colorButton);
  // expect bg color to be blue
  expect(colorButton).toHaveStyle({backgroundColor:'blue'})
  // expect button text to be change to render
  expect(colorButton.textContent).toBe('Change to red');
})

test('initial conditions', () => {
  render(<App/>)
  // check that button starts enabled 
  const colorButton = screen.getByRole('button', {name: "Change to blue"})
  expect(colorButton).toBeEnabled();
  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('button should be disabled when checkbox is checked and enabled when unchecked', () => {
  render(<App/>)
  const checkbox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button', {name: "Change to blue"});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled()
  expect(checkbox).not.toBeChecked();
})


//https://www.w3.org/TR/wai-aria/#role_definitions role definitions W3C
// https://testing-library.com/docs/queries/about/#priority which query RTL