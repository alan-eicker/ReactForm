import { render, screen } from '@testing-library/react';
import App from '../App';

it('Should render a form', () => {
  render(<App />);
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByRole('form')).toBeInTheDocument();
  expect(screen.getByLabelText(/first Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
  expect(
    screen.queryByLabelText(/I trigger a conditional field/i),
  ).toBeInTheDocument();
  expect(screen.queryByLabelText('Conditional Field')).not.toBeInTheDocument();
});
