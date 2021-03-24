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


//https://www.w3.org/TR/wai-aria/#role_definitions role definitions W3C
// https://testing-library.com/docs/queries/about/#priority which query RTL