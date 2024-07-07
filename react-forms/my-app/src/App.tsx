import './App.css';
import { RegistrationFormControlled } from './components/RegistrationFormControlled';
import { RegistrationFormUncontrolled } from './components/RegistrationFormUncontrolled';
import { UserForm } from './components/UserForm';

function App() {
  const testUser = {
    username: 'cody',
    password: 'password',
  };
  console.log(testUser);

  return (
    <main className="flex items-center justify-center w-full min-h-screen gap-6 bg-slate-800">
      <RegistrationFormUncontrolled />
      <RegistrationFormControlled />
      <UserForm />
    </main>
  );
}

export default App;
