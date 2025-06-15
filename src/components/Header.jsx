import { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { ChevronDown, LogOut, Plus, Settings } from 'lucide-react';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
      <div className='navbar bg-white shadow-md sticky top-0 z-50 px-4 md:px-8'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <button tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
            <ul className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/all-coffees'>All Packages</Link></li>
              <li><Link to='/about'>About</Link></li>
              {user && (
                  <>
                    <li><Link to='/'>Manage My Packages</Link></li>
                    <li><Link to='/add-packages'>Add Package</Link></li>
                  </>
              )}
            </ul>
          </div>
          <Link to='/' className='text-2xl font-bold text-primary'>Tourify</Link>
        </div>

        <div className='navbar-end hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 items-center gap-2'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/all-coffees'>All Packages</Link></li>
            <li><Link to='/about'>About</Link></li>
            {user ? (
                <>
                  <li><Link to='/my-added-coffees'>My Bookings</Link></li>
                  <div className='relative'>
                    <button onClick={toggleDropdown} className='flex items-center gap-2 btn btn-ghost'>
                      {user?.photoURL && (
                          <img
                              src={user.photoURL}
                              alt='Profile'
                              className='w-8 h-8 rounded-full border shadow'
                          />
                      )}
                      <ChevronDown size={18} />
                    </button>
                    {dropdownOpen && (
                        <div className='absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10'>
                          <ul className='menu p-2'>
                            <li><Link to='/add-packages' className='flex items-center gap-2'><Plus size={16} />Add Package</Link></li>
                            <li><Link to='/manage-packages' className='flex items-center gap-2'><Settings size={16} />Manage My Packages</Link></li>
                            <li><button onClick={logOut} className='flex items-center gap-2 text-red-500'><LogOut size={16} />Logout</button></li>
                          </ul>
                        </div>
                    )}
                  </div>
                </>
            ) : (
                <>
                  <li><Link to='/signin'>Login</Link></li>
                  <li><Link to='/signup'>Register</Link></li>
                </>
            )}
          </ul>
        </div>
      </div>
  );
};

export default Header;
