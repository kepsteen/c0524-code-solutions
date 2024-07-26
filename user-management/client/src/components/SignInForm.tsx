import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, useUser } from './useUser';

type AuthData = {
  user: User;
  token: string;
};

/**
 * Form that signs in a user.
 */
export function SignInForm() {
  const { handleSignIn } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData);
      console.log('userData', userData);
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/auth/sign-in', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const { user, token } = (await res.json()) as AuthData;
      handleSignIn(user, token);
      navigate('/');
    } catch (err) {
      alert(`Error signing in: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <h2 className="text-xl font-bold">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-1">
          <div className="w-1/2">
            <label className="block mb-1">
              Username
              <input
                required
                name="username"
                type="text"
                className="block w-full h-8 p-2 mb-2 border border-gray-600 rounded"
              />
            </label>
            <label className="block mb-1">
              Password
              <input
                required
                name="password"
                type="password"
                className="block w-full h-8 p-2 mb-2 border border-gray-600 rounded"
              />
            </label>
          </div>
        </div>
        <button
          disabled={isLoading}
          className="px-3 py-1 text-center text-white align-middle bg-blue-600 border rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}
