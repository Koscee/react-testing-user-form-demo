import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserList from './UserList';

function renderComponent() {
  const users = [
    { name: 'binta', email: 'binta@mail.com' },
    { name: 'dave', email: 'dave@mail.com' },
  ];

  // const { container } = render(<UserList users={users} />);
  render(<UserList users={users} />);

  return { users /* , container */ };
}

test('it renders one row per user', () => {
  // render component
  renderComponent();

  // find all the rows in the table

  // Method 1:
  // eslint-disable-next-line
  // const rows = container.querySelectorAll('tbody tr'); // ignore warning

  // Method 2: assuming ' data-testid="users" ' attribute has been added to the html element (tbody)
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // assert correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('it render the email and name of each user', () => {
  // render component
  const { users } = renderComponent();

  for (const user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
