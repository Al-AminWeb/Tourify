import { use, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext.jsx';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router';

const SignIn = () => {

  const { signIn } = use(AuthContext);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
        .then((result) => {
          Swal.fire({
            icon: 'success',
            title: 'Welcome Back, Explorer!',
            text: 'Your next adventure awaits.',
            background: '#1a202c', // Dark background for the modal
            color: '#e2e8f0',      // Light text color
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          navigate(from, { replace: true });
        })
        .catch((err) => {
          const errorMessage = err.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '');
          Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: errorMessage || 'Invalid credentials. Please check your details.',
            background: '#1a202c',
            color: '#e2e8f0',
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
  };

  const handleGoogleSignIn = () => {
    Swal.fire({
      icon: 'info',
      title: 'Coming Soon!',
      text: 'Google Sign-In functionality is under development.',
      background: '#1a202c',
      color: '#e2e8f0',
    })
  }

  return (
      <div
          className='min-h-screen flex items-center justify-center bg-cover bg-center p-4'
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1528640/pexels-photo-1528640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        <div className='bg-gray-900/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700/50'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-white'>
              Start Your Journey
            </h2>
            <p className='text-gray-400 mt-2'>
              Sign in to access your travel plans.
            </p>
          </div>

          <form onSubmit={handleSignIn} className='space-y-6'>
            {/* Email Input */}
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
              <input
                  type='email'
                  name='email'
                  required
                  className='w-full input bg-gray-800/50 border-gray-700 text-white pl-12 placeholder-gray-500 focus:border-amber-500'
                  placeholder='Email Address'
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <input
                  type='password'
                  name='password'
                  required
                  className='w-full input bg-gray-800/50 border-gray-700 text-white pl-12 placeholder-gray-500 focus:border-amber-500'
                  placeholder='Password'
              />
            </div>

            <div className='flex justify-end text-sm'>
              <a href='#' className='text-amber-500 hover:text-amber-400 hover:underline'>
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
                type='submit'
                disabled={isSubmitting}
                className='btn btn-warning w-full bg-amber-600 hover:bg-amber-700 border-none text-white font-bold tracking-wide text-lg'
            >
              {isSubmitting ? <span className="loading loading-spinner"></span> : 'Sign In'}
            </button>
          </form>

          <div className="divider text-gray-500 my-6">OR</div>

          {/* Social Login */}
          <button onClick={handleGoogleSignIn} className="btn btn-outline border-gray-600 hover:bg-gray-800 hover:border-gray-500 text-white w-full">
            <svg className="w-4 h-4 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-72.2 72.2C297.1 114.5 273.5 104 248 104 177.1 104 116.1 165.1 116.1 236H116c0 70.9 61.1 132 132.1 132 72.3 0 124.1-53.9 124.1-124.1 0-10.3-.7-20.5-2.4-30.6H248v-85.3h236.1c2.3 12.7 3.9 26.1 3.9 40.2z"></path></svg>
            Continue with Google
          </button>

          {/* Sign Up Link */}
          <p className='text-center text-sm text-gray-400 mt-8'>
            New to Tourify?{' '}
            <Link to='/signup' className='text-amber-500 font-semibold hover:text-amber-400 hover:underline'>
              Create an Account
            </Link>
          </p>
        </div>
      </div>
  );
};

export default SignIn;
