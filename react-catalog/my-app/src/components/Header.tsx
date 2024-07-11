import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header className="flex items-center h-12 bg-slate-800">
        <nav>
          <ul className="flex gap-6 pl-6">
            <li>
              <Link to="/about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
