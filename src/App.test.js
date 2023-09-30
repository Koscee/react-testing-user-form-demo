import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('it can recieve a new user and show it on a list', () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('mark');
  user.click(emailInput);
  user.keyboard('mark@hotmail.com');

  user.click(button);

  // screen.debug();

  const name = screen.getByRole('cell', { name: 'mark' });
  const email = screen.getByRole('cell', { name: 'mark@hotmail.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
