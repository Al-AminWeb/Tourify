import { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { ChevronDown, LogOut, Plus, Settings } from 'lucide-react';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
      <div className='navbar shadow-md sticky top-0 z-50 px-4 md:px-8 bg-base-100'>
        {/* Left */}
        <div className='navbar-start'>
          <div className='dropdown'>
            <button tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
            <ul className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/all-packages'>All Packages</Link></li>
              <li><Link to='/about'>About</Link></li>
              {user && (
                  <>
                    <li><Link to='/manage-packages'>Manage My Packages</Link></li>
                    <li><Link to='/add-packages'>Add Package</Link></li>
                  </>
              )}
            </ul>
          </div>
          <Link to='/' className='text-2xl font-bold text-primary'>Tourify</Link>
        </div>

        {/* Center - Theme Toggle */}


        {/* Right */}
        <div className='navbar-end hidden lg:flex'>
          <div className='navbar-center'>
            <label className='swap swap-rotate'>
              {/* Light Icon */}
              <svg className='swap-on fill-current w-6 h-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M5.64 17.657l-1.414 1.414 1.414-1.414zM4.222 12H1v0h3.222zm1.414-5.657L4.222 4.929l1.414 1.414zM12 1v3.222V1zm5.657 4.222l1.414-1.414-1.414 1.414zM23 12h-3.222H23zm-4.222 5.657l1.414 1.414-1.414-1.414zM12 23v-3.222V23zM7.05 7.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9z' />
              </svg>

              {/* Dark Icon */}
              <svg className='swap-off fill-current w-6 h-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M21.64 13.41a9 9 0 0 1-11.05-11.05 9.001 9.001 0 1 0 11.05 11.05z' />
              </svg>

              <input type='checkbox' className='theme-controller hidden' value='dark' />
            </label>
          </div>
          <ul className='menu menu-horizontal px-1 items-center gap-2'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/all-packages'>All Packages</Link></li>
            <li><Link to='/about'>About</Link></li>
            {user ? (
                <>
                  <li><Link to={`/my-bookings/${user?.email}`}>My Bookings</Link></li>
                  <div className='relative'>
                    <button onClick={toggleDropdown} className='flex items-center gap-2 btn btn-ghost'>
                      {user?.photoURL && (
                          <img src={user.photoURL} alt='Profile' className='w-8 h-8 rounded-full border shadow' />
                      )}
                      <ChevronDown size={18} />
                    </button>
                    {dropdownOpen && (
                        <div className='absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10'>
                          <ul className='menu p-2'>
                            <li><Link to='/add-packages' className='flex items-center gap-2'><Plus size={16} />Add Package</Link></li>
                            <li><Link to='/manage-packages' className='flex items-center gap-2'><Settings size={16} />Manage My Packages</Link></li>
                            <li><button onClick={()=>{
                              localStorage.removeItem('token');
                              logOut();
                            }} className='flex items-center gap-2 text-red-500'><LogOut size={16} />Logout</button></li>
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
