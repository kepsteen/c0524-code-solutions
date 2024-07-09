import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    const username = formJson.username as string;
    const password = formJson.password as string;

    console.log('Username:', username);
    console.log('Password:', password);

    form.reset();
  }
  return (
    <>
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <h1 className="text-white">Uncontrolled Form</h1>
        <div className="flex flex-col form-group">
          <label htmlFor="username" className="text-lg text-white">
            Username
          </label>
          <input
            id="username"
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
            id="password"
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
