import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <h1>Could not find the page you were looking for</h1>
      <Link to={'/'}>
        <button className="px-2 py-1 my-2 bg-gray-300 border-2 rounded-md hover:border-blue-500">
          Return to Catalog
        </button>
      </Link>
    </>
  );
}
