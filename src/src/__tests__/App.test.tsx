import '@testing-library/jest-dom';
import { render, screen,  } from '@testing-library/react';
import App from '../App';

test('should increment', () => {
  render(<App />);
  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument();

});