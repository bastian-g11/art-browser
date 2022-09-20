/* eslint-disable @next/next/no-img-element */
import { FormEvent } from 'react';
import { NextPage } from 'next/types';
import Image from 'next/image';

const onSubmit = (event?: FormEvent<HTMLFormElement>) => {
  event?.preventDefault();
};

// {/* <div className='relative h-screen translate-x-1/2'>
//   <Image
//     src='/sunrise.jpg'
//     alt='sunrise'
//     layout='fill'
//     className='object-cover  '
//   />
// </div> */}
const Login: NextPage = () => (
  <div className='container flex justify-center items-center w-screen h-screen '>
    <div className='w-full max-w-xs '>
      <form
        onSubmit={onSubmit}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='text'
              placeholder='Email'
            />
          </label>
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
            <input
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
            />
          </label>
          <p className='text-red-500 text-xs italic'>
            Please choose a password.
          </p>
        </div>
        <div className='flex justify-center'>
          <button
            className='bg-orange-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
          >
            Sign In
          </button>
        </div>
      </form>
      <p className='text-center text-gray-500 text-xs'>
        &copy;2022 @bastian-g11. All rights reserved.
      </p>
    </div>
  </div>
);

export default Login;
