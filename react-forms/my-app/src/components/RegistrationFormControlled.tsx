import { ChangeEvent, FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('username', username);
    console.log('password', password);

    setUsername('');
    setPassword('');
  }

  return (
    <>
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <h1 className="text-white">Controlled Form</h1>
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
          Login
        </button>
      </form>
    </>
  );
}
