import { ChangeEvent, FormEvent } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

type Props = {
  setSearchTerm: (value: string) => void;
};

export function SearchBar({ setSearchTerm }: Props) {
  return (
    <>
      <form
        className="py-6 pl-10"
        onSubmit={(event: FormEvent<HTMLFormElement>) =>
          event.preventDefault()
        }>
        <div className="relative search-bar">
          <FaMagnifyingGlass className="absolute text-gray-500 top-2 left-2" />
          <label htmlFor="search"></label>
          <input
            type="text"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value.toLowerCase())
            }
            className="h-8 pl-8 text-black bg-white rounded-lg"
            id="search"
            name="search"
          />
        </div>
      </form>
    </>
  );
}
