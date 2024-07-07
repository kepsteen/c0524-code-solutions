import { ChangeEvent, FormEvent, useState } from 'react';

type User = {
  username: string;
  password: string;
};

type UserFormProps = {
  user?: User;
};

export function UserForm({ user }: UserFormProps) {
  const [username, setUsername] = useState(user?.username ?? '');
  const [password, setPassword] = useState(user?.password ?? '');

  const isCreating = user === undefined;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isCreating) {
      console.log('creating user', user);
    } else {
      console.log('editing user', user);
    }
    console.log('username', username);
    console.log('password', password);

    const form = event.currentTarget;
    form.reset();

    setUsername('');
    setPassword('');
  }

  return (
    <>
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <h1 className="text-white">User Form</h1>
        <div className="flex flex-col form-group">
          <label htmlFor="username" className="text-lg text-white">
            Username
          </label>
          <input
            id="username-controlled"
            value={username}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setUsername(event.target.value)
            }
            name="username"
            type="text"
            className="pl-1 border rounded-sm border-slate-200"
          />
        </div>
        <div className="flex flex-col form-group">
          <label htmlFor="password" className="text-lg text-white">
            Password
          </label>
          <input
            id="password-controlled"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
            name="password"
            type="password"
            className="pl-1 border rounded-sm border-slate-200"
          />
        </div>
        <button
          type="submit"
          className="w-1/3 mt-4 bg-white rounded-sm text-slate-800 hover:bg-slate-300">
          {isCreating ? 'Sign up' : 'Login'}
        </button>
      </form>
    </>
  );
}
