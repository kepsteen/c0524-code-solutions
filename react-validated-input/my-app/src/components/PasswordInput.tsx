import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

export function PasswordInput() {
  const [password, setPassword] = useState('');
  function checkForValidPassword(password: string): boolean {
    if (password.length < 8) {
      return false;
    }
    let containsNumber = false;
    let containsSpecialCharacter = false;
    let containsUpperCase = false;
    for (let i = 0; i < password.length; i++) {
      if (/\d/.test(password[i])) {
        containsNumber = true;
      } else if (
        password[i].toUpperCase() === password[i] &&
        /[A-Z]/.test(password[i])
      ) {
        if (password[i].toUpperCase() === password[i]) {
          containsUpperCase = true;
        }
      } else if (specialCharacters.includes(password[i])) {
        containsSpecialCharacter = true;
      }
    }
    if (!containsUpperCase) return false;
    if (!containsNumber) return false;
    if (!containsSpecialCharacter) return false;
    return true;
  }

  return (
    <>
      <form action="" className="flex flex-col">
        <label htmlFor="" className="text-lg text-white">
          Password{' '}
        </label>
        <div className="flex items-center gap-3">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="pl-1 border-2 border-black"
          />
          {checkForValidPassword(password) ? (
            <FaCheck className="text-lg text-green-400" />
          ) : (
            <FaX className="text-lg text-red-500" />
          )}
        </div>
        <p className="text-red-500">
          {password.length < 1 ? 'A password is Required' : ''}
        </p>
      </form>
    </>
  );
}
