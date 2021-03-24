import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', {name:/learn react/i});
  expect(linkElement).toBeInTheDocument();
});

//https://www.w3.org/TR/wai-aria/#role_definitions role definitions W3C
// https://testing-library.com/docs/queries/about/#priority which query RTL