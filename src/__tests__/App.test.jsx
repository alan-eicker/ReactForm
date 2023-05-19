import { render, screen } from '@testing-library/react';
import App from '../App';

it('Should render a form', () => {
  render(<App />);
  const formEl = screen.getByRole('form');
  expect(formEl).toBeInTheDocument();
});
