import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  // render the component
  render(<UserForm />);

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // assert the component does what its expected to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', () => {
  const mock = jest.fn();

  // render the component
  render(<UserForm onUserAdd={mock} />);

  // find the two inputs
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  // simulate typing in a name
  user.click(nameInput);
  user.keyboard('andrew');

  // simulate typing in an email
  user.click(emailInput);
  user.keyboard('andrew02@hotmail.com');

  // find the button
  const button = screen.getByRole('button');

  // simulate clicking the button
  user.click(button);

  // assert that 'onUserAdd' gets called with email and name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: 'andrew',
    email: 'andrew02@hotmail.com',
  });
});
