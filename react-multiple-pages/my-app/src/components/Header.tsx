import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block px-4 py-2">
            <Link to={'about'} className="text-white">
              About
            </Link>
          </li>
          <li className="inline-block px-4 py-2">
            <Link to={'/'} className="text-white">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      {/* Page content goes here */}
      <Outlet />
    </div>
  );
}
