import { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { ChevronDown, LogOut, Plus, Settings } from 'lucide-react';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
      <header className="sticky top-0 z-50 w-full bg-blue-300 shadow-md text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-extrabold text-white tracking-wide">Tourify</Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-amber-200 transition">Home</Link>
            <Link to="/all-packages" className="hover:text-amber-200 transition">All Packages</Link>
            <Link to="/about" className="hover:text-amber-200 transition">About</Link>
            {user && (
                <Link to={`/my-bookings/${user.email}`} className="hover:text-amber-200 transition">My Bookings</Link>
            )}
            {/* Theme Toggle */}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller hidden" value="dark" />
              <svg className="swap-on w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64 17.657l-1.414 1.414 1.414-1.414zM4.222 12H1v0h3.222zM12 1v3.222V1zm5.657 4.222l1.414-1.414-1.414 1.414zM23 12h-3.222H23zM12 23v-3.222V23zM7.05 7.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9z" />
              </svg>
              <svg className="swap-off w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64 13.41a9 9 0 0 1-11.05-11.05 9.001 9.001 0 1 0 11.05 11.05z" />
              </svg>
            </label>

            {/* User Dropdown */}
            {user ? (
                <div className="relative">
                  <button onClick={toggleDropdown} className="flex items-center gap-2 focus:outline-none hover:text-amber-200 transition">
                    <img src={user?.photoURL} alt="Avatar" className="w-8 h-8 rounded-full border shadow-md" />
                    <ChevronDown size={18} />
                  </button>
                  {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2 z-20">
                        <Link to="/add-packages" className="flex items-center px-4 py-2 hover:bg-blue-50 transition">
                          <Plus size={16} /> <span className="ml-2">Add Package</span>
                        </Link>
                        <Link to="/manage-packages" className="flex items-center px-4 py-2 hover:bg-blue-50 transition">
                          <Settings size={16} /> <span className="ml-2">Manage My Packages</span>
                        </Link>
                        <button
                            onClick={() => {
                              localStorage.removeItem('token');
                              logOut();
                            }}
                            className="flex items-center text-red-600 w-full px-4 py-2 hover:bg-red-50 transition"
                        >
                          <LogOut size={16} /> <span className="ml-2">Logout</span>
                        </button>
                      </div>
                  )}
                </div>
            ) : (
                <>
                  <Link to="/signin" className="hover:text-amber-200 transition">Login</Link>
                  <Link to="/signup" className="hover:text-amber-200 transition">Register</Link>
                </>
            )}
          </nav>

          {/* Mobile Menu */}
          <div className="lg:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-52 text-gray-800 space-y-2">
              <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/all-packages" className="hover:text-blue-500">All Packages</Link></li>
              <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
              {user && <li><Link to={`/my-bookings/${user?.email}`}>My Bookings</Link></li>}
              {user ? (
                  <>
                    <li><Link to="/add-packages">Add Package</Link></li>
                    <li><Link to="/manage-packages">Manage My Packages</Link></li>
                    <li>
                      <button onClick={() => {
                        localStorage.removeItem('token');
                        logOut();
                      }} className="text-red-500">Logout</button>
                    </li>
                  </>
              ) : (
                  <>
                    <li><Link to="/signin">Login</Link></li>
                    <li><Link to="/signup">Register</Link></li>
                  </>
              )}
            </ul>
          </div>
        </div>
      </header>
  );
};

export default Header;
