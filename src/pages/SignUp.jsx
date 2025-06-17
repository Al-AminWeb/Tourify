import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.jsx';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';
import axios from "axios";


const backgroundImageUrl = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop';


const SignUp = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, name, photo } = Object.fromEntries(formData.entries());

    if (!name || !email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields!',
      });
      return;
    }

    createUser(email, password)
        .then(result => {
          updateUser({ displayName: name, photoURL: photo })
              .then(() => {
                setUser({ ...result?.user, displayName: name, photoURL: photo });

                Swal.fire({
                  icon: 'success',
                  title: 'Your Adventure Awaits!',
                  text: 'Account created successfully.',
                  showConfirmButton: false,
                  timer: 2000,
                });


                if (result?.user?.email) {

                  axios.post(`https://tourify-server.vercel.app/jwt`, {
                    email: result.user.email,
                  })
                      .then(res => {

                        localStorage.setItem('token', res.data.token);


                        navigate('/');
                      })
                      .catch(error => {
                        console.error("JWT Error:", error.message);
                        Swal.fire({
                          icon: 'error',
                          title: 'Token Error',
                          text: 'Something went wrong while generating your token. Please try again.',
                          background: '#1a202c',
                          color: '#e2e8f0',
                        });
                      });
                }
              })
              .catch(error => {
                console.log(error);
                Swal.fire({
                  icon: 'error',
                  title: 'Something went wrong',
                  text: error.message,
                });
              });
        })
        .catch(error => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: error.message,
          });
        });
  };



  return (
      <div
          className='min-h-screen bg-cover bg-center flex items-center justify-center p-4'
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className='w-full max-w-md  bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-2xl p-8'>
          <div className='text-center text-primary mb-8'>
            <h1 className='text-4xl font-bold tracking-tight'>Join The Journey</h1>
            <p className='text-lg text-neutral mt-2'>Create an account to discover amazing tours.</p>
          </div>
          <form onSubmit={handleSignUp} className='space-y-6'>
            {/* Name Field */}
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <FaUser className='text-gray-300' />
              </div>
              <input
                  type='text'
                  name='name'
                  className='input input-bordered w-full pl-10 bg-gray-700 bg-opacity-50 text-white placeholder-gray-300 focus:border-cyan-400 focus:ring focus:ring-cyan-300 focus:ring-opacity-50'
                  placeholder='Your Name'
                  required
              />
            </div>

            {/* Photo URL Field */}
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <FaImage className='text-gray-300' />
              </div>
              <input
                  type='text'
                  name='photo'
                  className='input input-bordered w-full pl-10 bg-gray-700 bg-opacity-50 text-white placeholder-gray-300 focus:border-cyan-400 focus:ring focus:ring-cyan-300 focus:ring-opacity-50'
                  placeholder='Photo URL (optional)'
              />
            </div>

            {/* Email Field */}
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <FaEnvelope className='text-gray-300' />
              </div>
              <input
                  type='email'
                  name='email'
                  className='input input-bordered w-full pl-10 bg-gray-700 bg-opacity-50 text-white placeholder-gray-300 focus:border-cyan-400 focus:ring focus:ring-cyan-300 focus:ring-opacity-50'
                  placeholder='Your Email'
                  required
              />
            </div>

            {/* Password Field */}
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <FaLock className='text-gray-300' />
              </div>
              <input
                  type='password'
                  name='password'
                  className='input input-bordered w-full pl-10 bg-gray-700 bg-opacity-50 text-white placeholder-gray-300 focus:border-cyan-400 focus:ring focus:ring-cyan-300 focus:ring-opacity-50'
                  placeholder='Password'
                  required
              />
            </div>

            <div className='flex items-center justify-between text-sm'>
              <a href='#' className='link link-hover text-cyan-300 hover:text-cyan-200'>
                Forgot password?
              </a>
            </div>

            <button type='submit' className='btn bg-cyan-500 hover:bg-cyan-600 border-none text-white w-full text-lg'>
              Create Account
            </button>
          </form>
          <p className='text-center text-sm text-gray-200 mt-6'>
            Already have an account?{' '}
            <a href='/login' className='font-bold text-cyan-300 hover:underline'>
              Log In
            </a>
          </p>
        </div>
      </div>
  );
};

export default SignUp;