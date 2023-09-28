import { useState } from 'react';

function UserForm({ onUserAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (setStateFn) => {
    return (e) => setStateFn(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onUserAdd({ name, email });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleInputChange(setName)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleInputChange(setEmail)}
        />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
